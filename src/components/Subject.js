import { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header
      onClick={function (e) {
        e.preventDefault();
        this.props.onChangePage();
      }.bind(this)}>
        <h1>
          <a>
            <div class="title-logo">
            <img class="title-logo" src={this.props.image}></img>
            </div>
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;