import React, { Component } from 'react';
import Counter from './Counter';

class CounterList extends Component {
	render() {
	 	let counters = [];
		for (let i = 0; i < this.props.data.counters; i++) {
			counters.push(<Counter key={i} />)
		}
		return <div className='counter-row'>{counters}</div>
	}
}

export default CounterList;