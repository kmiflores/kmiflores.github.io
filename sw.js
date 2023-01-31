const STATIC_CACHE = "static";

const APP_SHELL = [
    "./",
    "/index.html",
    "/html/experiencia.html",
    "/html/form-academica.html",
    "/css/style.css",
    "/js/main.js",
    "/manifest.json",
    "/imagenes/cv.png",
    "/imagenes/perfil.jpg",
];

self.addEventListener("install", (e) => {
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
    console.log("fetch! ", e.request);
    e.respondWith(
    caches
        .match(e.request)
        .then((res) => { return res || fetch(e.request);
        })
        .catch(console.log)
    );
});
