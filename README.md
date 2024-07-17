# CodeChallenge - REST-API Geschlecht- Score Berechnung

Author: Hoai Linh Pham
Coding Challenge für Diverlyze als Software Developer Praktikum

## Beschreibung
Eine REST-API mit Node und Express. Es nimmt die Antwort aus einem Umfragesystem und einen durchschnittlichen Score für jedes Geschlecht berechnen

## Funktionen
- Berechnet den Durchschnitt aller Scores für jedes Geschlecht.
- Setzt den Score auf Null, wenn weniger als 3 Antworten für ein Geschlecht vorliegen.
- Rundet die Scores auf eine Nachkommastelle.

## Installation
1. Klonen Sie das Repository
```bash
git clone <Link-von-diese-Repository>
cd CodeChallenge
```
2. Installieren Sie die Package
```bash
npm install
```

## Starten des Server
```bash
node src/server.js
```
Der Server läuft dann unter http://localhost:4000.

## API Endpunkte
GET/scores

URL: `http://localhost:4000/scores/`

Methode: GET

## Test
```bash
npm run test
```

## Entwicklungsumgebung
Node.js
Express
Jest für Tests
