import React from "react";

export default class OverflowSpinner extends React.Component {
  componentDidMount() {
    console.log("Component has been mounted. Creating jquery spinner...");
    // the spinner element is now in the real DOM
    // so that we can pass the element to jquery
    const jquerySpinner = $(this.spinnerElement);

    jquerySpinner
      .spinner({
        stop: () => {
          const newValue = jquerySpinner.spinner("value");
          this.props.onValueChange(newValue);
        }
      })
      .val(this.props.value);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // do not re-render this component
    // (avoid "overriding" of the component rendered by jquery)
    return false;
  }

  componentWillReceiveProps(newProps) {
    console.log("Receiving new props", newProps);
    // make sure we update the spinner element correctly
    $(this.spinnerElement).val(newProps.value);
  }

  componentWillUnmount() {
    console.log("Destroying jQuery Spinner...");
    $(this.spinnerElement).spinner("destroy");
  }

  render() {
    const { label } = this.props;
    return (
      <div className="Spinner">
        <span>
          <input placeholder={label} name="spinner" ref={el => (this.spinnerElement = el)} />
        </span>
      </div>
    );
  }
}
