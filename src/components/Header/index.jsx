import React,{ Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component{
	render() {
		return (
			<div>
				<nav className="navbar navbar-light">
				  <ul className="nav navbar-nav">
				    <li><Link to="/">首页</Link></li>
				    <li><Link to="/home">home</Link></li>
				  </ul> 
				</nav>
			</div>
		)
	}
}

export default Header