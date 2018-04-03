import React,{ Component } from 'react'
import { Link ,withRouter} from 'react-router-dom'
import storage from '@/api/localStorage'


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
			phone:storage.get('phone'),
			id:(()=>{
					if(storage.get("cardstatus")==="y"){
						return true
					}else{
						return false
					}
				})(),
			bank:storage.get('thirdAccountStatus'),
			email:(()=>{
					if(storage.get("emailstatus")==="y"){
						return true
					}else{
						return false
					}
				})(),
			fundMoney:storage.get('fundMoney'),
			stayAll:0,
			getInterest:0,
			lotteryCount:0,
			imiMoney:0,
			userImg:storage.get('userimg')
		}
	}
	confirm = (e)=>{
		this.props.history.push('/safe')
	}

	render(){
		return(
			<div className="user-info">

                <div className="pandectHeadTop">
                	<Row>
                		<Col span={ 6 }>
                			<div className="user-img">
                    			<img  src={this.state.userImg} alt="userImg"/>
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
		                        	<Tooltip title={this.state.bank? "已绑定银行存管！" :"未绑定银行存管！" }>
	                        		  <Popconfirm title="投资前需要绑定银行存管" onConfirm={this.confirm} okText="立即绑定" cancelText="关闭"  placement="bottom" defaultVisible={this.state.bank ?  false : true} >
									    <span className={this.state.bank ? '' : 'off'}></span>
									  </Popconfirm>
		                        	</Tooltip>


		                        	<Tooltip title={this.state.email ? "邮箱已绑定！":"邮箱未绑定！"}>
		                        		<span className={this.state.email ? '' : 'off'}></span>
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

export default withRouter(UserInfo);