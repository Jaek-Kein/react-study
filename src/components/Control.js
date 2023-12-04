import { Component } from "react";

class Control extends Component {
  render() {
    return (
      <div>
        <div class="right_btn right_margin">
          <input
            type = "button"
            class = "custom-btn btn30-24"
            value = "Update"
            href="/update"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("update");
            }.bind(this)}
          />
        </div>
        <div class="right_btn">
          <input
            type="button"
            class = "custom-btn btn30-24"
            value="delete"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("delete");
            }.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Control;