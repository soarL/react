import React,{ Component } from 'react'

import userAPI from '@/api/user'

class BackCalendar extends Component{
	constructor(props){
		super(props)
		this.state={
			phone:""
		}
		this.hg.call(this)
	}
	async hg(){
		let data = await userAPI.getUserInfo()
		this.setState({
			phone:data.phone
		})
	}

	render(){
		return(
			<div>
				{this.state.phone}
			</div>
		)
	}
}

export default BackCalendar;