// ===========================================================================
// State, storage & helpers
// ===========================================================================

const state = {
    task: null,
    lang: null,
    params: {},
    generated: "",
    options: {
        filename: "",
        header: true,
        live: true
    }
};

const STORAGE = {
    theme: "scriptforge:theme",
    history: "scriptforge:history",
    lastSelection: "scriptforge:last",
    options: "scriptforge:options"
};

const HISTORY_MAX = 10;
const LIVE_DEBOUNCE = 250;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function debounce(fn, wait) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
    };
}

function formatBytes(b) {
    if (b < 1024) return b + " B";
    if (b < 1024 * 1024) return (b / 1024).toFixed(1) + " KB";
    return (b / 1024 / 1024).toFixed(2) + " MB";
}

// ===========================================================================
// Theme
// ===========================================================================

function initTheme() {
    const saved = localStorage.getItem(STORAGE.theme);
    const prefers = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    document.documentElement.dataset.theme = saved || prefers;
}

function toggleTheme() {
    const cur = document.documentElement.dataset.theme || "dark";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(STORAGE.theme, next);
}

// ===========================================================================
// Options (persisted)
// ===========================================================================

function loadOptions() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE.options) || "{}");
        Object.assign(state.options, saved);
    } catch { /* keep defaults */ }
    $("#opt-filename").value = state.options.filename || "";
    $("#opt-header").checked = state.options.header;
    $("#opt-live").checked = state.options.live;
}

function saveOptions() {
    localStorage.setItem(STORAGE.options, JSON.stringify(state.options));
}

// ===========================================================================
// Tasks (rendering by category)
// ===========================================================================

function renderTasks() {
    const container = $("#tasks");
    container.innerHTML = "";

    const groups = new Map();
    for (const [id, meta] of Object.entries(TASK_META)) {
        if (!groups.has(meta.category)) groups.set(meta.category, []);
        groups.get(meta.category).push({ id, ...meta });
    }

    for (const [category, tasks] of groups) {
        const cat = document.createElement("div");
        cat.className = "category";
        cat.innerHTML = `<div class="category-label">${category}<span class="cat-count">${tasks.length}</span></div>`;

        const grid = document.createElement("div");
        grid.className = "task-grid";

        for (const task of tasks) {
            const btn = document.createElement("button");
            btn.className = "task-option";
            btn.dataset.task = task.id;
            btn.dataset.searchKey = `${task.label} ${task.description} ${task.category}`.toLowerCase();
            btn.title = task.description;
            btn.setAttribute("aria-label", task.label);
            btn.innerHTML = `
                <div class="task-icon">${task.icon}</div>
                <span class="task-label">${task.label}</span>
            `;
            btn.addEventListener("click", () => selectTask(task.id));
            grid.appendChild(btn);
        }

        cat.appendChild(grid);
        container.appendChild(cat);
    }
}

function selectTask(taskId) {
    state.task = taskId;
    $$("#tasks .task-option").forEach(btn => {
        btn.classList.toggle("selected", btn.dataset.task === taskId);
    });
    renderParams();
    updateStepper();
    updateGenerateButton();
    saveLastSelection();
    livePreview();
}

function filterTasks(query) {
    const q = query.trim().toLowerCase();
    $$("#tasks .task-option").forEach(btn => {
        btn.hidden = q !== "" && !btn.dataset.searchKey.includes(q);
    });
    $$("#tasks .category").forEach(cat => {
        const anyVisible = Array.from(cat.querySelectorAll(".task-option"))
            .some(b => !b.hidden);
        cat.style.display = anyVisible ? "" : "none";
    });
}

// ===========================================================================
// Languages
// ===========================================================================

function initLanguages() {
    $$("#languages .lang-option").forEach(btn => {
        btn.addEventListener("click", () => {
            state.lang = btn.dataset.lang;
            $$("#languages .lang-option").forEach(b => {
                b.classList.toggle("selected", b.dataset.lang === state.lang);
            });
            // Re-render params quando troca a linguagem — necessário pro software-picker
            // refletir suporte por plataforma.
            if (state.task) renderParams();
            updateStepper();
            updateGenerateButton();
            saveLastSelection();
            livePreview();
        });
    });
}

