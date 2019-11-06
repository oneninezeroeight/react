import React from 'react';
import './App.css';

import Home from './pages/Home'
import Users from './pages/Users'
import About from './pages/About'



import {
  // htm5的浏览器路由模式
  // BrowserRouter as Router,
  // 哈希模式
  HashRouter as Router,
  // MemoryRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const RouterDiy = ({routes})=>{
  // ajax做登录获取
  let bool = true
  if(bool){
    return routes.map((item,index)=>{
      return (
        <Route path={item.url}>
          {item.component}
        </Route>
      )
    })
  }else{
    return <div>404</div>
  }
}

// V <= Fn(props/state)

function App() {
  let routes = [{
    url:'/about',
    // <About />
    component: About
  },{
    url:'/users',
    component: <Users />
  },
  {
    url:'/home',
    component: <Home />
  }
]
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/*<router-view></router-view>*/}
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch> */}
        <Switch>
          <RouterDiy routes={routes} />
        </Switch>
        <Redirect to="/users" />
      </div>
    </Router>
  );
}

export default App;
