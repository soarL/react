import React, { Component } from 'react';
import { Route , Switch ,BrowserRouter ,Redirect} from 'react-router-dom'
import Loadable from 'react-loadable'
import { Row, Col} from 'antd'
import './App.less'

// 只负责显示的组件
import {
  Header,
  Footer,
  loading,
  LeftMenu,
  Breadcrumb
} from '@/components'


// 容器组件 业务组件就是有状态的组件//按需加载
import Index from '@/containers/Account/index'

const AsyncAntdBase = Loadable({
  loader: () => import('@/components/Antd/base'),
  loading: loading
})

class App extends Component {
  componentDidMount() {
    // 做于预渲染
    AsyncAntdBase.preload()
  }

  render() {
    return (
        <BrowserRouter>
           <div>
               <Row className="header-fixed">
                 <Col span={24}>
                   <Header />
                 </Col>
               </Row>
               <Breadcrumb/>

              <div className="main">
                 <Row className="container">
                   <Col span={4}>
                      <LeftMenu />
                   </Col>
                   <Col span={20}>
                       <div className="main-right">
                         <Switch>
                           <Route path="/account/index" component={ Index } />
                           <Route path="/account/logs" component={ AsyncAntdBase }/>
                           <Redirect path='/' to={{pathname:'/account/index'}}/>
                         </Switch>
                       </div>
                   </Col>
                 </Row>
               </div>
               
               <Row>
                  <Col span={24}>
                     <Footer/>
                  </Col>
               </Row>

            </div>
       </BrowserRouter>
    )
  }
}


export default App