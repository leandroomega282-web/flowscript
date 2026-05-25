// Tokenizador simples para PowerShell, Bash e Python.
// Não é um parser completo — apenas o suficiente pra ficar bonito.

const HL_RULES = {
    powershell: [
        { type: "comment",  regex: /#.*$/gm },
        { type: "string",   regex: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g },
        { type: "variable", regex: /\$[\w:]+/g },
        { type: "keyword",  regex: /\b(if|else|elseif|foreach|for|while|do|switch|function|return|param|begin|process|end|try|catch|finally|throw|break|continue|exit|in|not|and|or|true|false|null)\b/gi },
        { type: "function", regex: /\b([A-Z][a-z]+-[A-Z][a-zA-Z]+)\b/g },
        { type: "number",   regex: /\b\d+(\.\d+)?\b/g }
    ],
    bash: [
        { type: "shebang",  regex: /^#!.*$/gm },
        { type: "comment",  regex: /#.*$/gm },
        { type: "string",   regex: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g },
        { type: "variable", regex: /\$\{?[\w]+\}?/g },
        { type: "keyword",  regex: /\b(if|then|else|elif|fi|for|while|do|done|case|esac|function|return|in|exit|break|continue|true|false|local|export|readonly|declare)\b/g },
        { type: "function", regex: /\b(echo|printf|sudo|cd|mkdir|rm|cp|mv|chmod|chown|grep|sed|awk|tar|find|test|read|set|unset|trap|source|command)\b/g },
        { type: "number",   regex: /\b\d+(\.\d+)?\b/g }
    ],
    python: [
        { type: "shebang",  regex: /^#!.*$/gm },
        { type: "comment",  regex: /#.*$/gm },
        { type: "string",   regex: /"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g },
        { type: "keyword",  regex: /\b(def|class|if|elif|else|for|while|try|except|finally|with|as|return|yield|import|from|pass|break|continue|raise|in|is|not|and|or|lambda|True|False|None|global|nonlocal|async|await)\b/g },
        { type: "function", regex: /\b(print|len|range|str|int|float|list|dict|set|tuple|open|input|isinstance|type|hasattr|getattr|setattr)\b/g },
        { type: "number",   regex: /\b\d+(\.\d+)?\b/g }
    ]
};

function escapeHtml(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
}

function highlight(code, lang) {
    const rules = HL_RULES[lang];
    if (!rules) return escapeHtml(code);

    // Coleta todos os matches sem sobreposição (prioridade pela ordem das regras).
    const spans = [];
    const taken = new Uint8Array(code.length);

    for (const rule of rules) {
        rule.regex.lastIndex = 0;
        let m;
        while ((m = rule.regex.exec(code)) !== null) {
            const start = m.index;
            const end = start + m[0].length;
            if (m[0].length === 0) { rule.regex.lastIndex++; continue; }

            // Pula se algum byte já está marcado.
            let overlap = false;
            for (let i = start; i < end; i++) {
                if (taken[i]) { overlap = true; break; }
            }
            if (overlap) continue;

            for (let i = start; i < end; i++) taken[i] = 1;
            spans.push({ start, end, type: rule.type });
        }
    }

    spans.sort((a, b) => a.start - b.start);

    let out = "";
    let cursor = 0;
    for (const s of spans) {
        if (s.start > cursor) out += escapeHtml(code.slice(cursor, s.start));
        out += `<span class="tok-${s.type}">${escapeHtml(code.slice(s.start, s.end))}</span>`;
        cursor = s.end;
    }
    if (cursor < code.length) out += escapeHtml(code.slice(cursor));

    return out;
}

// Expõe globalmente.
window.highlight = highlight;
