import React,{ Component } from 'react'
import {
	Form,
	Icon,
	Input,
	Button,
	Checkbox,
	message
} from 'antd'
import * as verify from '@/config/verify-rule.js'


const FormItem = Form.Item


class WrapFrom extends Component {
	state={
		code:'点击获取验证码'
	}
	code(){

		this.setState({
			code:'60s后重新获取'
		})
	}

	render(){

		const { getFieldDecorator,getFieldsError } =this.props.form 

		const handleSubmit = (e)=>{
		    e.preventDefault() // 不跳转
		    this.props.form.validateFields((err, values) => {
		      if (!err) {
		        message.success('成功发送：'+JSON.stringify(values));
		      }
		  })
		}

		return(
			<Form onSubmit={handleSubmit}>
				<FormItem hasFeedback>
				{
					getFieldDecorator('user',{
						rules:verify.user
					})(<Input prefix={<Icon type='user'/>} style={{color:'rgba(0,0,0,0.25)'}} type='text' placeholder='请输入用户名'/>)
				}
				</FormItem>		

				<FormItem hasFeedback>
				{
					getFieldDecorator('password',{
						rules:verify.password
					})(<Input prefix={<Icon type='lock'/>} type='password' placeholder="请输入123456"/>)
				}
				</FormItem>

				<FormItem label="E-mail" >
		          {getFieldDecorator('email', {
		            rules: verify.email,
		          })(<Input placeholder='请输入您的邮箱'/>)}
				</FormItem>

				<FormItem hasFeedback>
				{
					getFieldDecorator('code',{
						rules:verify.smsCode
					})(<Input prefix={<Icon type='phone' />} type='text' placeholder='请输入验证码'/>)
				}
				</FormItem>
				<FormItem>
					<Button type='primary' onClick={this.code.bind(this)}>{this.state.code}</Button>
				</FormItem>
				
				<FormItem >
			      {getFieldDecorator('remember', {
			      	valuePropName: 'checked',
			      	initialValue: true,
		            rules:[{
		            	validator:verify.isChecked("请勾选阅读并同意用户协议"),
		            }]
		          })(<Checkbox>阅读并同意</Checkbox>)}
				</FormItem>

				<FormItem>
					<Button 
						type='primary'
						disabled={verify.isDisabled(getFieldsError())}
						htmlType='submit'>
						登入
					</Button>
				</FormItem>

			</Form>
		)
	}
} 


const WrappedHorizontalLoginForm = Form.create()(WrapFrom)

export default WrappedHorizontalLoginForm