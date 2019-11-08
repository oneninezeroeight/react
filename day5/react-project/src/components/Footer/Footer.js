import React from "react";
import HOC2 from '../HOC2/HOC2'
class Footer extends React.Component {
    render() {
        return ( <div>底部组件 </div>)
    }
}

export default HOC2({
    name: 1
})(Footer)