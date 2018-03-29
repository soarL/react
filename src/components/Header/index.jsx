import React,{ Component } from 'react'
import loginAPI from '@/api/login'
import userAPI from '@/api/user'

import './index.less'
import {
	Row,
	Col,
} from 'antd'

import {
	web
} from '@/config'



class Header extends Component{
	constructor(props){
		super(props)
		this.state={
			weixin:0,
			userPhone:''
		}
	}
	weiXinShow = ()=>{
		this.setState({
			weixin:1
		})
	}
	weiXinOut = ()=>{
		this.setState({
			weixin:0
		})
	}

	loginOut = ()=>{
		loginAPI.loginOut()
	}

	async componentDidMount() {
		let data =await userAPI.userInfo()
		this.setState({
			userPhone:data.phone
		})
	}

	render() {
		return (
			<div className='header-box'>
				<div className="header">
					<div className='container'>
						<Row>
							<Col span={14}>
								<img src={require("./asset/phoneico.png")} alt="phoneico" />&nbsp;&nbsp;全国热线：
								<span className="phone">400-080-8885</span>(9:00-21:00)&nbsp;&nbsp;
								关注我们：
								<a href="http://wpa.b.qq.com/cgi/wpa.php?ln=2&amp;uin=4000808885" target="_blank" className="qq" rel="noopener noreferrer">
									<img src={require("./asset/qqico.png")} alt="qq" />
								</a>
								<span className="weixin">
					  				<img src={require("./asset/wxico.png")} alt="weixin" onMouseEnter={this.weiXinShow} onMouseLeave={this.weiXinOut}/>
					  				<img src="http://asset.eph.com/src/images/public/public.jpg" alt='weixin' className="ouput" style={{opacity:this.state.weixin}}/>
								</span>
							</Col>
							<Col span={10} className="left">
								<a className="enter">{this.state.userPhone}</a>
								|
								<a className="login" onClick={this.loginOut}>退出</a>
								|
								<a href={web.main+'/help'} className='new-use' target="_blank" rel="noopener noreferrer">新手指南</a>
							</Col>
						</Row>
					</div> 
				</div>

				<div className='nav'>
					<div className='container'>
						<Row>
							<Col span={8}>
								<a href={web.main}><img src={require("./asset/logo.png")} alt="logo"/></a>
							</Col>
							<Col span={16}>
								<ul className="list-inline">
									<li><a href={web.main}>首页</a></li>
									<li><a href={web.main+"/odds"}>我要投资</a><span></span></li>
									<li><a href={web.main+"/order"}>我要借款</a></li>
									<li><a href={web.main+"/about"}>信息披露</a></li>
									<li><a className="nav-active">我的账户</a></li>
								</ul>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		)
	}
}

export default Header