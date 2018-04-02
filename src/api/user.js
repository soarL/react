import Server from '@/api/server'

class User extends Server{
	async userLogin(params){

		params = {
			password:'123456',
			username:'13774770527'
		}
		params.sign = this.sign(params)

		let data = await this.POST('/login',params)

		console.log(data)
	}

	async getUserInfo(){
		let data = await this.POST('/api/user/info')
		return data.data
	}
}

export default new User()