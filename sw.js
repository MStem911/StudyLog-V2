// StudyLog v1.4 — Service Worker deregistriert sich selbst
// (Vorherige Versionen hatten einen SW-Self-Caching-Bug)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', async () => {
  // Alle alten Caches löschen
  const keys = await caches.keys();
  await Promise.all(keys.map(k => caches.delete(k)));
  await self.clients.claim();
  // Alle Clients neu laden damit sie den frischen Code bekommen
  const clients = await self.clients.matchAll({ type: 'window' });
  clients.forEach(client => client.navigate(client.url));
});
// Kein fetch-Handler: alle Requests gehen direkt ans Netzwerk
