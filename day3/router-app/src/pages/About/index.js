import React from 'react'
import {
    withRouter 
  } from "react-router-dom";
export default withRouter(class About extends React.Component {
    constructor(props){
        super(props);
        console.log(this)
    }
    render(){
        return (
            <div>
                关于
                <input />
                <button onClick={()=>{
                    this.props.history.push('/home?id=1')
                }}>点击跳转</button>
            </div>
        )
    }
})