import React,{ Component } from 'react'
import { 
	Row,
	Col,
 } from 'antd'

import {
	web
} from '@/config'

import './index.less'

class Footer extends Component{
	render() {
		return (
			<div className='footer-box'>
				<div className="footer">
					<div className="container">
						<Row>
							<Col span={6} className="first-col">
								<dl>
									<dt>信息披露</dt>
									<dd><a href={web.main+"/help"}>公司介绍</a></dd>
									<dd><a href={web.main+"/about/info"}>公司信息</a></dd>
									<dd><a href={web.main+"/about/riskplan"}>风险管理</a></dd>
									<dd><a href={web.main+"/about/events"}>对外公示</a></dd>
									<dd><a href={web.main+"/about/report"}>运营报告</a></dd>
								</dl>
								<dl>
									<dt>关于我们</dt>
									<dd><a href={web.main+"/about/contact"}>联系我们</a></dd>
									<dd><a href={web.main+"/about/develop"}>发展历程</a></dd>
									<dd><a href={web.main+"/about/honor"}>荣誉资质</a></dd>
									<dd><a href={web.main+"/about/rates"}>收费标准</a></dd>
								</dl>
							</Col>
							<Col span={12} className="second-col">
								<Row>
									<Col span={12}>
										<img src={require('./asset/huilogo.png')} alt="logo" />
										<h1 className="phone">400-080-8885</h1>
									</Col>
									<Col span={12}>
										<dl>
											<dt><a href="http://wpa.b.qq.com/cgi/wpa.php?ln=2&uin=4000808885" target="_blank" rel="noopener noreferrer"><img src={require("./asset/qqkefu.png")} alt="qq" /></a></dt>
											<dt><a><img src={require("./asset/weixinkefu.png")} alt="weixin" className="weixin" /></a></dt>
											<dd>在线客服</dd>
											<dd>周一到周六9:00-21:00</dd>
											<dd>福州市鼓楼区五四路国贸广场2楼H单元</dd>
										</dl>
									</Col>
								</Row>
							</Col>
							<Col span={6} className="third-col">
								<div>
									<p>
										<img src={require("./asset/public.png")} alt="关注公众号"/>关注公众号
									</p>
								</div>
								<div>
									<p>
										<img src={require("./asset/after.png")} alt="APP研发中"/>APP研发中
									</p>
								</div>
							</Col>
						</Row>
					</div>
				</div>
				<div className="page-footer">
					<ul className="list-unstyled">
						<li><a href={web.main+"/contract/third"}>资金服务三方协议</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
						<li><a href={web.main+"/contract/register"}>注册协议</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
						<li>闽ICP备17009379号-2&nbsp;&nbsp;|&nbsp;&nbsp;</li>
						<li><a href={web.main+"/about/risk"}>风险揭示书</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
						<li><a href={web.main+"/contract/borrow"}>借款须知</a></li>
					</ul>
					<p>2017版本&nbsp;&nbsp;|&nbsp;&nbsp;福州汇诚金融外包服务有限公司&nbsp;&nbsp;闽ICP备17009379号-2</p>
				</div>
			</div>
		)
	}
}

export default Footer