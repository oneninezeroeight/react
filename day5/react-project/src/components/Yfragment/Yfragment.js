import { Component as WeElement, createElement as h } from "react";
import React from "react";

class Yfragment extends WeElement {
  render() {
    return h(
      React.Fragment,
      null,
      h(
        "p",
        {
          ref: "p1"
        },
        "123"
      ),
      h("p", null, "456")
    );
  }

  componentDidMount() {
    console.log(this);
    this.refs.p1.style.color = "red";
    console.log("a");
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }
}

export default Yfragment;
