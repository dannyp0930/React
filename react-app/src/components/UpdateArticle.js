import React, { Component } from 'react';


class UpdateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this)
  }
  inputFormHandler(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  render () {
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update"
          method="POST"
          onSubmit={function (event) {
            event.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
            />
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}
            />
          </p>
          <p><input type="submit"/></p>
        </form>
      </article>
    );
  }
}

export default UpdateArticle;