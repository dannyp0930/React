import React, { Component } from 'react';
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ReadArticle from "./components/ReadArticle"
import CreateArticle from "./components/CreateArticle"
// import UpdateArticle from "./components/UpdateArticle"
// import Deleterticle from "./components/DeleteArticle"
import Control from "./components/Control"
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 2;
    this.state = {
      mode: 'create',
      id: 0,
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
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadArticle title={_title} desc={_desc}/>
    } else if (this.state.mode === 'read') {
      _title = this.state.articles[this.state.id].title
      _desc = this.state.articles[this.state.id].desc
      _article = <ReadArticle title={_title} desc={_desc}/>
    } else if (this.state.mode === 'create') {
      _article = <CreateArticle onSubmit={function (_title, _desc) {
        this.max_content_id += 1;
        var _articles = this.state.articles.concat(
          {id: this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({
          articles:_articles
        });
      }.bind(this)}/>
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
              id: Number(id)
            });
          }.bind(this)}
          data={this.state.articles}
        />
        <Control onChangeMode={function (mode) {
          this.setState({
            mode:mode
          });
        }.bind(this)}/>
        {_article}
      </div>
    );
  }
}

export default App;
