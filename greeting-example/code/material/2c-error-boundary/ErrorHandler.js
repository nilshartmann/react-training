import React from "react";

function ErrorMessage({ msg, onRetry }) {
  return (
    <div>
      <h1>An error occured!</h1>
      <pre>{msg}</pre>
      <button onClick={onRetry}>Try again</button>
    </div>
  );
}

export default class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);

    // TODO: Belege hier den State vor
  }

  static getDerivedStateFromError(error) {
    return { error: error.toString() };
  }

  componentDidCatch(error, info) {
    console.error("uups... we caught an error", error, info);
  }

  render() {
    // TODO: Implementiere die Render-Methode
    // ------------------------------------------------------------
    //
    // Wenn es einen Fehler gegeben hat, verwende die ErrorMessage-Komponente (s.o.),
    //   um den Fehler anzuzeigen
    //   Die Komponente erwartet zwei Properties:
    //    - msg: die Fehlermeldung (aus dem State !)
    //    - onRetry: eine Callback-Funktion, die aufgerufen wird, wenn der 'Try again'
    //               Button gedrückt wurde. In der übergebenen Callback-Funktion musst
    //               du den State zurücksetzen
    //
    // Wenn es KEINEN Fehler gibt, sollen die Children zurückgegeben werden
    return this.props.children;
  }
}
