import React,{ Component } from 'react'
import { Input , Form,Button } from 'antd'
import './index.less'

const FormItem = Form.Item
class CountDownButton extends Component{
	constructor(props){
		super(props)

		this.state={
			disabled:false,
			btntxt:'获取验证码'
		}
	}

	btnClick(callback){
		let i = this.props.second
		this.setState({
			disabled:true,
			btntxt: this.props.second +'s后重新获取'
		})
		let timer = setInterval(()=>{
			i -=1
			this.setState({
				btntxt: i+'s后重新获取'
			})
			if(i===0){
				clearInterval(timer)
				this.setState({
					btntxt:'获取验证码',
					disabled:false
				})
			}
		},1000)

		if(typeof callback ==='function'){
			callback()
		}else{
			console.log('callback 必须是一个func')
		}
	}
	render(){
		return(
			<FormItem className='CountDownButton' style={this.props.style}>
			{
				this.props.getFieldDecorator(...this.props.getFieldDecoratorAGM)(<Input placeholder={ this.props.placeholder || '请设置一个placeholder'} type='text' prefix={this.props.prefix} className='input'/>)
			}
				<Button type={this.props.btntype} disabled={this.state.disabled} onClick={this.btnClick.bind(this,this.props.callback)} className="countButton">{this.state.btntxt}</Button>
			</FormItem>
		)
	}
}

export default CountDownButton