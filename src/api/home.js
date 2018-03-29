import Server from '@/api/server'

class Home extends Server{
	async getData(){
		let data = await this.POST('/api/host')
		return data
	}
	async getMath(){
		let data = await this.GET('/api/math',{"xx":'123456789',"xasx":'xxxx'})
		return data
	}
}

export default new Home()