import React,{ Component } from 'react'
import { Spin } from 'antd'
import './index.less'

class Loading extends Component{
	render(){
		return (
			<div className="loading">
				<Spin size="large" />	
			</div>
		)
	}
}

export default Loading