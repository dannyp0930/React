import React, { Component } from 'react';


class Header extends Component {
  render () {
    return (
      <header>
        <h1><a href="/" onClick={function (event) {
          event.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Header;