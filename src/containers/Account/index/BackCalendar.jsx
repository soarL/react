import React,{ Component } from 'react'

import backCalendarAPI from '@/api/backcalendar'
import moment from 'moment'


import {
	Calendar,
	RtureTable
} from '@/components'
import {
	Row,
	Col,
} from 'antd'


class BackCalendar extends Component{
	constructor(props){
		super(props)
		this.state={
			monthPlanAmount:0,
			monthRealAmount:0,
			monthInterestAmount:0,
			monthServiceAmount:0,
			dayAll:0,
			allMoney:0,
			dayList:[]
		}
	}
	componentWillMount() {
		this.onSelect(moment.format('Y-M-D'))
	}

	onSelect = async (value) =>{
		let day = value.format('Y-M-D')
		let data = await backCalendarAPI.getDayData({day})

		if(data.odds.length > 0 ){
			let arr = []
			for(let i = 0 ; i < data.odds.length;i++){
				let obj = {}
				obj.qishu = data.odds[i].oddPeriod
				obj.amount = data.odds[i].money
				obj.status = data.odds[i].status
				obj.title = data.odds[i].oddTitle
				obj.planDate = "123"
				obj.realDate = "123"
				arr.push(obj)
			}
			this.setState({
				dayAll:data.odds.length,
				allMoney:data.allMoney,
				dayList:arr
			})
		}
  	}
	onPanelChange = async (value) => {
		let month = value.month() + 1
		let year = value.year()
		let data = await backCalendarAPI.getMonthData({year,month})

		if(data.repayments.length > 0){

			let monthPlanAmount = 0;
			let monthRealAmount = 0;
			let monthInterestAmount = 0;
			let monthServiceAmount = 0;

			for (let i=0; i<data.repayments.length; i++) {
			    monthPlanAmount += data.repayments[i].oughtMoney;
			    monthRealAmount += data.repayments[i].realMoney;
			    monthInterestAmount += data.repayments[i].interest;
			    monthServiceAmount += data.repayments[i].serviceMoney;
			}
			this.setState({
				monthPlanAmount:monthPlanAmount,
				monthRealAmount:monthRealAmount,
				monthInterestAmount:monthInterestAmount,
				monthServiceAmount:monthServiceAmount,
			})
		}
	}
	render(){
		return(
			<div className="back-calendar">
			    <div className="title">
			    	<Row>
			    		<Col span={4}>
							<h1>资产详情</h1>
			    		</Col>
			    		<Col span={20}>
			    			<ul className="list-inline">
					            <li><span className="oval oval-1"></span>已回款</li>
					            <li><span className="oval oval-2"></span>待回款</li>
					            <li><span className="oval oval-3"></span>逾期还款</li>
					            <li><span className="oval oval-4"></span>提前还款</li>
        					</ul>
			    		</Col>
			    	</Row>
			    </div>
			    <div>
			    	<Row>
			    		<Col span={15}>
			    			<Calendar onSelect = {this.onSelect} onPanelChange={this.onPanelChange} monthPlanAmount={this.state.monthPlanAmount} monthRealAmount={this.state.monthRealAmount} monthInterestAmount={this.state.monthInterestAmount} monthServiceAmount={this.state.monthServiceAmount}/>
			    		</Col>
			    		<Col span={9}>
			    			<RtureTable list={ this.state.dayList } />
			    		</Col>
			    	</Row>
			    </div>
			</div>
		)
	}
}

export default BackCalendar;