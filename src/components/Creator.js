import { Component } from "react";

class Creator extends Component {
  render() {
    return (
        <ul class="no-dot">
          <input
            type = "button"
            class = "custom-btn"
            value = "문서작성"
            href = "/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("create");
            }.bind(this)}
          />
        </ul>
    );
  }
}

export default Creator;