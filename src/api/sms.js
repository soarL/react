import Server from '@/api/server'

class Sms extends Server{
	async forget(params){
		params.msgType = 'forget'
		let data = await this.POST("/sms",params)
		if(data.status===1){
			return "0000"
		}else{
			return data.msg
		}
	}
	async register(params){
		params.msgType = 'register'
		let data = await this.POST("/sms",params)
		if(data.status===1){
			return "0000"
		}else{
			return data.msg
		}
	}
	async forgetPaypass(params){
		params.msgType = 'forgetPaypass'
		let data = await this.POST("/sms",params)
		console.log(data)
	}
	async transfer(params){
		params.msgType = 'transfer'
		let data = await this.POST("/sms",params)
		console.log(data)
	}
	async orderLoan(params){
		params.msgType = 'orderLoan'
		let data = await this.POST("/sms",params)
		console.log(data)
	}
}

export default new Sms()