// ===========================================================================
// Parameters
// ===========================================================================

function renderParams() {
    const card = $("#params-card");
    const container = $("#params-container");
    const description = $("#task-description");
    const info = $("#task-info");

    if (!state.task) {
        card.hidden = true;
        return;
    }

    const meta = TASK_META[state.task];
    const params = TASK_PARAMS[state.task] || [];

    info.textContent = state.task;
    description.textContent = meta.description;
    card.hidden = false;

    if (params.length === 0) {
        container.innerHTML = "<p class='hint' style='color:var(--text-muted)'>Esta tarefa não tem parâmetros.</p>";
        return;
    }

    container.innerHTML = "";

    params.forEach(param => {
        const group = document.createElement("div");
        group.className = "param-group";

        const label = document.createElement("label");
        label.textContent = param.label;
        label.setAttribute("for", `param-${param.name}`);
        group.appendChild(label);

        // Tipo especial: catálogo de software (multi-select visual).
        if (param.type === "software-picker") {
            const picker = renderSoftwarePicker(param);
            group.appendChild(picker);
            group.style.gridColumn = "1 / -1";  // ocupa toda a largura
            group.style.gridRow = "auto";       // sai do span 3 do subgrid
            group.style.display = "block";      // sai do display:grid pra fluir natural
            container.appendChild(group);
            return;
        }

        let input;
        if (param.type === "select") {
            input = document.createElement("select");
            param.options.forEach(opt => {
                const o = document.createElement("option");
                o.value = opt.value;
                o.textContent = opt.label;
                if (opt.value === (state.params[param.name] ?? param.default)) o.selected = true;
                input.appendChild(o);
            });
        } else {
            input = document.createElement("input");
            input.type = param.type || "text";
            input.value = state.params[param.name] ?? param.default ?? "";
        }
        input.id = `param-${param.name}`;
        input.dataset.name = param.name;

        const hint = document.createElement("div");
        hint.className = "hint";
        hint.textContent = param.hint || "";

        const onChange = () => {
            state.params[param.name] = input.value;
            if (param.validate) {
                const result = param.validate(input.value);
                if (result === true) {
                    input.classList.remove("invalid");
                    hint.textContent = param.hint || "";
                } else {
                    input.classList.add("invalid");
                    hint.textContent = result;
                }
            }
            livePreview();
        };
        input.addEventListener("input", onChange);
        input.addEventListener("change", onChange);

        state.params[param.name] = input.value;
        group.appendChild(input);
        group.appendChild(hint);
        container.appendChild(group);
    });
}

// ===========================================================================
// Software picker (catálogo visual de programas)
// ===========================================================================

