import React, { Component } from 'react';
import { Route , Switch , HashRouter } from 'react-router-dom';
import Loadable from 'react-loadable'
import { Row, Col } from 'antd'
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

const AsyncAntdBase = Loadable({
  loader: () => import('@/components/Antd/base'),
  loading: loading
})

const AsyncAntdFrom = Loadable({
  loader: () => import('@/components/Antd/from'),
  loading: loading
})

const AsyncAntdAlert = Loadable({
  loader: () => import('@/components/Antd/alert'),
  loading: loading
})

class App extends Component {

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
                     <Route path="/antd/base" component={ AsyncAntdBase }/>
                     <Route path="/antd/from" component={ AsyncAntdFrom }/>
                     <Route path="/antd/alert" component={ AsyncAntdAlert }/>
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