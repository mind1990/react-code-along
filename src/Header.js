import React, { Component } from "react";
import { headers } from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={headers}>
        <h1 className="App-title">React Counters</h1>
        <button onClick={this.props.decrease}>-</button>
        <button onClick={this.props.increase}>+</button>
      </header>
    );
  }
}

export default Header;