function renderSoftwarePicker(param) {
    const container = document.createElement("div");
    container.className = "software-picker";

    // Inicializa seleção a partir do state.
    if (!Array.isArray(state.params[param.name])) {
        state.params[param.name] = [];
    }
    const selected = new Set(state.params[param.name]);

    // Header com busca + contador.
    const header = document.createElement("div");
    header.className = "sp-header";
    header.innerHTML = `
        <div class="sp-search-wrap">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="search" class="sp-search" placeholder="Buscar programa...">
        </div>
        <div class="sp-counter"><span class="sp-count">${selected.size}</span> selecionados</div>
    `;
    container.appendChild(header);

    const counter = header.querySelector(".sp-count");
    const search = header.querySelector(".sp-search");

    // Lista de categorias + cards.
    const body = document.createElement("div");
    body.className = "sp-body";

    SOFTWARE_CATALOG.forEach(cat => {
        const catEl = document.createElement("div");
        catEl.className = "sp-category";

        const catLabel = document.createElement("div");
        catLabel.className = "sp-cat-label";
        catLabel.textContent = cat.category;
        catEl.appendChild(catLabel);

        const grid = document.createElement("div");
        grid.className = "sp-grid";

        cat.items.forEach(item => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "sp-card";
            card.dataset.id = item.id;
            card.dataset.searchKey = item.name.toLowerCase();
            if (selected.has(item.id)) card.classList.add("selected");

            // Marca itens sem suporte na linguagem atual.
            const supported = isSoftwareSupported(item, state.lang);
            if (!supported) card.classList.add("unsupported");

            card.innerHTML = `
                <div class="sp-avatar" style="background:${item.color}">${item.letter}</div>
                <div class="sp-name">${item.name}</div>
                ${supported ? "" : `<div class="sp-warn" title="Não disponível em ${LANG_META[state.lang]?.name || 'bash'}">!</div>`}
            `;

            card.addEventListener("click", () => {
                if (selected.has(item.id)) {
                    selected.delete(item.id);
                    card.classList.remove("selected");
                } else {
                    selected.add(item.id);
                    card.classList.add("selected");
                }
                state.params[param.name] = Array.from(selected);
                counter.textContent = selected.size;
                livePreview();
            });

            grid.appendChild(card);
        });

        catEl.appendChild(grid);
        body.appendChild(catEl);
    });

    container.appendChild(body);

    // Filtro de busca dentro do picker.
    search.addEventListener("input", () => {
        const q = search.value.trim().toLowerCase();
        body.querySelectorAll(".sp-card").forEach(card => {
            card.hidden = q && !card.dataset.searchKey.includes(q);
        });
        body.querySelectorAll(".sp-category").forEach(catEl => {
            const anyVisible = Array.from(catEl.querySelectorAll(".sp-card")).some(c => !c.hidden);
            catEl.style.display = anyVisible ? "" : "none";
        });
    });

    return container;
}

function isSoftwareSupported(item, lang) {
    if (lang === "bash") return !!item.apt;
    return !!item.winget;  // PowerShell e Python usam winget
}

function validateParams(silent = false) {
    const params = TASK_PARAMS[state.task] || [];
    for (const param of params) {
        if (!param.validate) continue;
        const value = state.params[param.name] ?? "";
        const result = param.validate(value);
        if (result !== true) {
            if (!silent) {
                const input = document.getElementById(`param-${param.name}`);
                if (input) {
                    input.classList.add("invalid");
                    input.focus();
                }
                showToast(result, "error");
            }
            return false;
        }
    }
    return true;
}

// ===========================================================================
// Stepper
// ===========================================================================

function updateStepper() {
    const steps = $$(".stepper .step");
    const status = [
        !!state.task,
        !!state.lang,
        !!(state.task && state.lang),
        !!state.generated
    ];

    steps.forEach((el, i) => {
        el.classList.remove("active", "complete");
        if (status[i]) el.classList.add("complete");
    });

    const next = status.findIndex(s => !s);
    if (next !== -1) steps[next].classList.add("active");
}

// ===========================================================================
// Generate + live preview
// ===========================================================================

function updateGenerateButton() {
    $("#generate").disabled = !(state.task && state.lang);
}

function buildScript() {
    if (!state.task || !state.lang) return "";
    const generator = TEMPLATES[state.task]?.[state.lang];
    if (!generator) return "";

    const params = {};
    (TASK_PARAMS[state.task] || []).forEach(p => {
        params[p.name] = state.params[p.name] ?? p.default ?? "";
    });

    // Transformação especial pra install-software: catálogo + extras → string `packages`.
    if (state.task === "install-software") {
        params.packages = softwareToPackages(
            state.params.selectedSoftware || [],
            state.params.customPackages || "",
            state.lang
        );
    }

    let code = generator(params);

    if (state.options.header) {
        const taskLabel = TASK_META[state.task].label;
        const header = generateHeader(state.lang, taskLabel, params);
        code = applyHeader(code, header);
    }

    return code;
}

