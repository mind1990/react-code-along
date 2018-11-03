import React, { Component } from 'react';
import Header from './Header';
import CounterList from './CounterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: 5,
    }
    this.increaseCounters = this.increaseCounters.bind(this);
    this.decreaseCounters = this.decreaseCounters.bind(this);
  }

  increaseCounters() {
    let counters = this.states.counters + 1;
    this.setState({
      counters
    });
  }

  decreaseCounters() {
    let counters = this.states.counters - 1;
    this.setState({
      counters
    });
  }

  render() {
    // console.log(this.props.data)
    return (
      <div>
        <Header increase={this.increaseCounters} decrease={this.decreaseCounters} />
        <h4>{this.state.counters}</h4>
        <CounterList data={this.state.counters} />
      </div>
    );
  }
}

export default App;
















