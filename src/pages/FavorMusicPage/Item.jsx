import React, { forwardRef } from 'react';

export const Item = forwardRef(({ id, ...props }, ref) => {
	// console.log(id, props, ref);
	const style = {
		width: 100,
		height: 100,
		margin: '5px',
		borderRadius: '10px',
		backgroundColor: 'white',
		boxShadow:
			'0 0.3px 0.7px rgba(0, 0, 0, 0.126), 0 0.9px 1.7px rgba(0, 0, 0, 0.179),0 1.8px 3.5px rgba(0, 0, 0, 0.224), 0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4)',
	};
	return (
		<div {...props} ref={ref} style={style}>
			{id}item结构
		</div>
	);
});
