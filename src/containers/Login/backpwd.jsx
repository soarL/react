import React, { Component } from 'react'
import * as verify from '@/config/verify-rule'
import SmsCodeInput from '@/components/SmsCodeInput'
import {
	Form,
	Icon,
	Input,
	Button
} from 'antd'

import { Link } from 'react-router-dom'

import userAPI from '@/api/user'
import smsAPI from '@/api/sms'

const FormItem = Form.Item

class BackPWD extends Component{
	// 异步
	async sendCode(){
		let phone = this.props.form.getFieldValue('phone')
		if(!phone){
			return "请输入手机号"
		}
		let data = await smsAPI.forget({phone:phone})
		return data
	}

	render(){
		const { getFieldDecorator,getFieldsError } =this.props.form 
		const handleSubmit = (e)=>{
		    e.preventDefault() // 不跳转
		    this.props.form.validateFields((err, values) => {
		      if (!err) {
		        userAPI.userForget(values,this.props.history)
		      }
		  })
		}

		return(
			<div className="login">
				<h1 className="welcome">找回密码</h1>
				<Form onSubmit={handleSubmit}>
					<FormItem hasFeedback>
						{
							getFieldDecorator('phone',{
								rules:verify.phone
							})(<Input prefix={<Icon type='phone'/>} style={{color:'rgba(0,0,0,0.25)'}} type='text' placeholder='请输入手机号码'/>)
						}
					</FormItem>

					<SmsCodeInput
						placeholder='请输入短信验证码' 
						prefix={<Icon type='user'/>}  
						btntype='primary' 
						second={ 60 } 
						getFieldDecorator={ getFieldDecorator } 
						getFieldDecoratorAGM={[
							"phoneCode",{rules:verify.smsCode}
							]} callback={this.sendCode.bind(this)}
						/>

					<FormItem hasFeedback>
						{
							getFieldDecorator('loginpass',{
								rules:verify.password
							})(<Input prefix={<Icon type='lock'/>} style={{color:'rgba(0,0,0,0.25)'}} type='password' placeholder='请输入新密码'/>)
						}
					</FormItem>

					<FormItem hasFeedback>
						{
							getFieldDecorator('loginpassSure',{
								rules:[{
									validator:verify.passwordAgain('两次密码不一样',this.props.form.getFieldValue('loginpass'))
								}],
							})(<Input prefix={<Icon type='lock'/>} style={{color:'rgba(0,0,0,0.25)'}} type='password' placeholder='确认新密码'/>)
						}
					</FormItem>

					<p className="hint">记得密码？ <Link to="/login/login">返回登录</Link></p>

					<FormItem>
						<Button 
							type='primary'
							disabled={verify.isDisabled(getFieldsError())}
							className="login-btn"
							htmlType='submit'>
							确定
						</Button>
					</FormItem>

				</Form>
			</div>
		)
	}
}

const BackPWDForm = Form.create()(BackPWD)

export default BackPWDForm