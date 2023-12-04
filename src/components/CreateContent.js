import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input class="Create_Title"type="text" name="title" placeholder="title"/>
          </p>
          <p>
            <textarea class="Create" name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input class="Right_Side"type="submit"/>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;