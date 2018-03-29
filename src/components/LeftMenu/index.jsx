import React,{ Component } from 'react'
import { Menu ,Icon} from 'antd'
import './index.less'
import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu;

const Item = Menu.Item

class LeftMenu extends Component{

	render(){
		return(
			<Menu
			       onClick={this.handleClick}
			       // defaultSelectedKeys={['1']}
			       defaultOpenKeys={['sub1']}
			       mode="inline"
			       inlineCollapsed={false}
			       className="navMenu"
			     >
	       <SubMenu className="box first-menu" key="sub1" title={<span className="aLink"><Icon type="mail" /><Link to="/account/index" className="aLink">我的账户</Link></span>} disabled>
	           <Item key="1">
	          		<Link to="/account/detail">资产明细</Link>
	           </Item>
	           <Item key="2">
	           		<Link to="/account/logs">交易记录</Link>
	           </Item>
	           <Item key="3">
					<Link to="/account/recharge">充值</Link>
	           </Item>
	           <Item key="4">
	           		<Link to='/account/withdraw'>提现</Link>
	           </Item>
	           <Item key="5">
	           		<Link to='/account/bank'>银行卡</Link>
	           </Item>
	       </SubMenu>

	       <SubMenu className="box" key="sub2" title={<span className="aLink"><Icon type="appstore" /><span>投资管理</span></span>}>
	         <Item key="6"><Link to="/invest/assign">债券转让</Link></Item>
	       </SubMenu>

	       <SubMenu className="box" key="sub3" title={<span className="aLink"><Icon type="appstore" /><span>我的特权</span></span>}>
	         <Item key="7"><Link to="/privilege/lotteries">红包卡券</Link></Item>
	       </SubMenu>

	       <Item key="8" className="box last-menu">
	       		<Icon type="setting" className="aLink"/>
	       		<span><Link to='/safe' className="aLink">账户设置</Link></span>
	       </Item>
	     </Menu>
		)
	}
}

export default LeftMenu