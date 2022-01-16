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
      selected_article_id: 0,
      header: {title:'WEB', sub:'World Wide Web!'},
      welcome: {title:'Welcome', desc:'Hello, React!!'},
      articles:[
        {id:0, title:'HTML', desc:'HTML is HyperText Markup Language.'},
        {id:1, title:'CSS', desc:'CSS is for desgin.'},
        {id:2, title:'JavaScript', desc:'JavaScript is for interactive.'},
      ]
    }
  }
  render () {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var i = this.state.selected_article_id
      _title = this.state.articles[i].title
      _desc = this.state.articles[i].desc
    }
    return (
      <div className="App">
        <Header 
          title={this.state.header.title}
          sub={this.state.header.sub}
          onChangePage={function () {
            this.setState({mode:'welcome'});
          }.bind(this)}
        />
        <Navbar
          onChangePage={function (id) {
            this.setState({
              mode:'read',
              selected_article_id: Number(id)
            });
          }.bind(this)}
          data={this.state.articles}
        />
        <Article title={_title} desc={_desc}/>
      </div>
    );
  }
}

export default App;
