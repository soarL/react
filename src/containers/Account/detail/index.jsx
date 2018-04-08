import React, { Component } from 'react'
import './index.less'
import {
	Row,
	Col,
} from 'antd'

import Invest from './invest'
import Bond from './bond'
import Table from './table'


class Detail extends Component{
	constructor(props){
		super(props)
		this.state={
			display:true,
			investStyle:'btn on',
			bondStyle:'btn',
			invest:{
				benjin:{
					fandai:60,
					chedai:30
				},
				interest:{
					fandai:50,
					chedai:80
				},
			},
			bond:{
				benjin:{
					fandai:30,
					chedai:20
				},
				interest:{
					fandai:44,
					chedai:23
				},
			}
		}
	}

	handleChooseInvest = ()=>{
		this.setState({
			display:true,
			investStyle:'btn on',
			bondStyle:'btn'
		})

	}
	handleChooseBond=()=>{
		this.setState({
			display:false,
			investStyle:'btn',
			bondStyle:'btn on'
		})
	}

	render(){
		return(
			<div className='detail'>
				<div className="box">
					<Row className='tag'>
						<Col span={12}>
							<div className={ this.state.investStyle } onClick={this.handleChooseInvest}>
								投资散标
							</div>
						</Col>
						<Col span={12}>
							<div className={this.state.bondStyle} onClick={this.handleChooseBond}>
								承接债权
							</div>
						</Col>
					</Row>
					<div className="item">
						{
							this.state.display ? <Invest data={this.state.invest}/> : <Bond data={this.state.bond}/>						
						}
                    </div>
				</div>
				<div className="box">
					<Table/>
				</div>
			</div>
		)
	}
}

export default Detail