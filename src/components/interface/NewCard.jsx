import React, {Fragment} from 'react';
import HeroList from "./HeroList";
import './newCard.css';

const NewCard = (props) => {
	const handleClick = () => {
		props.setShow();
	}

	return(
		<Fragment>
			<div className={props.show === true ? "hidden" : props.chosen.length % 2 !== 0 ? "new-card" : "new-card card-wide"}
				 onClick={handleClick}>
				<div className="new-card_plus" >
					<svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" fill="currentColor"
						 className="bi bi-plus" viewBox="0 0 16 16">
						<path
							d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
					</svg>
				</div>
			</div>
			<HeroList show={props.show}
					  setShow={props.setShow}
					  heroes={props.heroes}
					  chosen={props.chosen}
					  makeChoice={props.makeChoice}/>
		</Fragment>
	)
}

export default NewCard;