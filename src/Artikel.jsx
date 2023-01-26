import React from "react";

export default class Artikel extends React.Component {
	render() {
		return (
			<li>
				{this.props.name} ({this.props.menge})
				<button onClick={this.props.deleteItem}>-</button>
			</li>
		);
	}
}
