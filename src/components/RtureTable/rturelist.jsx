import React, { Component } from 'react'
import{
	Row,
	Col
} from 'antd'


class Single extends Component{
	constructor(props){
		super(props)
		let hstate = this.props.data.status
		let bgImg = ''
		if(hstate===0){
			bgImg = "single-box state-2"
		}else{
			bgImg = "single-box state-3"
		}

		this.state={
			status:bgImg
		}
	}

	render(){
		return(
			<Row className={this.state.status}>
				<Col span={5} className='col-1'>
					<h4>期数</h4>
					<span>{this.props.data.qishu}</span>
				</Col>
				<Col span={19} className='col-2'>
					<h3>{this.props.data.title}</h3>
					<Row className="list">
						<Col span={8}>
							<p>回款本息（元）</p>
							<span>￥{this.props.data.amount}</span>
						</Col>
						<Col span={8}>
							<p>计划回款日</p>
							<span>{this.props.data.planDate}</span>
						</Col>
						<Col span={8}>
							<p>实际回款日</p>
							<span>{this.props.data.realDate}</span>
						</Col>
					</Row>
				</Col>
			</Row>
		)
	}
}


class RtureList extends Component{
	render(){
		return(
			<div className='rture-list'>
				{this.props.listData.map((key,index)=><Single key={index} data={key}/>)}
			</div>
		)
	}
}

export default RtureList