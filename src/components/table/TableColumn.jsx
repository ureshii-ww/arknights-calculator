import React from 'react';
import TableCell from "./TableCell";
import './tableColumn.css';

const TableColumn = (props) => {
	return (
		<div className="table-column">
			<p className="table-column_title">{props.ifEmpty === false ? props.name : ''}</p>
			{Object.keys(props.mats)
				.sort((a, b) => props.mats[a].position - props.mats[b].position)
				.map( mat => <TableCell tier={props.mats[mat].tier}
										edge={false}
										key={`${props.name}_${mat}`}
										count={props.ifEmpty === false ? props.mats[mat].count : ''}
										ifShow={props.ifShow}/>)}
		</div>
	)
}

export default TableColumn;