# 安装

React 和 ReactDOM

- react 核心库 构造虚拟DOM的库
- react-dom 把虚拟DOM渲染到真实DOM上面

比vue大了整整三倍

- vue 移动端
- react pc端

注意引入的先后顺序
```html
<script src="react.js"></script>
<script src="react-dom.js"></script>
```
ReactDOM.render把虚拟DOM渲染为真实DOM
```html
<template>
    <div name="abc">
        {name}
        <p>abc</p>
    </div>
</template>
```
React.createElement构造虚拟DOM
```js
const h = React.createElement;
h(
    "div", {
        name: "abc"
    },
    name,
    h("p", null, "abc")
)
```

两份代码等价，但是jsx是我们经常要写的，而React.createElement函数是经过babel转话过来的
```js
// React.createElement('div',null,'helloworld')

// 下面这一种叫做JSX写法，需要用专门的babel处理器去处理
const jsx = <div>hello world</div>
```
transform-react-jsx 插件是帮我们把`const jsx = <div>hello world</div>`转为`React.createElement('div',null,'helloworld')`
```bash
npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack // 首先安装好 babel 环境
npm install --save-dev babel-plugin-transform-react-jsx //再安装 transform-react-jsx 插件
```

vue双向数据绑定，react单向数据绑定

- v-model v-on: 如果vue没有这两个指令，其实vue也是单向绑定

```html
<input v-model="xxx" />
```
