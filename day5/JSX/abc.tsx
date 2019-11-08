class Test extends React.Component{
    render(){
        return (<div>123</div>)
    }
}
const Footer = ()=>{
    return (<div>456</div>)
}
ReactDOM.render(
    <div>
        <Test/>
        <Footer/>
    </div>,
    document.querySelector('#demo')
)