import React, { Component } from 'react';

class Counter extends Component {
	render() {
		return (
			<div className="counter">
				<h4>Counter: 0</h4>
					<button>Decrement</button>
					<button>Increment</button>
			</div>
		)
	}
}

export default Counter;