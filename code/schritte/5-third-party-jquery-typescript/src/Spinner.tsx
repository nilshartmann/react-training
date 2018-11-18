import * as React from "react";

interface SpinnerProps {
	label: string;
	value: string | number;

	onValueChange: (newValue: string | number) => void;
}

export default class OverflowSpinner extends React.Component<SpinnerProps> {
	spinnerElement: HTMLInputElement | null = null;

	componentDidMount() {
		if (!this.spinnerElement) {
			// should not happen but otherwise in the following code
			// TypeScript complains that spinnerElement might be null
			return;
		}
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

	shouldComponentUpdate() {
		// do not re-render this component
		// (avoid "overriding" of the component rendered by jquery)
		return false;
	}

	componentWillReceiveProps(newProps: SpinnerProps) {
		// make sure we update the spinner element correctly
		this.spinnerElement && $(this.spinnerElement).val(newProps.value);
	}

	componentWillUnmount() {
		// Clean up as soon as the component will be removed from the DOM
		this.spinnerElement && $(this.spinnerElement).spinner("destroy");
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
