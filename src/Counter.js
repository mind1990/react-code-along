import React, { Component } from 'react';
import { Headers } from './Header';


class Counter extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		}
		this.increaseCount = this.increaseCount.bind(this);
		this.decreaseCount = this.decreaseCount.bind(this);
	}

	increaseCount() {
		let count = this.state.count + 1;
		this.setState({
			count
		});
	}

	decreaseCount() {
		if (this.state.count > 0) {
			let count = this.state.count - 1;
			this.setState({
				count
			});
		}
	}

	render() {
		return (
			<div className="counter">
				<h4>Counter: {this.state.count}</h4>
				<button onClick={this.decreaseCount}>Decrement</button>
				<button onClick={this.increaseCount} className={headers}>Increment</button>
			</div>
		);
	}
}

export default Counter;