import React from 'react';
{/* Scroll que aparece ao usar filtro de busca do portal */}
const Scroll = (props) => {
	return( 
		<div style={{overflowY: 'scroll', height:'70vh'}}>
			{props.children}
		</div>	
	);
}

export default Scroll;