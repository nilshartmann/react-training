# Einrichten des Workspaces

## Voraussetzungen

Auf den Teilnehmer Laptops/PCs sollte installiert sein:

- git (zum installieren des Workspaces)
- nodejs (mind. v8.12.0) und npm 6.4
- Browser (am besten Chrome oder Firefox)
- Eine IDE oder ein Texteditor, zum Beispiel:
  - [Webstorm](https://www.jetbrains.com/webstorm/download/) (Evaluationsversion reicht)
  - [Visual Studio Code](https://code.visualstudio.com/)
- Die Laptops sollten _auch während des Trainings_ Internet-Zugang haben (s.u.)

## Schritt 1: Repository klonen und Pakete installieren

1. Das Repository klonen:

```
git clone https://github.com/nilshartmann/react-training
```

2. Im Root-Verzeichnis des geklonten Repositories die npm Pakete installieren:

```
npm install
```

## Schritt 2: Testen, ob Backend funktioniert

1. Im **Root-Verzeichnis** des Repositories das Backend starten:

```
npm run start-backend
```

Achtung! Das Backend läuft auf **Port 7000**, dh dieser Port muss verfügbar sein.

2. Backend testen

- Im Browser (oder per curl, wget oder httpie) aufrufen: http://localhost:7000/greetings
- Dort sollte JSON Code zurückkommen

## Schritt 3: Testen, on Frontend/Entwicklungsumgebung funktioniert

1. Frontend (Beispiel-Anwendung) starten

Dazu in das Verzeichnis `code/workspace` wechseln und `npm start` ausführen:

```
cd code/workspace

npm start
```

Achtung! Das Frontend läuft auf **Port 8080**, dh dieser Port muss verfügbar sein.

![Starten des Frontends](./images/install_start_frontend.png)

2. Wenn das Frontend gestartet ist, zum testen einmal die Anwendung im Browser aufrufen: [http://localhost:8080](http://localhost:8080). Dort sollte "Hello, World" erscheinen, dann ist der Workspace einsatzbereit.

![Funktionierendes Frontends](./images/install_frontend.png)

## Internet-Zugang

Da wir vor und während des Trainings ggf. noch Aktualisierungen installieren müssen, bitte sicherstellen, dass auch während des Trainings **auf den Computern der Teilnehmer der Internet-Zugang (insb git und npm) besteht und funktioniert!**

Informationen zum Einrichten eines Proxies für npm könnt ihr u.a. [hier finden](http://wil.boayue.com/blog/2013/06/14/using-npm-behind-a-proxy/).

Bei Fragen oder Problemen meldet Euch bitte bei mir.
