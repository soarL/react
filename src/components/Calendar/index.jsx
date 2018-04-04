import React,{ Component } from 'react'
import './index.less'
import { Calendar, Row , Col ,Tooltip } from 'antd'

class Calendars extends Component{
	render(){
		return(
			<div className="calendar-box">
				<Calendar onSelect={this.props.onSelect} onPanelChange={this.props.onPanelChange} />
				<div className="month-rturne">
					<Row>
						<Col span={12}>
							<p>本月计划回款(元): <span className="monthRturne-1">￥{this.props.monthPlanAmount}<Tooltip title={<div>计划回款本金：{this.props.monthPlanAmount}元<br/>计划回款利息：{this.props.monthInterestAmount}元</div>}><i></i></Tooltip></span></p>
							<p>逾期还款项目(个): 0</p>
						</Col>

						<Col span={12}>
							<p>本月实际回款(元): <span className="monthRturne-1">￥{this.props.monthRealAmount}<Tooltip title={<div>计划回款本金：{this.props.monthRealAmount}元<br/>计划回款利息：{this.props.monthServiceAmount}元</div>} overlayStyle={{width:170}}><i></i></Tooltip></span></p>
							<p>提前还款项目(个): 0</p>
						</Col>

					</Row>
				</div>
			</div>
		)
	}
}

export default Calendars