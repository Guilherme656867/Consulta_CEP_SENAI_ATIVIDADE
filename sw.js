const CACHE_NAME = "clima-v1";

const ARQUIVOS = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];

self.addEventListener("install", function(evento) {

    evento.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(ARQUIVOS);
            })
    );

});

self.addEventListener("fetch", function(evento) {

    evento.respondWith(
        caches.match(evento.request)
            .then(function(resposta) {

                if (resposta) {
                    return resposta;
                }

                return fetch(evento.request);
            })
    );

});