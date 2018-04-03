import React, { Component } from 'react'
import * as verify from '@/config/verify-rule'
import SmsCodeInput from '@/components/SmsCodeInput'
import {
	Form,
	Icon,
	Input,
	Button,
	Checkbox,
} from 'antd'

import { Link } from 'react-router-dom'

import userAPI from '@/api/user'

const FormItem = Form.Item

class Login extends Component{

	
	async sendCode(){
		// let phone = this.props.form.getFieldValue('smsCode')
		let data = await userAPI.userLogin({asd:"asd"})
		return data
	}

	render(){
		const { getFieldDecorator,getFieldsError } =this.props.form 
		const handleSubmit = (e)=>{
		    e.preventDefault() // 不跳转
		    this.props.form.validateFields((err, values) => {
		      if (!err) {
		        userAPI.userLogin(values,this.props.history)
		      }
		  })
		}

		return(
			<div className="login">
				<h1 className="welcome">欢迎登录</h1>
				<Form onSubmit={handleSubmit}>
					<FormItem hasFeedback>
						{
							getFieldDecorator('username',{
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
							]} callback={this.sendCode}
						/>

					<FormItem >
				      {getFieldDecorator('remember', {
				      	valuePropName: 'checked',
				      	initialValue: true,
			            rules:[{
			            	required:false
			            }]
			          })(<Checkbox className="hint">保持登录状态（7天内免登录）忘记密码？<Link to="/login/backpwd">找回密码</Link></Checkbox>)}
					</FormItem>

					<p className="hint">还没有账号？点击这里 <Link to="/login/register">免费注册</Link></p>

					<FormItem>
						<Button 
							type='primary'
							disabled={verify.isDisabled(getFieldsError())}
							className="login-btn"
							htmlType='submit'>
							登录
						</Button>
					</FormItem>

				</Form>
			</div>
		)
	}
}

const LoginForm = Form.create()(Login)

export default LoginForm