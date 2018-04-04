import React, { Component } from 'react'
import {
	Button
} from 'antd'

class Default extends Component{
	render(){
		return(
		<div>
			<img src={require("./asset/default.png")} alt=""/>
			<Button className="default-btn" type='primary'>下个还款日</Button>
		</div>
		)
	}
}


export default Default