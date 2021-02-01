import React, {useEffect, useRef} from 'react';
import './heroCard.css';

const HeroCard = (props) => {
	const scrollRef = useRef(null);
	const executeScroll = () => scrollRef.current.scrollIntoView();

	useEffect(executeScroll, [])

	const handleAdd = (obj, key) => {
		if(props.hero.isChecked[key] === true)
			return props.subMats(obj, props.num, key);

		props.addMats(obj, props.num, key);
	}

	return(
		<div className="hero-card" ref={scrollRef}>
			<div className="hero-card_name">
				<p>{props.hero.name}</p>
			</div>
			<div className="hero-card_cross" onClick={() => props.deleteItem(props.num)}>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x"
					 viewBox="0 0 16 16">
					<path
						d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
				</svg>
			</div>
			<div className="hero-card_content">
				<div className="hero-card_controls">
					<div className="hero-card_elite">
						<img src="images/heroCard/elite1.png"
							 className={props.checked.elite1 ? 'hero-button hero-button_elite checked' : 'hero-button hero-button_elite'}
							 onClick={() => handleAdd(props.hero.elite.tier1, 'elite1')} />
						<img src="images/heroCard/elite2.png"
							 className={props.checked.elite2 ? 'hero-button hero-button_elite checked' : 'hero-button hero-button_elite'}
							 onClick={() => handleAdd(props.hero.elite.tier2, 'elite2')} />
					</div>
					<div className="hero-card_skills">
						<div className="hero-card_common-skills">
							<img src="images/heroCard/3.png"
								 className={props.checked.lvl3 ? 'hero-button hero-button_skills checked' : 'hero-button hero-button_skills'}
								 onClick={() => handleAdd(props.hero.skills.general.level3, 'lvl3')} />
							<img src="images/heroCard/4.png"
								 className={props.checked.lvl4 ? 'hero-button hero-button_skills checked' : 'hero-button hero-button_skills'}
								 onClick={() => handleAdd(props.hero.skills.general.level4, 'lvl4')} />
							<img src="images/heroCard/5.png"
								 className={props.checked.lvl5 ? 'hero-button hero-button_skills checked' : 'hero-button hero-button_skills'}
								 onClick={() => handleAdd(props.hero.skills.general.level5, 'lvl5')} />
							<img src="images/heroCard/6.png"
								 className={props.checked.lvl6 ? 'hero-button hero-button_skills checked' : 'hero-button hero-button_skills'}
								 onClick={() => handleAdd(props.hero.skills.general.level6, 'lvl6')} />
							<img src="images/heroCard/7.png"
								 className={props.checked.lvl7 ? 'hero-button hero-button_skills checked' : 'hero-button hero-button_skills'}
								 onClick={() => handleAdd(props.hero.skills.general.level7, 'lvl7')} />
						</div>
					</div>

					<div className="hero-card_specific-skills">
						{Object.keys(props.hero.skills).map( (keyName, i) => keyName === 'general' ? null :
							<div className="hero-card_m">
								<p>{`Skill ${i}`}</p>
								<div className="hero-card_m-icons">
									<img src="images/heroCard/m1.png"
										 className={props.checked[`${keyName}_1`] ? 'hero-button hero-button_m-icons checked' : 'hero-button hero-button_m-icons'}
										 onClick={() => handleAdd(props.hero.skills[keyName].level7_1, `${keyName}_1`)}/>
									<img src="images/heroCard/m2.png"
										 className={props.checked[`${keyName}_2`] ? 'hero-button hero-button_m-icons checked' : 'hero-button hero-button_m-icons'}
										 onClick={() => handleAdd(props.hero.skills[keyName].level7_2, `${keyName}_2`)}/>
									<img src="images/heroCard/m3.png"
										 className={props.checked[`${keyName}_3`] ? 'hero-button hero-button_m-icons checked' : 'hero-button hero-button_m-icons'}
										 onClick={() => handleAdd(props.hero.skills[keyName].level7_3, `${keyName}_3`)}/>
								</div>
							</div>)}
					</div>
					<div className="hero-card_portrait">
						<img src={props.hero.img} height="150px" width="150px" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroCard;