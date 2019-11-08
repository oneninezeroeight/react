import React from "react";

export default (props) => {
    return (WrappedComponent) => {
        // <Lazy/>
        return class extends React.Component {
            render() {
                return ( < WrappedComponent {...props} / > )
            }
        }
    }
}