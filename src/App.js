import React, { Component } from 'react';
import Header from './Header';
import CounterList from './CounterList';

class App extends Component {
  render() {
    // console.log(this.props.data)
    return (
      <div>
        <Header />
        <h4>{this.props.data.counters}</h4>
        <CounterList data={this.props.data} />
      </div>
    );
  }
}

export default App;