import React,{ Component } from 'react'
import {
	Link
} from 'react-router-dom'
import {
	Row,
	Col
} from 'antd'

class AssetDetails extends Component{
	constructor(props){
		super(props)
		this.state={
			investStayCapital:100,
			creditStayCapital:200,
			investStayInterest:600,
			creditStayInterest:900
		}
	}
	render(){
		return(
			<div className="pandect">
			    <div className="title">
			    	<Row>
			    		<Col span={4}>
							<h1>资产详情</h1>
			    		</Col>
			    		<Col span={14}>
			    			
			    		</Col>
			    		<Col span={6} className="classfix">
			    			<span>按项目类型</span>
			    			<span><Link to='/account/detail'>资产明细</Link></span>
			    			<span><Link to='/account/logs'>交易记录</Link></span>
			    		</Col>
			    	</Row>
			    </div>
			    <div className="body">
			    	<Row>
			    		<Col span={10}>
			    			<div id="pandectBodyTable"></div>
			    		</Col>
			    		<Col span={14}>
			    			<div className="table">
			    				<Row>
			    					<Col span={9}>
			    						<h3>项目类型</h3>
			    						<p><span className="oval-1"></span>投资散标</p>
			    						<p><span className="oval-2"></span>承接债权</p>
			    					</Col>
			    					<Col span={8}>
			    						<h3>待收本金</h3>
			    						<p>{this.state.investStayCapital}元</p>
			    						<p>{this.state.creditStayCapital}元</p>
			    					</Col>
			    					<Col span={7}>
			    						<h3>待收利息</h3>
			    						<p className="origin">{this.state.investStayInterest}元</p>
			    						<p className="origin">{this.state.creditStayInterest}元</p>
			    					</Col>
			    				</Row>
			    			</div>
			    		</Col>
			    	</Row>
			        <h3 className='footer'>具体收益以实际收益为准</h3>
			    </div>
			</div>
		)
	}
}

export default AssetDetails