import React from 'react';
import './materialsColumn.css';
import './tableColumn.css';
import './tableCell.css';

const MaterialsColumn = (props) => {
	console.log('BIBA',props.mats)
	return (
		<div className="table-column">
			<p className="table-column_title">Mats</p>
			{Object.keys(props.mats)
				.sort((a, b) => props.mats[a].position - props.mats[b].position)
				.map( mat =>
					<div className={props.ifShow === false && props.mats[mat].tier > 3 ? 'hidden' : `table_mat-cell edge-cell_tier${props.mats[mat].tier}`}>
						<img className={`table_img`}
							 src={props.mats[mat].img}
							 key={`mat-name_${mat}`} />
					</div>)}
		</div>
	)
}

export default MaterialsColumn;