import Server from '@/api/server'
import {
	message,
} from 'antd'
import storage from '@/api/localStorage'

class User extends Server{
	async userLogin(params,history){
		let data = await this.POST('/login',params)
		if(data.status===1){
			if(params.remember){
				storage.setTimer(7*24*60*60*1000)
			}
			message.success(data.msg)
			storage.add(data.data)
			setTimeout(()=>{
				history.push('/account/index')
			},1000)
		}else{
			message.error(data.msg)
		}
	}

	async userRegister(params,history){
		let data = await this.POST('/register',params)
		if(data.status===1){
			message.success(data.msg)
			setTimeout(()=>{
				history.push('/login/login')
			},1000)
		}else{
			message.error(data.msg)
		}
	}

	async userForget(params,history){
		let data = await this.POST('/forgetLoginpass',params)
		if(data.status===1){
			message.success(data.msg)
			setTimeout(()=>{
				history.push('/login/login')
			},1000)
		}else{
			message.error(data.msg)
		}
	}
}

export default new User()