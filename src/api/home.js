import Server from '@/api/server'

class Home extends Server{
	async getData(){
		let data = await this.axiosPOST('/api/index/article/host',{'limit':3})
		return data
	}
}

export default new Home()