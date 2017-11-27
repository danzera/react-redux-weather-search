import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default props => {
	const avg = _.round(_.sum(props.data) / props.data.length);
	return (
		<div>
			<Sparklines data={props.data} height={120} width={180}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>Average: {avg}{props.units}</div>
		</div>
	);
}