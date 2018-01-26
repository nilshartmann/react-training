import React from "react";

export default class OverflowSpinner extends React.Component {
  componentDidMount() {
    const jquerySpinner = $(this.spinnerElement);

    jquerySpinner
      .spinner({
        stop: () => {
          const newValue = jquerySpinner.spinner("value");
          // TODO: Die stop-Methode wird aufgerufen, nach dem Wert im
          //       Spinner verändert wurde.
          //       Ruf mit dem neuen Wert (newValue) die
          //       als Property übergebene 'onValueChange' Methode
          //       auf
        }
      })
      .val(this.props.value);
  }

  // TODO Lifecycle-Methode 1:
  // Füge die 'shouldComponentUpdate' Methode hinzu,
  // um das erneute Rendern der Komponente zu unterbinden

  // TODO Lifecycle-Methode 2:
  // Füge die componentWillReceiveProps-Methode hinzu
  // diese soll den 'value' der neuen Properties
  // an das spinnerElement mit der Funktion 'val'
  // übergeben
  // $...val(...);
  // Optional: was passiert, wenn die Funktion *nicht*
  // implementiert ist?

  componentWillUnmount() {
    $(this.spinnerElement).spinner("destroy");
  }

  render() {
    const { label } = this.props;
    return (
      <div className="Spinner">
        <span>
          {/* TODO:
          Füge dem input-Feld die 'ref'-Callback Funktion als Property hinzu
          Die Funktion soll das übergebene DOM-Element als 'this.spinnerElement' setzen
          */}
          <input placeholder={label} name="spinner" />
        </span>
      </div>
    );
  }
}
