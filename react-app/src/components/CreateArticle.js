import React, { Component } from 'react';


class CreateArticle extends Component {
  render () {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create"
          method="POST"
          onSubmit={function (event) {
            event.preventDefault();
            this.props.onSubmit(
              event.target.title.value,
              event.target.desc.value
            );
          }.bind(this)}
        >
          <p><input type="text" name="title" placeholder="title"/></p>
          <p>
            <textarea name="desc" placeholder="description"/>
          </p>
          <p><input type="submit"/></p>
        </form>
      </article>
    );
  }
}

export default CreateArticle;