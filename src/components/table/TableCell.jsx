import React from 'react';
import './tableCell.css';

const TableCell = (props) => {
	return (
		<div className={props.ifShow === false && props.tier > 3 ? 'hidden' : props.edge === true ? `table_cell edge-cell_tier${props.tier}` : `table_cell cell_tier${props.tier}`}>
			<p>{props.count > 0 ? `${props.count}` : ''}</p>
		</div>
	)
}

export default TableCell;