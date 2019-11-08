import { Component as WeElement, createElement as h } from "react";
import HOC2 from "../HOC2/HOC2";
export default HOC2(
  {
    name: "abc"
  },
  class Lazy extends WeElement {
    render() {
      return h("div", null, "hello world");
    }

    constructor(props) {
      super(props);
      this.state = {
        name: "lin"
      };
    }
  }
);
