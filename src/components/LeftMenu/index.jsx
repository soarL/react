import React,{ Component } from 'react'
import { Menu ,Icon} from 'antd'

import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu;

class LeftMenu extends Component{

	handleClick = (e) => {
    	console.log('click ', e);
  	}

	render(){
		return(
			<Menu
			       onClick={this.handleClick}
			       style={{ width: "95%" }}
			       // defaultSelectedKeys={['1']}
			       // defaultOpenKeys={['sub1']}
			       mode="inline"
			       inlineCollapsed={false}
			     >
	       <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Ant design</span></span>}>
	           <Menu.Item key="1">
	          		<Link to="/antd/base">基础应用</Link>
	           </Menu.Item>
	           <Menu.Item key="2">
	           		<Link to="/antd/from">表单</Link>
	           </Menu.Item>
	           <Menu.Item key="3">
					<Link to="/antd/alert">信息提示</Link>
	           </Menu.Item>
	           <Menu.Item key="4">Option 4</Menu.Item>
	       </SubMenu>

	       <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
	         <Menu.Item key="5">Option 5</Menu.Item>
	         <Menu.Item key="6">Option 6</Menu.Item>
	         <SubMenu key="sub3" title="Submenu">
	           <Menu.Item key="7">Option 7</Menu.Item>
	           <Menu.Item key="8">Option 8</Menu.Item>
	         </SubMenu>
	       </SubMenu>
	     </Menu>
		)
	}
}

export default LeftMenu