import React from 'react';
import HeroCard from "./HeroCard";
import NewCard from "./NewCard";
import "./interface.css";

const Interface = (props) => {
	let chosen = props.chosen

	const [showMenu, setShowMenu] = React.useState(false);
	const handleShow = () => setShowMenu(!showMenu);

	return(
		<section className="cards-interface">
			{chosen.length !== 0 && chosen.map((elem, i) =>
				<HeroCard hero={elem}
						  num={i}
						  deleteItem={props.deleteItem}
						  addMats={props.addMats}
						  subMats={props.subMats}
						  checked={props.chosen[i].isChecked}/>)}

			<div className={props.chosen.length % 2 !== 0 && showMenu === true ? "card-dummy" : "hidden"}>
				<p>Operator</p>
			</div>

			<NewCard heroes={props.heroes}
					 makeChoice={props.makeChoice}
					 chosen={props.chosen}
					 setShow={handleShow}
					 show={showMenu}/>
		</section>
	)
}

export default Interface;