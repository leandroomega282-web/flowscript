// Service Worker do FlowScript — cache-first com fallback de rede.
// Permite uso totalmente offline depois da primeira visita.

const CACHE_NAME = "flowscript-v3";
const ASSETS = [
    "./",
    "./index.html",
    "./styles.css",
    "./app.js",
    "./templates.js",
    "./highlight.js",
    "./favicon.svg",
    "./og-image.png",
    "./manifest.webmanifest"
];

// Instala: pré-cacheia todos os assets do app.
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Ativa: limpa caches antigos de versões anteriores.
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((k) => k !== CACHE_NAME)
                    .map((k) => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

// Fetch: serve do cache primeiro; se não tem, busca na rede e cacheia.
self.addEventListener("fetch", (event) => {
    const req = event.request;

    // Só GET requests vão pro cache.
    if (req.method !== "GET") return;

    // Ignora extensões do navegador, devtools, etc.
    if (!req.url.startsWith("http")) return;

    event.respondWith(
        caches.match(req).then((cached) => {
            if (cached) return cached;

            return fetch(req)
                .then((response) => {
                    // Só cacheia respostas válidas (status 200, mesmo origem).
                    if (response.ok && response.type === "basic") {
                        const cloned = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(req, cloned));
                    }
                    return response;
                })
                .catch(() => {
                    // Se offline e sem cache, retorna index.html como fallback pra navegação.
                    if (req.mode === "navigate") {
                        return caches.match("./index.html");
                    }
                });
        })
    );
});
