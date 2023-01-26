import React from "react";
import "./App.css";
import Artikel from "./Artikel";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			liste: [],
			eingabe: { name: "", menge: "" },
		};
	}

	render() {
		return (
			<div>
				<h1>Einkaufsliste</h1>
				<form
					className="d-flex gap-2"
					onSubmit={(e) => {
						e.preventDefault();
						console.log(this.state.eingabe);

						const id = this.state.liste.length + 1;
						const newItem = {
							...this.state.eingabe,
							id: id,
						};

						this.setState({
							liste: [...this.state.liste, newItem],
						});
					}}
				>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={this.state.eingabe.name}
						onChange={(e) => {
							const wert = e.target.value;
							this.setState({
								eingabe: {
									...this.state.eingabe,
									name: wert,
								},
							});
						}}
					/>
					<input
						type="number"
						name="menge"
						placeholder="Menge"
						value={this.state.eingabe.menge}
						onChange={(e) => {
							const wert = e.target.value;
							this.setState({
								eingabe: {
									...this.state.eingabe,
									menge: wert,
								},
							});
						}}
					/>
					<button
						className="bg-success border border-success text-white"
						type="submit"
						title="hinzufügen"
					>
						+
					</button>
				</form>
				<ul>
					{this.state.liste.map((element) => (
						<Artikel
							key={element.id}
							name={element.name}
							menge={element.menge}
							deleteItem={() => {
								const filteredList = this.state.liste.filter(
									(item) => item.id !== element.id
								);

								this.setState({ liste: filteredList });
							}}
						/>
					))}
				</ul>
			</div>
		);
	}
}
