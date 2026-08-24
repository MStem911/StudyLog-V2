# StudyLog-V2 — Projektkontext für Claude

## Was ist das
Progressive Web App für Maike (wiss. Mitarbeiterin, Universität der Bundeswehr München) zur
Durchführung von Studien-Sessions mit Teilnehmenden in VR-Szenarien (VR Welt, Verkehrsunfall,
Krankenhaus). Mehrere Studienleitungen nutzen die App gleichzeitig auf eigenen Smartphones,
vollständig offline. Deployment: GitHub Pages (`mstem911.github.io/StudyLog-V2`).

## Tech-Stack
Vanilla HTML/CSS/JS, kein Build-Schritt, keine Frameworks/Dependencies. Datenhaltung
ausschließlich lokal via `localStorage`. Offline-Fähigkeit über Service Worker (`sw.js`).

## Datenschutz (hart, nicht verhandelbar)
- Keine Daten verlassen das Gerät — kein externer Server, kein Tracking, keine Analytics.
- Pseudonymisierung nach Art. 4 Nr. 5 DSGVO.
- Gendergerechte Sprache im UI: "Teilnehmende", nicht "Probanden" (Variablennamen im Code
  dürfen weiterhin `Proband*` heißen — nur sichtbare UI-Texte müssen genderneutral sein).

## Nicht verhandelbare Arbeitsregeln
1. **Strict non-regression**: Änderungen sind rein additiv oder visuell. Bestehende
   Funktionalität darf nie brechen oder sich unangekündigt ändern.
2. **Minimale Diffs**: Kein Refactoring "nebenbei". Wenn ein Bug auftritt: auf den letzten
   bestätigt stabilen Stand zurück, dann nur die minimal nötige Änderung.
3. **Root Cause statt Symptom-Fix**: Ursache systematisch diagnostizieren, keine
   Vermutungs-Fixes.
4. Vor dem Debuggen von Deployment-Fehlern: https://githubstatus.com prüfen (in der
   Vergangenheit gab es dadurch False-Positive-Rabbit-Holes).

## Versionierung (WICHTIG — bei jeder inhaltlichen Änderung)
Single Source of Truth: `const APP_VERSION` ganz oben in `app.js`.

Bei **jedem Commit, der Funktionalität/Inhalt ändert** (nicht bei reinen Doku-Änderungen):
1. `APP_VERSION` in `app.js` hochzählen — Patch (`2.2.1` → `2.2.2`) für Bugfixes/kleine
   Änderungen, Minor (`2.2.x` → `2.3.0`) für neue Features, Major nur nach Absprache mit Maike.
2. `CACHE`-Konstante in `sw.js` synchron auf denselben Wert setzen (z.B.
   `studylog-v2.2.2`) — erzwingt Invalidierung des alten Service-Worker-Caches.
3. Die statischen `<span class="app-version">` Platzhalter in `index.html` (aktuell 2x:
   Sidebar-Footer + mobile Topbar) auf denselben Wert setzen — sie werden zusätzlich beim
   Laden per JS aus `APP_VERSION` überschrieben (Zeile mit
   `document.querySelectorAll('.app-version')...` im INIT-Block von `app.js`), das ist nur
   der No-Flash-Fallback für den ersten Paint.

## Bekannte, bereits gelöste Bugs (nicht wiederholen)
- iOS Safari PWA: `<div>` als Klick-Ziel funktioniert nicht zuverlässig → immer `<button>`.
- iOS Zoom bei Input-Fokus: `font-size: 16px` auf Inputs + Viewport-Meta-Fix.
- Samsung Android Touch-Bug: `maximum-scale=1.0, user-scalable=no` aus Viewport entfernen.
- Service-Worker-Deadlock: `sw.js` darf sich nicht selbst in `ASSETS` cachen.
- Confirm-Dialog z-index: `#confirm-overlay` braucht `z-index: 300`.
- `.hidden`-Klasse muss `display: none !important` sein — `opacity:0; pointer-events:none`
  lässt unsichtbare Elemente Klicks blockieren.
- Alles JS in `DOMContentLoaded` wrappen (sonst iOS-PWA-Button-Fails).
- Delete-Bug-Muster: IDs vor dem Nullen in `const` zwischenspeichern.

## Git-Workflow in dieser Umgebung
Der verbundene Ordner läuft über eine Sandbox-Bridge, die zwar Dateien schreiben, aber keine
Dateien löschen/umbenennen kann — `git commit`/`git push` funktionieren darüber **nicht
zuverlässig** (Lock-Dateien bleiben hängen). Deshalb: Claude bearbeitet Dateien direkt
(Edit/Write), Commit + Push führt Maike selbst in SourceTree oder Git Bash aus. Claude schlägt
dazu jeweils eine Commit-Message vor.
