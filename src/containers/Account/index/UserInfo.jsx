import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import {
	Row,
	Col,
	Button,
	Tooltip
} from 'antd'


class UserInfo extends Component{
	constructor(props){
		super(props)
		this.state={
			phone:'13774770527',

		}
	}
	render(){
		return(
			<div className="user-info">

                <div className="pandectHeadTop">
                	<Row>
                		<Col span={ 5 }>
                			<div className="user-img">
                    			<img  src="http://asset.eph.com/web/user/img/userImg.png" alt="userImg"/>
                			</div>
                		</Col>
                		<Col span={ 11}>
		                    <dl className="pandectHeadData">
		                        <dt>用户名:<span>{this.state.phone}</span> 会员等级:<span>暂未开放</span></dt>
		                        <dd className="userState">
		                        	<Tooltip title="手机号码已经注册！">
		                        		<span></span>
		                        	</Tooltip>
		                        	<Tooltip title="邮箱已认证！">
			                        	<span></span>
		                        	</Tooltip>
		                        	<Tooltip title="未绑定银行存管">
		                        		<span></span>
		                        	</Tooltip>
		                        	<Tooltip>
		                        	<span></span>
		                        		
		                        	</Tooltip>
		                        </dd>
		                    </dl>
                		</Col>
                		<Col span={ 8 } className="recharge">
                			<div>
		                		<Button type="primary" className="button-c">
		                			<Link to="/account/recharge" className="recharge-c">充值</Link>
		                		</Button>
		                		<Button type="default" className="recharge-t">
		                			<Link to="/account/withdraw" >提现</Link>
		                		</Button>
                			</div>
                		</Col>
                	</Row>
                </div>

                <div className="pandectHeadButton">
                    <dl>
                        <dt><span></span>元</dt>
                        <dd>账户余额</dd>
                    </dl>
                    <dl>
                        <dt><span></span>元</dt>
                        <dd>待收资产总额</dd>
                    </dl>
                    <dl>
                        <dt><span></span>元</dt>
                        <dd>收益总金额</dd>
                    </dl>
                    <dl>
                        <dt><a className="pandectHeadButton-4" style={{fontSize:"24px"}} href="/account/lotteries">xx</a>张</dt>
                        <dd>可用红包券</dd>
                    </dl>
                    <dl>
                        <dt><span className="pandectHeadButton-4"></span>元</dt>
                        <dd>可用体验金</dd>
                    </dl>
                    <div className="clearfix"></div>
                </div>
            </div>
		)
	}
}

export default UserInfo;