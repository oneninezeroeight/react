import { Component as WeElement, createElement as h } from "react";
import { connect } from "react-redux";
export default connect(state => {
  return state;
})(
  class Header extends WeElement {
    render() {
      return h(
        "div",
        null,
        "hello world",
        h("p", null, this.props.name),
        h(
          "ul",
          null,
          this.props.skill.map((item, index) =>
            h(
              "li",
              {
                key: index
              },
              item
            )
          )
        ),
        h("input", {
          value: this.state.inputValue,
          onChange: this.setStoreName.bind(this)
        })
      );
    }

    constructor(props) {
      super(props);
      this.state = {
        name: "123",
        inputValue: ""
      };
    }

    setStoreName(e) {
      this.setState({
        inputValue: e.target.value
      });
      this.props.dispatch({
        type: "SETNAME",
        name: e.target.value
      });
      console.log(e.target.value);
    }
  }
);
