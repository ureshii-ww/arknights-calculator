import React from 'react';
import TableCell from "./TableCell";
import './tableColumn.css';

const SumColumn = (props) => {
	return (
		<div className="table-column">
			<p className="table-column_title">{props.name}</p>
			{Object.keys(props.mats)
				.sort((a, b) => props.mats[a].position - props.mats[b].position)
				.map(elem => {
					let sum = 0;
					props.chosen.forEach(hero => sum += hero.heroMats[elem].count)
					return <TableCell key={`sum_${elem}`}
									  count={sum}
									  edge={true}
									  tier={props.mats[elem].tier}
									  ifShow={props.ifShow}/>})}
		</div>
	)
}

export default SumColumn;