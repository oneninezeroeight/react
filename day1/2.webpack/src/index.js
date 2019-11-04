import React from 'react'
import ReactDOM from 'react-dom'

// React.createElement('div',null,'helloworld')

// 下面这一种叫做JSX写法，需要用专门的babel处理器去处理
const data = {
    name: 'yao',
    getAge(){
        return 18
    }
}

// View 可以只有View层
const jsx = <div>
    <p>{data.name}</p>
    <p name={data.name}>属性值</p>
    <p>{data.getAge()}</p>
    <p>{(()=>{
        let name = 'lin'
        return name
    })()}</p>
</div>
console.log(jsx)
ReactDOM.render(
    jsx,
    document.querySelector("#app")
)