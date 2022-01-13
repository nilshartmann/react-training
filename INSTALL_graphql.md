# Vorbereitungen für die React Online Schulung

## Voraussetzungen

**Für dein Laptop/PC**

Auf deinem Laptop/PC sollte installiert sein:

- Git (zum installieren des Workspaces)
- [NodeJS](https://nodejs.org/en/download/) LTS version, aktuell 16.x (, 14.x und 12.16.x sollten aber auch funktionieren) und die darin enthaltene npm Version
- Browser (am besten Firefox oder Chrome)
- Eine IDE oder ein Texteditor. Wenn Du bereits einen "Lieblingseditor" verwendest, benutze diesen während des Trainings, damit Du nicht auch noch ein neues Tool lernen musst. Ansonsten funktionieren folgende Tools zum Beispiel:
  - [Visual Studio Code](https://code.visualstudio.com/)
  - [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) (Ultimate Edition, Evaluationsversion reicht aber)
  - [Webstorm](https://www.jetbrains.com/webstorm/download/) (Evaluationsversion reicht)
- Für Schulungen, die wir über **Zoom** machen: bitte den Zoom **Client** installieren (und nicht die Web-Version von Zoom verwenden). Du benötigst aber _keinen_ Zoom-Account.

**Optional: Browser Erweiterungen für React**

- Für das Arbeiten mit React empfehle ich, die [React Developer Tools](https://github.com/facebook/react/tree/master/packages/react-devtools) zu installieren. Es gibt sie für [Chrome](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjE14vhq-rmAhVGblAKHbgOC1sQFjAAegQICRAK&url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Freact-developer-tools%2Ffmkadmapgofadopljbjfkapdkoienihi&usg=AOvVaw3YJDg7kXgeeChgKN88s0Sx) und [Firefox](https://addons.mozilla.org/de/firefox/addon/react-devtools/)
- Wenn ihr mit dem Apollo GraphQL Client arbeitet, lohnt es sich, die [Apollo Client Dev Tools](https://www.apollographql.com/docs/react/development-testing/developer-tooling/#apollo-client-devtools)-Erweiterung im für [Chrome](https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm) bzw. [Firefox](https://addons.mozilla.org/de/firefox/addon/apollo-developer-tools/) zu installieren

**Während des Trainings**

- Da wir vor und während des Trainings ggf. noch Aktualisierungen installieren müssen, bitte sicherstellen, dass auch während des Trainings auf deinem Computer der Internet-Zugang (logisch, online-Schulung 🙃) funktioniert - aber auch **für git und npm** (Proxies beachten!)
  - Informationen zum Einrichten eines Proxies für npm findest Du bei Bedarf [zum Beispiel hier](http://wil.boayue.com/blog/2013/06/14/using-npm-behind-a-proxy/).
- **Ich freue mich, wenn Du während des Trainings deine Kamera an hast**, damit wir uns sehen können 🎥. Mikrofon hingegen bitte nur anmachen, wenn Du etwas sagen oder fragen möchtest (was Du natürlich jederzeit darfst!)
- W-LAN ist bequem, aber gerade bei (langen) Streamings ist ein Kabel-gebundenes Netzwerk stabiler als W-LAN, also im Zweifel lieber das Kabel einstecken (und W-LAN deaktivieren) 😊

# Installation und Vorbereitung des Workspaces für die Schulung

## Schritt 1: Repository klonen und Pakete installieren

1. Das Repository klonen:

```
git clone https://github.com/nilshartmann/react-training
```

2. Die benötigten npm-Pakete installieren:

```
cd blog-example/backend-graphql
npm install

cd blog-example/backend-rest
npm install

cd blog-example/workspace
npm install

cd blog-example/workspace-graphql
npm install
```

## Schritt 2: Testen, ob REST-Backend funktioniert

1. Im Verzeichnis **blog-example/backend-rest** des Repositories das Backend starten:

```
cd blog-example/backend-rest
npm start
```

Achtung! Das Backend läuft auf **Port 7000**, d.h. dieser Port muss verfügbar sein.

2. Backend testen

- Im Browser (oder per curl, wget oder httpie) aufrufen: http://localhost:7000/posts
- Dort sollte JSON Code zurückkommen

## Schritt 3: Testen, ob das GraphQL Backend funktioniert

1. Im Verzeichnis **blog-example/backend-graphql** des Repositories das GraphQL Backend starten:

```
cd blog-example/backend-graphql
npm start
```

Achtung! Das GraphQL-Backend läuft auf **Port 4000**, d.h. dieser Port muss verfügbar sein.

2. Backend testen

- Im Browser aufrufen: http://localhost:4000
- Dort sollte die "GraphQL Playground" Web-App aufgehen

![The GraphQL Playground](./screenshot-playground.png)

## Schritt 4: Testen, ob das Frontend funktioniert

1. Frontend (Beispiel-Anwendung) starten

Dazu in das Verzeichnis `blog-example/workspace` wechseln und `npm start` ausführen:

```
cd blog-example/workspace

npm start
```

Achtung! Das Frontend läuft auf **Port 3000**, d.h. dieser Port muss verfügbar sein.

2. Wenn das Frontend gestartet ist, zum testen einmal die Anwendung im Browser aufrufen: [http://localhost:3000](http://localhost:3000). Dort sollte "Hello, World" erscheinen, dann ist der Workspace einsatzbereit.

![Running frontend](./running-workspace.png)

**Das ist alles!**

Bei Fragen oder Problemen melde dich gerne bei mir.
