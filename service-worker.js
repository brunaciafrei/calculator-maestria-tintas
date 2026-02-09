const CACHE_NAME = "maestria-v5";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./vendor/jspdf.umd.min.js",
  "./img/LOGO-MAESTRIA_cor-02.png",
  "./img/favicon.ico",
  "./img/favicon.png",
  "./manifest.webmanifest",
  "./img/icons/icon-192.png",
  "./img/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const accept = request.headers.get("accept") || "";
  const isHtml =
    accept.includes("text/html") ||
    request.mode === "navigate" ||
    request.destination === "document" ||
    request.url.endsWith("/") ||
    request.url.endsWith("/index.html") ||
    request.url.includes("index.html");

  if (isHtml) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
        return response;
      });
    })
  );
});
