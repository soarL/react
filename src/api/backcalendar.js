import Server from '@/api/server'
import storage from '@/api/localStorage'
import {
	message
} from 'antd'


class BackCalendar extends Server{
	async getMonthData(params){
		params.userId = storage.get('userId')
		params.isAll = 1
		params.type = 'new'
		let data = await this.GET('/repayments',params)
		if(data.status===1){
			return data.data
		}else{
			message.error(data.msg)
		}
	}
	async getDayData(params){
		params.userId = storage.get('userId')
		let data = await this.GET('/repaymentOdds',params)
		if(data.status===1){
			return data.data
		}else{
			message.error(data.msg)
		}
	}
}

export default new BackCalendar()