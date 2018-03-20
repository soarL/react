import React, { Component } from 'react';
import { Route , Switch , HashRouter } from 'react-router-dom';
import Loadable from 'react-loadable'
import { Row, Col} from 'antd'
import './App.less'

// 只负责显示的组件
import {
  Header,
  Footer,
  loading,
  LeftMenu
} from '@/components'


// 容器组件 业务组件就是有状态的组件//按需加载
import Home from '@/containers/Home'

const AsyncAntd = Loadable({
  loader: () => import('@/containers/Antd'),
  loading: loading
})

class App extends Component {
  componentDidMount() {
    // 做于预渲染
    AsyncAntd.preload()
  }

  render() {
    return (
        <HashRouter>
           <div className='container'>
               <Row>
                 <Col span={24}>
                   <Header />
                 </Col>
               </Row>

               <Row>
                 <Col span={4}>
                    <LeftMenu />
                 </Col>
                 <Col span={20}>
                   <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/antd" component={ AsyncAntd }/>
                 </Switch>
                 </Col>

               </Row>

               <Row>
                  <Col span={24}>
                     <Footer/>
                  </Col>
               </Row>
               
            </div>
       </HashRouter>
    )
  }
}


export default App;