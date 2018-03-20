import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'

class Header extends Component{
	render() {
		return (
			<div className="header">
				  <ul className="nav">
				    <li><Link to="/">首页</Link></li>
				  </ul> 
			</div>
		)
	}
}

export default Header