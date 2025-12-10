// Service Worker sencillo para PWA de MentalVibes

self.addEventListener("install", event => {
  console.log("Service Worker instalado");
});

self.addEventListener("activate", event => {
  console.log("Service Worker activado");
});

self.addEventListener("fetch", event => {
  // Por ahora solo dejamos pasar todas las peticiones
  event.respondWith(fetch(event.request));
});

