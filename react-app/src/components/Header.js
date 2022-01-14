import React, { Component } from 'react';


class Header extends Component {
  render () {
    console.log('Header render')
    return (
      <header>
        <h1><a href="/">{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Header;