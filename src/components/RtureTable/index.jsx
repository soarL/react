import React, { Component } from 'react'
import Loadable from 'react-loadable'
import './index.less'

import {
	Row,
	Col,
	Icon
} from 'antd'

import Loading from '@/components/Loading'

const AsyncDefault = Loadable({
  loader: () => import('./default'),
  loading: Loading
})

const AsyncRtureList = Loadable({
  loader: () => import('./rturelist'),
  loading: Loading
})


class RtureTable extends Component{
	componentWillMount() {
		AsyncDefault.preload()
		AsyncRtureList.preload()
	}
	render(){
		return(
			<div className='rture-table'>
				<div className='header'>
					<Row>
						<Col span={12}>
							<p>计划回款项目（个）</p>
							<p><Icon type='left'/><span>0</span></p>
						</Col>
						<Col span={12}>
							<p className="span2">计划回款金额（元）</p>
							<p className="span2"><span>￥0.00</span><Icon type='right'/></p>
						</Col>
					</Row>
				</div>	
				<div className="body">
					{this.props.list.length ? <AsyncRtureList listData = { this.props.list }/> : <AsyncDefault/>}
				</div>
			</div>
		)
	}
}

export default RtureTable