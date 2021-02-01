import React from 'react';
import "./heroList.css";

const HeroList = (props) => {
	const handleChoice = (hero) => {
		for(let i = 0; i < props.chosen.length; i++) {
			if(hero.name === props.chosen[i].name)
				return null;
		}
		props.makeChoice(hero);
		props.setShow();
	}
	let sorted = Object.keys(props.heroes).sort((a, b) =>
		props.heroes[b].star - props.heroes[a].star);

	return(
		<div className={props.show === false ? "hidden" : "hero-list"}>
			<p className="hero-list_header">Select an operator:</p>
			<div className="hero-list_close" onClick={() => props.setShow()}>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x"
					 viewBox="0 0 16 16">
					<path
						d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
				</svg>
			</div>
			<div className="hero-list_content">
				<ul className="hero-list_list">
					{sorted.map( keyName =>
						<li key={`hero_${keyName}`}
							 onClick={() => handleChoice(props.heroes[keyName])}
							 className={`hero-list_item hero_${props.heroes[keyName].star}star`}>
							<img src={props.heroes[keyName].img} />
							<div className={props.heroes[keyName].name === "Flamebringer" ? "hero-list_name flamebringer_font" : "hero-list_name"}>
								<p>{props.heroes[keyName].name}</p>
							</div>
						</li>
					)}
				</ul>
			</div>
		</div>
	)
}

export default HeroList;