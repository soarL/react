import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
import * as verify from '@/config/verify-rule'
import SmsCodeInput from '@/components/SmsCodeInput'
import {
	Form,
	Input,
	Icon,
	Checkbox,
	Button
} from 'antd'

const FormItem = Form.Item

class Register extends Component{
	render(){
		const { getFieldDecorator,getFieldsError } =this.props.form 
		return(
			<div className="register">
				<ul className="list-unstyled account">
			        <li>注册账号</li>
			        <li>
			          <p className="already" id="tog-enter">已经有账号？点击这里&nbsp;<Link to='/login/login'>登录</Link></p>
			        </li>
			        <div className="clearfix"></div>
			    </ul>
			   	<Form>
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
			   				]} callback={this.sendCode}
			   			/>

			   		<FormItem hasFeedback>
			   			{
			   				getFieldDecorator('strFriendPhone',{
			   					rules:verify.strFriendPhone
			   				})(<Input prefix={<Icon type='phone'/>} style={{color:'rgba(0,0,0,0.25)'}} type='text' placeholder='推荐人手机号码（选填）'/>)
			   			}
			   		</FormItem>

			   		<FormItem >
			   	      {getFieldDecorator('remember', {
			   	      	valuePropName: 'checked',
			   	      	initialValue: false,
			               rules:[{
			               	required:false
			               }]
			             })(<Checkbox className="hint">我已经阅读并同意</Checkbox>)}
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
			</div>
		)
	}
}

const RegisterForm = Form.create()(Register)

export default RegisterForm