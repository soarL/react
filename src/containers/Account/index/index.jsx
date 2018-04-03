import React,{ Component } from 'react'

import UserInfo from './UserInfo'
import AssetDetails from './AssetDetails'
import BackCalendar from './BackCalendar'

import './index.less'

class Index extends Component{
	
	render(){
		return(
			<div className="index">
				<div className="box">
					<UserInfo data={ this.props}/>
				</div>
				<div className="box">
					<AssetDetails/>
				</div>
				<div className="box">
					<BackCalendar/>
				</div>
			</div>
		)
	}
}


export default Index