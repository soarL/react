import React, { Component } from 'react';
import { Route , Switch ,Redirect,withRouter} from 'react-router-dom'
import Loadable from 'react-loadable'
import { Row, Col,message} from 'antd'
import storage from '@/api/localStorage'
import './App.less'

import {
  Header,
  Footer,
  Loading,
  LeftMenu,
  Breadcrumb
} from '@/components'


// 容器组件 业务组件就是有状态的组件//按需加载
import Index from '@/containers/Account/index'

const AsyncAntdBase = Loadable({
  loader: () => import('@/components/Antd/base'),
  loading: Loading
})

class App extends Component {
  constructor(props){
    super(props)
    if(!storage.get('userId')){
      message.error('您还未登录')
      setTimeout(()=>{
        this.props.history.push('/login/login')
      },1000)
    }
  }
  componentDidMount() {
    // 做于预渲染
    AsyncAntdBase.preload()
  }

  render() {
    return (
         <div>
             <Row className="header-fixed">
               <Col span={24}>
                 <Header />
               </Col>
             </Row>
             <div className="bodytop"></div>
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
    )
  }
}


export default withRouter(App)