function generateScript(opts = { showToasts: true }) {
    if (!state.task || !state.lang) return;
    if (!validateParams(!opts.showToasts)) return;

    state.generated = buildScript();
    renderOutput();
    updateStepper();

    if (opts.scrollTo) {
        $("#output-card").scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function renderOutput() {
    if (!state.generated) {
        $("#output-card").hidden = true;
        $("#welcome-card").hidden = false;
        return;
    }

    const meta = LANG_META[state.lang];
    const filename = state.options.filename.trim() ||
        `${TASK_NAMES[state.task]}.${meta.ext}`;

    $("#welcome-card").hidden = true;
    $("#output-card").hidden = false;
    $("#lang-badge").textContent = meta.name;
    $("#lang-badge").className = `lang-badge ${state.lang}`;
    $("#filename").textContent = filename;

    const lines = state.generated.split("\n").length;
    const bytes = new Blob([state.generated]).size;
    $("#stats").textContent = `${lines} linhas • ${formatBytes(bytes)}`;

    $("#output-code").innerHTML = window.highlight(state.generated, state.lang);

    // Line numbers
    const ln = $("#line-numbers");
    ln.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join("\n");
}

const livePreview = debounce(() => {
    if (!state.options.live) return;
    if (!state.task || !state.lang) return;
    if (!validateParams(true)) return;
    state.generated = buildScript();
    renderOutput();
}, LIVE_DEBOUNCE);

// ===========================================================================
// Output actions
// ===========================================================================

async function copyToClipboard() {
    if (!state.generated) return;
    try {
        await navigator.clipboard.writeText(state.generated);
        showToast("Script copiado para a área de transferência.", "success");
    } catch {
        const textarea = document.createElement("textarea");
        textarea.value = state.generated;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showToast("Script copiado.", "success");
    }
}

function downloadScript() {
    if (!state.generated) return;
    const meta = LANG_META[state.lang];
    const filename = state.options.filename.trim() ||
        `${TASK_NAMES[state.task]}.${meta.ext}`;
    // PowerShell 5.1 lê .ps1 como ANSI por padrão; com BOM UTF-8, decodifica corretamente acentos.
    const content = state.lang === "powershell" ? "﻿" + state.generated : state.generated;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Baixado: ${filename}`, "success");

    addToHistory({
        task: state.task,
        lang: state.lang,
        params: { ...state.params },
        timestamp: Date.now()
    });
}

function resetAll() {
    state.task = null;
    state.lang = null;
    state.params = {};
    state.generated = "";
    $$(".task-option, .lang-option").forEach(b => b.classList.remove("selected"));
    $("#params-card").hidden = true;
    $("#output-card").hidden = true;
    $("#welcome-card").hidden = false;
    $("#task-search").value = "";
    filterTasks("");
    updateStepper();
    updateGenerateButton();
    localStorage.removeItem(STORAGE.lastSelection);
    history.replaceState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
    showToast("Tudo limpo.", "info");
}

// ===========================================================================
// Fullscreen + wrap toggle
// ===========================================================================

function toggleFullscreen() {
    const wrap = $("#code-wrap");
    wrap.classList.toggle("fullscreen");
    $("#toggle-fullscreen").classList.toggle("active", wrap.classList.contains("fullscreen"));
}

function toggleWrap() {
    const wrap = $("#code-wrap");
    wrap.classList.toggle("wrap");
    $("#toggle-wrap").classList.toggle("active", wrap.classList.contains("wrap"));
}

// ===========================================================================
// History
// ===========================================================================

function loadHistory() {
    try { return JSON.parse(localStorage.getItem(STORAGE.history) || "[]"); }
    catch { return []; }
}

function saveHistory(h) {
    localStorage.setItem(STORAGE.history, JSON.stringify(h));
}

function addToHistory(entry) {
    const h = loadHistory();
    // Evita duplicar a última entrada idêntica
    const last = h[0];
    if (last && last.task === entry.task && last.lang === entry.lang &&
        JSON.stringify(last.params) === JSON.stringify(entry.params)) return;
    h.unshift(entry);
    saveHistory(h.slice(0, HISTORY_MAX));
    renderHistory();
}

function renderHistory() {
    const list = $("#history-list");
    const h = loadHistory();

    if (h.length === 0) {
        list.innerHTML = `<p class="empty-state">Nenhum script gerado ainda.</p>`;
        return;
    }

    list.innerHTML = "";
    h.forEach(entry => {
        const item = document.createElement("div");
        item.className = "history-item";
        const taskLabel = TASK_META[entry.task]?.label ?? entry.task;
        const date = new Date(entry.timestamp);
        const dateStr = date.toLocaleString("pt-BR", {
            day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit"
        });
        item.innerHTML = `
            <div class="history-item-title">
                <span>${taskLabel}</span>
                <span class="lang-badge ${entry.lang}">${LANG_META[entry.lang].name}</span>
            </div>
            <div class="history-item-meta">${dateStr}</div>
        `;
        item.addEventListener("click", () => restoreFromHistory(entry));
        list.appendChild(item);
    });
}

function restoreFromHistory(entry) {
    if (!TASK_META[entry.task] || !LANG_META[entry.lang]) {
        showToast("Entrada do histórico inválida.", "error");
        return;
    }
    state.params = { ...entry.params };
    selectTask(entry.task);
    state.lang = entry.lang;
    $$("#languages .lang-option").forEach(b => {
        b.classList.toggle("selected", b.dataset.lang === entry.lang);
    });

    Object.entries(entry.params).forEach(([name, value]) => {
        const input = document.getElementById(`param-${name}`);
        if (input) input.value = value;
    });

    updateGenerateButton();
    updateStepper();
    closeDrawer();
    generateScript({ showToasts: false, scrollTo: true });
}

function clearHistory() {
    if (loadHistory().length === 0) return;
    localStorage.removeItem(STORAGE.history);
    renderHistory();
    showToast("Histórico limpo.", "info");
}

// ===========================================================================
// Drawer
// ===========================================================================

function openDrawer() {
    $("#history-drawer").classList.add("open");
    $("#history-drawer").setAttribute("aria-hidden", "false");
    $("#drawer-backdrop").classList.add("show");
    renderHistory();
}

function closeDrawer() {
    $("#history-drawer").classList.remove("open");
    $("#history-drawer").setAttribute("aria-hidden", "true");
    $("#drawer-backdrop").classList.remove("show");
}

// ===========================================================================
// Modals
// ===========================================================================

function openShortcuts() {
    $("#shortcuts-modal").hidden = false;
}

function closeShortcuts() {
    $("#shortcuts-modal").hidden = true;
}

// ===========================================================================
// Share via URL hash (base64 encoded JSON)
// ===========================================================================

function shareLink() {
    if (!state.task || !state.lang) {
        showToast("Selecione tarefa e linguagem primeiro.", "warning");
        return;
    }
    const payload = {
        t: state.task,
        l: state.lang,
        p: state.params
    };
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    const url = `${window.location.origin}${window.location.pathname}#s=${encoded}`;
    history.replaceState(null, "", `#s=${encoded}`);
    navigator.clipboard?.writeText(url).then(
        () => showToast("Link copiado! Compartilhe pra abrir com a mesma config.", "success"),
        () => showToast("Link gerado na barra de endereço.", "info")
    );
}

function restoreFromHash() {
    const hash = window.location.hash;
    if (!hash.startsWith("#s=")) return false;
    try {
        const decoded = decodeURIComponent(escape(atob(hash.slice(3))));
        const data = JSON.parse(decoded);
        if (!TASK_META[data.t] || !LANG_META[data.l]) return false;

        state.params = { ...data.p };
        selectTask(data.t);
        state.lang = data.l;
        $$("#languages .lang-option").forEach(b => {
            b.classList.toggle("selected", b.dataset.lang === data.l);
        });
        Object.entries(data.p).forEach(([name, value]) => {
            const input = document.getElementById(`param-${name}`);
            if (input) input.value = value;
        });
        updateGenerateButton();
        updateStepper();
        generateScript({ showToasts: false });
        showToast("Configuração restaurada do link compartilhado.", "info");
        return true;
    } catch {
        return false;
    }
}

// ===========================================================================
// Persistence of last selection
// ===========================================================================

function saveLastSelection() {
    localStorage.setItem(STORAGE.lastSelection, JSON.stringify({
        task: state.task, lang: state.lang
    }));
}

function restoreLastSelection() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE.lastSelection) || "null");
        if (!saved) return;
        if (saved.task && TASK_META[saved.task]) selectTask(saved.task);
        if (saved.lang && LANG_META[saved.lang]) {
            state.lang = saved.lang;
            $$("#languages .lang-option").forEach(b => {
                b.classList.toggle("selected", b.dataset.lang === saved.lang);
            });
            updateGenerateButton();
            updateStepper();
            livePreview();
        }
    } catch { /* ignora */ }
}

