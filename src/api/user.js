import Server from '@/api/server'

class User extends Server{
	async userInfo(){
		let data = await this.POST('/api/user/info')
		return data.data
	}
}

export default new User()