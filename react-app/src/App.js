import React, { Component } from 'react';
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Article from "./components/Article"
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      header: {title:'WEB', sub:'World Wide Web!'},
      welcome: {title:'Welcome', desc:'Hello, React!!'},
      articles:[
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language.'},
        {id:2, title:'CSS', desc:'CSS is for desgin.'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive.'},
      ]
    }
  }
  render () {
    console.log('App render')
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.articles[0].title;
      _desc = this.state.articles[0].desc;
    }
    return (
      <div className="App">
        {/* <Header 
          title={this.state.header.title}
          sub={this.state.header.sub}
        /> */}
        <header>
          <h1><a href="/" onClick={function(event) {
            console.log(event);
            event.preventDefault();
          }}>{this.state.header.title}</a></h1>
          {this.state.header.sub}
        </header>
        <Navbar data={this.state.articles}/>
        <Article title={_title} desc={_desc}/>
      </div>
    );
  }
}

export default App;
