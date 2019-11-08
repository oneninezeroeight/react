import { Component as WeElement, createElement as h } from "react";
import { connect } from "react-redux";
export default connect(state => {
  return state;
})(
  class Footer extends WeElement {
    render() {
      return h("div", null, "\u5E95\u90E8\u7EC4\u4EF6 ", this.props.name);
    }

    constructor(props) {
      super(props);
      this.state = {
        name: "yao"
      };
    }
  }
);
