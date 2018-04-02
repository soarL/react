import React , { Component } from 'react'
import './index.less'
import { Route , Switch ,Redirect} from 'react-router-dom'

import {
	web
} from '@/config'
import Login from './login'
import Register from './register'

import {
	Row,
	Col	
} from 'antd'




class UserLogin extends Component{

	render(){
		return(
			<div className="login-box">
				<div className="container login-nav">
				    <ul className="list-inline">
				    	<li>
				    		<img src={require("./asset/logo.png")} alt="logo" />
				    	</li>
				    	<li><a href={web.main}>首页</a></li>
				    </ul>
				    <div className="clearfix"></div>
				</div>
				<div className="login-bg">
					<div className="container">
						<Row>
							<Col span={15}>
								
							</Col>
							<Col span={8}>
								<div className="handle-box">
									<Switch>
										<Route path="/login/login" component={ Login }></Route>
										<Route path="/login/register" component={ Register }></Route>
										<Redirect path='/login' to={{pathname:'/login/login'}}/>
									</Switch>
								</div>
							</Col>
							<Col span={1}>
								
							</Col>
						</Row>
					</div>
				</div>

				<footer className="login_footer">© 2017 汇诚普惠 91hc.com&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;福州汇诚金融外包服务有限公司&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;闽ICP备17009379号-2&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;市场有风险，投资需谨慎</footer>

			</div>
		)
	}
}

export default UserLogin