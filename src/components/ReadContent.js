import { Component } from "react";

class ReadContent extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img class="body-image-center" src={this.props.img} alt={this.props.title}></img>
        <br></br><br></br>
        <desc class="text-left-8em A1Font">{this.props.desc}</desc>
      </article>
    );
  }
}

export default ReadContent;