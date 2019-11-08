import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  header {
    background-color: red;
    color: white;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
`;

class Header extends WeElement {
  render() {
    return h(StyledComponents, null, h("header", null, this.state.title));
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "微信"
    };
  }
}

export default Header;
