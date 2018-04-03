import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
import * as verify from '@/config/verify-rule'
import SmsCodeInput from '@/components/SmsCodeInput'
import {
	Form,
	Input,
	Icon,
	Checkbox,
	Button,
	Modal
} from 'antd'

import {
	RegisterAgreement,
	NetworkPay
} from '@/components'

import smsAPI from '@/api/sms'
import userAPI from '@/api/user'

const FormItem = Form.Item

class Register extends Component{
	constructor(props){
		super(props)
		this.state={
			registerAgreement:false,
			networkPay:false
		}
	}
	async sendCode(){
		let phone = this.props.form.getFieldValue('phone')
		if(!phone){
			return '请输入手机号码'
		}
		let data = await smsAPI.register({phone:phone})
		return data
	}
	registerAgreement = ()=>{
		this.setState({
			registerAgreement:true
		})
	}
	networkPay = ()=>{
		this.setState({
			networkPay:true
		})
	}
	handleRegisterAgreement = ()=>{
		this.setState({
			registerAgreement:false
		})
	}
	handleNetworkPay = ()=>{
		this.setState({
			networkPay:false
		})
	}
	render(){
		const { getFieldDecorator,getFieldsError } =this.props.form 
		const handleSubmit = (e)=>{
		    e.preventDefault() // 不跳转
		    this.props.form.validateFields((err, values) => {
		      if (!err) {
		        userAPI.userRegister(values,this.props.history)
		      }
		  })
		}
		return(
			<div className="register">
				<ul className="list-unstyled account">
			        <li>注册账号</li>
			        <li>
			          <p className="already" id="tog-enter">已经有账号？点击这里&nbsp;<Link to='/login/login'>登录</Link></p>
			        </li>
			        <div className="clearfix"></div>
			    </ul>
			   	<Form onSubmit={handleSubmit}>
			   		<FormItem hasFeedback>
			   			{
			   				getFieldDecorator('phone',{
			   					rules:verify.phone
			   				})(<Input prefix={<Icon type='phone'/>} style={{color:'rgba(0,0,0,0.25)'}} type='text' placeholder='请输入手机号码'/>)
			   			}
			   		</FormItem>

			   		<FormItem hasFeedback>
			   			{
			   				getFieldDecorator('password',{
			   					rules:verify.password
			   				})(<Input prefix={<Icon type='lock'/>} style={{color:'rgba(0,0,0,0.25)'}} type='password' placeholder='密码为8~16位数字、字母和符号组合'/>)
			   			}
			   		</FormItem>

			   		<SmsCodeInput
			   			placeholder='请输入短信验证码' 
			   			prefix={<Icon type='user'/>}  
			   			btntype='primary' 
			   			second={ 60 } 
			   			getFieldDecorator={ getFieldDecorator } 
			   			getFieldDecoratorAGM={[
			   				"smsCode",{rules:verify.smsCode}
			   				]} callback={this.sendCode.bind(this)}
			   			/>

			   		<FormItem hasFeedback className="spread-user">
			   			{
			   				getFieldDecorator('spreadUser',{
			   					rules:verify.strFriendPhone
			   				})(<Input prefix={<Icon type='phone'/>} style={{color:'rgba(0,0,0,0.25)'}} type='text' placeholder='推荐人手机号码（选填）'/>)
			   			}
			   		</FormItem>

			   		<FormItem >
			   	      {getFieldDecorator('remember', {
			   	      	valuePropName: 'checked',
			   	      	initialValue: false,
			               rules:[{
			               	validator:verify.isChecked("请勾选阅读并同意用户协议"),
			               }]
			             })(<Checkbox className="hint">我已经阅读并同意 </Checkbox>)}
			             <p className="xieyi"><span onClick={this.registerAgreement}>《汇诚普惠用户注册协议》</span></p>
			             <p className="xieyi"><span onClick={this.networkPay}>《汇诚普惠网络交易资金账户服务三方协议》</span></p>
			   		</FormItem>

			   		<FormItem>
			   			<Button 
			   				type='primary'
			   				disabled={verify.isDisabled(getFieldsError())}
			   				className="login-btn"
			   				htmlType='submit'>
			   				注册
			   			</Button>
			   		</FormItem>

			   	</Form>
			   	<Modal
	   	          title="注册服务协议"
	   	          style={{ top: 20 }}
	   	          visible={this.state.registerAgreement}
	   	          closable={false}
	   	          okText="同意"
	   	          cancelText='关闭'
	   	          width={750}
	   	          onOk={this.handleRegisterAgreement}
	   	          onCancel={this.handleRegisterAgreement}
	   	        >
	   	          <RegisterAgreement/>
			   </Modal>
	   		   	<Modal
	      	          title="汇诚普惠网络交易资金账户服务三方协议"
	      	          style={{ top: 20 }}
	      	          visible={this.state.networkPay}
	      	          closable={false}
	      	          okText="同意"
	      	          onOk={this.handleNetworkPay}
	      	          onCancel={this.handleNetworkPay}
	      	          width={750}
	      	        >
	      	      <NetworkPay/>
	   		   </Modal>
			</div>
		)
	}
}

const RegisterForm = Form.create()(Register)

export default RegisterForm