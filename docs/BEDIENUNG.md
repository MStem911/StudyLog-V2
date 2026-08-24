# StudyLog-V2 — Bedienungsanleitung

> Anleitung für Studienleitende, die die App zur Durchführung nutzen. Keine technischen
> Details — dafür siehe [ARCHITECTURE.md](./ARCHITECTURE.md). Datenschutz-Hintergrund:
> siehe [DATENFLUSS.md](./DATENFLUSS.md).

## Installation & Start

1. Die von der Studienleitung genannte App-URL im Browser öffnen (auf dem iPhone: **Safari**
   verwenden, nicht Chrome — sonst funktioniert "Zum Home-Bildschirm" nicht zuverlässig).
2. **Auf dem Home-Bildschirm installieren** (empfohlen, damit die App offline funktioniert
   und wie eine normale App aussieht):
   - **iPhone/iPad:** Teilen-Symbol antippen → "Zum Home-Bildschirm" → Hinzufügen.
   - **Android:** Menü (⋮) öffnen → "Zum Startbildschirm hinzufügen" bzw. "App installieren".
3. App-Symbol auf dem Home-Bildschirm antippen — die App startet auch ohne Internetverbindung.

## Kernfunktionen im Überblick

Die App hat fünf Bereiche, erreichbar über die Navigation (unten auf dem Smartphone, links
auf Tablet/Desktop):

| Bereich | Zweck |
|---|---|
| 👤 **Teilnehmende** | Personen mit Pseudonym + Sensoriknummer anlegen und verwalten |
| ⏺ **Sitzung** | Timer starten/stoppen, Szenario wählen, Abweichungen/Notizen erfassen |
| ☰ **Protokoll** | Übersicht aller gespeicherten Sitzungen, filtern, bearbeiten, löschen |
| 📝 **Bewertung** | Trainerbewertungsbogen zu einer Sitzung ausfüllen |
| ↓ **Export** | Daten als CSV/JSON exportieren, Statistiken einsehen, Daten löschen |

## Typischer Ablauf einer Nutzungssitzung

### 1. Teilnehmende Person anlegen (einmalig pro Person)

1. Im Bereich **Teilnehmende** auf **+** tippen.
2. **Pseudonym** eingeben (z. B. `P-042`) — **kein Klarname**.
3. **Sensoriknummer** (1–12) der zugewiesenen Sensor-Einheit eingeben.
4. Optional: Notiz eintragen (z. B. "Linkshänder").
5. Optional: Uhrzeit "Sensorik angelegt" erfassen — per Tastatur oder Knopf "🕐 Jetzt" für
   die aktuelle Uhrzeit.
6. Mit **✓ Anlegen** speichern.

### 2. Sitzung durchführen

1. Im Bereich **Sitzung**: gewünschte Person im Dropdown auswählen.
2. Passendes **Szenario** antippen (z. B. VR Welt, Verkehrsunfall, Krankenhaus).
3. **▶ Start** drücken, sobald das Szenario beginnt — der Timer läuft.
4. Falls die Sitzung unterbrochen werden muss (z. B. technische Störung, Rückfrage):
   **⏸ Pause** drücken — der Timer friert ein. Mit **▶ Fortsetzen** läuft er weiter, ab
   dem eingefrorenen Stand. Jede Pause wird mit genauer Start-/Endzeit und Dauer
   protokolliert; eine Sitzung kann beliebig oft pausiert werden.
5. Nach Abschluss des Szenarios **⏹ Stopp** drücken (auch aus einer laufenden Pause heraus
   möglich).
6. Falls während der Sitzung etwas vom geplanten Ablauf abgewichen ist: passende
   **Abweichungs-Tags** antippen (z. B. "Techn. Fehler") und/oder eine Freitextnotiz
   eintragen.
7. Mit **💾 Sitzung speichern** abschließen.
8. Danach fragt die App, ob direkt der **Trainerbewertungsbogen** für diese Sitzung
   ausgefüllt werden soll (siehe Schritt 3) — kann auch später über den Bereich
   **Bewertung** nachgeholt werden.

### 3. Trainerbewertungsbogen ausfüllen (optional, pro Sitzung)

1. Im Bereich **Bewertung** die gewünschte Sitzung im Dropdown auswählen (bereits bewertete
   Sitzungen sind mit ✓ markiert).
2. Für jede der 19 Bewertungsfragen eine Note von **1 (sehr gut)** bis **6 (ungenügend)**
   vergeben.
3. Optional Anmerkungen eintragen.
4. Mit **💾 Bewertung speichern** abschließen. Erneutes Speichern für dieselbe Sitzung
   überschreibt die vorherige Bewertung.

### 4. Sitzung im Protokoll prüfen oder korrigieren

1. Im Bereich **Protokoll** die Liste aller Sitzungen einsehen, bei Bedarf nach Szenario
   oder Person filtern.
2. Eintrag antippen, um Details zu sehen.
3. Über **✏ Bearbeiten** lassen sich Start-/Endzeit, Szenario, Person, Abweichungen und
   Notizen nachträglich korrigieren (das Datum selbst ist nicht änderbar).
4. Über **Sitzung löschen** kann ein fehlerhafter Eintrag entfernt werden.

### 5. Am Ende der Erhebung: Export

1. Im Bereich **Export** optional ein **Geräte-/Betreuungslabel** eintragen (hilfreich, wenn
   mehrere Geräte parallel genutzt wurden).
2. Optional nach Szenario filtern.
3. **⬇ CSV exportieren** oder **⬇ JSON exportieren** antippen — die Datei wird auf dem Gerät
   gespeichert (z. B. im Download-Ordner).
4. Die exportierte Datei anschließend gemäß den Vorgaben der Studienleitung sicher
   weitergeben bzw. ablegen (dies erfolgt außerhalb der App).
5. **Erst nach erfolgreichem Export und Sicherung der Daten:** Falls gewünscht, über
   **⚠ Alle Daten löschen** sämtliche Teilnehmenden-, Sitzungs- und Bewertungsdaten auf
   diesem Gerät unwiderruflich entfernen. Die App warnt vor dieser Aktion — sie kann nicht
   rückgängig gemacht werden.

## Mehrere Geräte

Jedes Gerät führt seine eigenen, unabhängigen Daten. Es findet **keine automatische
Synchronisation** zwischen Geräten statt. Wurden mehrere Geräte parallel genutzt, muss auf
jedem Gerät einzeln exportiert werden; das Zusammenführen der Export-Dateien erfolgt
anschließend außerhalb der App (z. B. in Excel).
