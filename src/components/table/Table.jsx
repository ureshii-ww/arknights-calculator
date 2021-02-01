import React, {Fragment} from 'react';
import './table.css';
import TableColumn from "./TableColumn";
import MaterialsColumn from "./MaterialsColumn";
import SumColumn from "./SumColumn";
import materialsList from "../../data/materials";

const Table = ({chosen}) => {
	const [showLowTier, setShowLowTier] = React.useState(false);
	const handleClick = () => setShowLowTier(!showLowTier);
	const empty = [1, 2 , 3 , 4 , 5, 6, 7];

	return(
		<section className="table_container">
			<header className="table_header">
				<p className="table_title">Results</p>
				<div className="table_option">
					<div className={showLowTier === false ? "table-toggle table-toggle_disabled" : "table-toggle table-toggle_enabled"}
						 onClick={handleClick}>
						<div className={showLowTier === false ? "toggle-button_disabled toggle-button" : "toggle-button_enabled toggle-button"}/>
					</div>
					<p>Show low tier materials</p>
				</div>
			</header>
			<div className="table_content">
				<MaterialsColumn mats={materialsList}
								 name="Materials"
								 ifShow={showLowTier}/>
				<div className="table_heroes">
					<Fragment>
						{chosen.map( elem => <TableColumn key={`${elem.name}_column`}
														  mats={elem.heroMats}
														  name={elem.name}
														  ifShow={showLowTier}
														  ifEmpty={false}/>)}
					</Fragment>
					<Fragment>
						{empty.map( elem => <TableColumn key={`empty-column_${elem}`}
														 mats={materialsList}
														 name={elem}
														 ifShow={showLowTier}
														 ifEmpty={true}/>)
							.filter(elem => elem.props.name > chosen.length)}
					</Fragment>
				</div>

				<SumColumn mats={materialsList}
						   name={"Sum"}
						   chosen={chosen}
						   ifShow={showLowTier}/>
			</div>
		</section>

	)
}

export default Table;