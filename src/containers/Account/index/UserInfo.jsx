import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import {
	Row,
	Col,
	Button,
	Tooltip,
	Popconfirm
} from 'antd'


class UserInfo extends Component{
	constructor(props){
		super(props)
		this.state={
			phone:'13774770527',
			id:0,
			bank:0,
			email:0,
			fundMoney:0,
			stayAll:0,
			getInterest:0,
			lotteryCount:0,
			imiMoney:0
		}
	}
	confirm = (e)=>{
	}
	cancel = (e)=>{
	}
	render(){
		return(
			<div className="user-info">

                <div className="pandectHeadTop">
                	<Row>
                		<Col span={ 6 }>
                			<div className="user-img">
                    			<img  src="http://asset.eph.com/web/user/img/userImg.png" alt="userImg"/>
                			</div>
                		</Col>
                		<Col span={ 10 }>
		                    <dl className="pandectHeadData">
		                        <dt>用户名:<span>{this.state.phone}</span> 会员等级:<span>暂未开放</span></dt>
		                        <dd className="userState">
		                        	<Tooltip title="手机号码已经注册！">
		                        		<span></span>
		                        	</Tooltip>
		                        	<Tooltip title={this.state.id ? "身份已认证！" :"身份未认证！"}>
			                        	<span className={this.state.id ? '' : 'off'}></span>
		                        	</Tooltip>
		                        	<Tooltip title={this.state.bank? "已绑定银行卡！" :"未绑定银行卡！" }>
	                        		  <Popconfirm title="投资前需要进行实名认证？" onConfirm={this.confirm} onCancel={this.cancel} okText="立即认证" cancelText="关闭"  placement="bottom" defaultVisible={this.state.bank ?  false : true} >
									    <span className={this.state.bank ? '' : 'off'}></span>
									  </Popconfirm>
		                        	</Tooltip>


		                        	<Tooltip title={this.state.bank ? "邮箱已绑定！":"邮箱未绑定！"}>
		                        		<span className={this.state.bank ? '' : 'off'}></span>
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
                	<Row>
                		<Col span={5}>
                			<p>
                				<span>{this.state.fundMoney}</span>元
                			</p>
                			<p>账户余额</p>
                		</Col>
                		<Col span={5}>
                			<p>
                				<span>{this.state.stayAll}</span>元
                			</p>
                			<p>待收资产总额</p>
                		</Col>
                		<Col span={5}>
                			<p>
                				<span>{this.state.getInterest}</span>元
                			</p>
                			<p>收益总金额</p>
                		</Col>
                		<Col span={5}>
                			<p>
                				<Link to="/privilege/lotteries"><span className="origin">{this.state.lotteryCount}</span></Link>张
                			</p>
                			<p>可用红包券</p>
                		</Col>
                		<Col span={4}>
	                		<p>
	                			<span className="origin">{this.state.imiMoney}</span>元
	                		</p>
                			<p>可用体验金</p>
                		</Col>
                	</Row>
                </div>
            </div>
		)
	}
}

export default UserInfo;