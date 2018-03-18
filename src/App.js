import React, { Component } from 'react';
import { Route , Switch , HashRouter} from 'react-router-dom';

// 只负责显示的组件
import {
  Header,
  Footer
} from '@/components'

// 容器组件 业务组件就是有状态的组件
import {
  Home,  
} from '@/containers'

class App extends Component {

  render() {
    return (
        <HashRouter>
           <div>
              <Header />
            
              <Switch>
                <Route path="/home" component={ Home }/>
              </Switch>
              <Footer/>
            </div>
       </HashRouter>
    );
  }
}


export default App;