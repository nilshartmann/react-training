import React from "react";

// https://facebook.github.io/react/docs/higher-order-components.html
export function withState(WrappedComponent, config) {
  const { initialDataProp, valueProp, updateModelCallbackProp } = config || {};

  return class extends React.Component {
    static displayName = "StateWrapper";
    constructor(props) {
      super(props);
      this.state = { value: this.props[initialDataProp || "data"] };
      this.updateModel = this.updateModel.bind(this);
    }

    updateModel(newValue) {
      this.setState({ value: newValue });
    }

    render() {
      const config = {
        [updateModelCallbackProp || "updateModel"]: this.updateModel,
        [valueProp || "value"]: this.state.value
      };
      return <WrappedComponent {...config} {...this.props} />;
    }
  };
}
