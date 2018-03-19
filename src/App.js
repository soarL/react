import React, { Component } from 'react';
import { Route , Switch , HashRouter} from 'react-router-dom';
import Loadable from 'react-loadable'

// 只负责显示的组件
import {
  Header,
  Footer,
  loading
} from '@/components'


// 容器组件 业务组件就是有状态的组件
const AsyncHome = Loadable({
  loader: () => import('@/containers/Home'),
  loading: loading
})

class App extends Component {

  render() {
    return (
        <HashRouter>
           <div>
              <Header />
              <Switch>
                <Route path="/home" component={ AsyncHome }/>
              </Switch>
              <Footer/>
            </div>
       </HashRouter>
    );
  }
}


export default App;