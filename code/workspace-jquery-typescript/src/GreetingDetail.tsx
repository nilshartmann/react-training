import * as React from "react";
import * as PropTypes from "prop-types";

// This component is written in JavaScript but is used from components
// written in TypeScript, thus the following jsdoc is required
// (note that you could describe your props and state here more precise,
// but for our usecase here, "any, any" is just fine)
// see: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18606

/**
 * @augments {React.Component<any, any>}
 */
export default class GreetingDetail extends React.Component {
	static propTypes = {
		greeting: PropTypes.shape({
			name: PropTypes.string.isRequired,
			greeting: PropTypes.string.isRequired
		}),
		onSave: PropTypes.func.isRequired
	};

	render() {
		const { name, greeting } = this.state;
		const saveDisabled = !(name && greeting);

		return (
			<div>
				<input
					ref={input => (this.input = input)}
					onChange={event => this.updateModel(event)}
					name="name"
					value={name}
					placeholder="Name"
				/>
				<input onChange={event => this.updateModel(event)} name="greeting" value={greeting} placeholder="Greeting" />
				<button onClick={() => this.reset()}>Clear</button>
				<button disabled={saveDisabled} onClick={() => this.save()}>
					Save
				</button>
			</div>
		);
	}

	constructor(props) {
		super(props);
		const { name, greeting } = this.props.greeting || { name: "", greeting: "" };
		this.state = {
			name,
			greeting
		};
	}

	reset() {
		this.setState({ name: "", greeting: "" });
		if (this.input) {
			this.input.focus();
		}
	}

	save() {
		const { onSave } = this.props;
		const { name, greeting } = this.state;
		onSave({
			name,
			greeting
		});
	}

	updateModel(event) {
		// Hier ist ein Beispiel, warum currentTarget "richtiger" als target ist
		// (und wir in TypeScript auch currentTarget verwenden muessen):
		// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682

		// in TypeScript: this.setState({ [event.currentTarget.name as any]: event.currentTarget.value });
		this.setState({ [event.target.name]: event.target.value });
	}
}
