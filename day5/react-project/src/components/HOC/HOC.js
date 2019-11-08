import React from "react";
import Lazy from "../Lazy/Lazy"
// lazy组件经过hoc组件的处理之后，不但拥有原来的东西，还可以拥有hoc给他的东西，它就是高阶组件
export default class HOC extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      skill: ['ps','js','css']
    }
  }
  render(props) {
    return (
      <Lazy skill={this.state.skill} />
    )
  }
}
