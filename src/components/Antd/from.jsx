import React,{ Component } from 'react'
import {
	Form,
	Icon,
	Input,
	Button
} from 'antd'
import * as verify from '@/config/verify-rule.js'


const FormItem = Form.Item


class WrapFrom extends Component {
	constructor(props){
		super(props)
		this.state={
			hasError:"false",
		}
	}

	handleSubmit(e){
		console.log(e)
	}

	render(){
		const { getFieldDecorator } =this.props.form 
		
		return(
			<Form onSubmit={this.handleSubmit}>

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

				<FormItem>
					<Button 
						type='primary'
						disable={this.state.hasError}
						htmlType='submit'
						onClick={this.handleSubmit}>
						登入
					</Button>
				</FormItem>

			</Form>
		)
	}
} 


const WrappedHorizontalLoginForm = Form.create()(WrapFrom)
export default WrappedHorizontalLoginForm