import React from 'react';
import Interface from "./interface/Interface";
import Table from "./table/Table";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import './layout/grid.css'
import {
	Switch,
	Redirect,
	Route
} from 'react-router-dom';
import materialsList from "../data/materials";
import heroesList from '../data/heroList.json';


export default class CalculatorApp extends React.Component {
	constructor() {
		super();

		this.state = {
			heroes: heroesList,
			chosen: []
		}
	}

	makeChoice = (hero) => {
		let temp = JSON.parse(JSON.stringify(materialsList));

		let added = {
			heroMats: temp,
			isChecked: {
			elite1: false,
			elite2: false,
			lvl3: false,
			lvl4:false,
			lvl5: false,
			lvl6: false,
			lvl7: false,
			skill1_1: false,
			skill2_1: false,
			skill3_1: false,
			skill1_2: false,
			skill2_2: false,
			skill3_2: false,
			skill1_3: false,
			skill2_3: false,
			skill3_3: false}
		};

		let tempObj = {...hero, ...added};
		let tempArr = this.state.chosen.concat(tempObj);

		this.setState({
			chosen: tempArr
		});
	}

	deleteItem = (item) => {
		let tempArr = this.state.chosen;
		tempArr.splice(item, 1)

		this.setState({
			chosen: tempArr
		})
	}

	addMaterials = (obj, num, key) => {
		let tempChosen = this.state.chosen;
		for(let keys in obj) {
			tempChosen[num].heroMats[keys].count += obj[keys];
		}
		tempChosen[num].isChecked[key] = true;

		this.setState({
			chosen: tempChosen
		});
	}

	subtractMaterials = (obj, num, key) => {
		let tempChosen = this.state.chosen;
		for(let key in obj) {
			tempChosen[num].heroMats[key].count -= obj[key];
		}
		tempChosen[num].isChecked[key] = false;

		this.setState({
			chosen: tempChosen
		});
	}


	render() {
		console.log(this.state.chosen);
		console.log(materialsList);
		return (
			<div className="app-container">
				<Header />
				<main className="content-container">
					<Switch>
						<Route path="/arknights-calculator/">
							<div className="content-block">
								<Interface heroes={this.state.heroes}
										   chosen={this.state.chosen}
										   makeChoice={this.makeChoice}
										   deleteItem={this.deleteItem}
										   addMats={this.addMaterials}
										   subMats={this.subtractMaterials}/>
								<Table chosen={this.state.chosen}
									   sum={this.state.sum}/>
							</div>
						</Route>
						<Redirect exact from="/" to="/calculator" />
					</Switch>
				</main>
				<Footer />
			</div>
		)
	}
}