// ===========================================================================
// Toasts
// ===========================================================================

const TOAST_ICONS = {
    success: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    error:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    warning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
};

function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `${TOAST_ICONS[type] || TOAST_ICONS.info}<span>${message}</span>`;
    $("#toasts").appendChild(toast);
    setTimeout(() => toast.remove(), 2700);
}

// ===========================================================================
// Init
// ===========================================================================

function init() {
    initTheme();
    renderTasks();
    initLanguages();
    loadOptions();

    $("#theme-btn").addEventListener("click", toggleTheme);
    $("#history-btn").addEventListener("click", openDrawer);
    $("#close-history").addEventListener("click", closeDrawer);
    $("#drawer-backdrop").addEventListener("click", closeDrawer);
    $("#clear-history").addEventListener("click", clearHistory);
    $("#share-btn").addEventListener("click", shareLink);

    $("#generate").addEventListener("click", () => generateScript({ showToasts: true, scrollTo: true }));
    $("#copy").addEventListener("click", copyToClipboard);
    $("#download").addEventListener("click", downloadScript);
    $("#reset").addEventListener("click", resetAll);
    $("#toggle-fullscreen").addEventListener("click", toggleFullscreen);
    $("#toggle-wrap").addEventListener("click", toggleWrap);

    $("#task-search").addEventListener("input", (e) => filterTasks(e.target.value));

    // Opções avançadas
    $("#opt-filename").addEventListener("input", (e) => {
        state.options.filename = e.target.value;
        saveOptions();
        if (state.generated) renderOutput();
    });
    $("#opt-header").addEventListener("change", (e) => {
        state.options.header = e.target.checked;
        saveOptions();
        livePreview();
        if (!state.options.live && state.generated) {
            state.generated = buildScript();
            renderOutput();
        }
    });
    $("#opt-live").addEventListener("change", (e) => {
        state.options.live = e.target.checked;
        saveOptions();
        if (state.options.live) livePreview();
    });

    // Shortcuts modal
    $("#show-shortcuts").addEventListener("click", (e) => { e.preventDefault(); openShortcuts(); });
    $("#close-shortcuts").addEventListener("click", closeShortcuts);
    $("#shortcuts-modal").addEventListener("click", (e) => {
        if (e.target.id === "shortcuts-modal") closeShortcuts();
    });

    // Atalhos de teclado globais
    document.addEventListener("keydown", (e) => {
        const inInput = ["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName);

        if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && !$("#generate").disabled) {
            e.preventDefault();
            generateScript({ showToasts: true, scrollTo: true });
        }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s" && state.generated) {
            e.preventDefault();
            downloadScript();
        }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "j") {
            e.preventDefault();
            toggleTheme();
        }
        if (e.key === "Escape") {
            if (!$("#shortcuts-modal").hidden) closeShortcuts();
            else if ($("#code-wrap").classList.contains("fullscreen")) toggleFullscreen();
            else closeDrawer();
        }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            $("#task-search").focus();
        }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "l" && !inInput) {
            e.preventDefault();
            resetAll();
        }
        if (e.key === "?" && !inInput) {
            e.preventDefault();
            openShortcuts();
        }
        if (e.key.toLowerCase() === "f" && !inInput && state.generated) {
            e.preventDefault();
            toggleFullscreen();
        }
    });

    // Restaura: hash > última seleção
    if (!restoreFromHash()) {
        restoreLastSelection();
    }
    updateStepper();
}

document.addEventListener("DOMContentLoaded", init);

// ===========================================================================
// Service Worker — suporte offline (PWA)
// ===========================================================================

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .catch(() => { /* offline support é opcional, não falha o app */ });
    });
}
