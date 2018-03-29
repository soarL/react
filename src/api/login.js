import Server from '@/api/server'
import {
	message
} from 'antd'
import { web } from '@/config'

class Login extends Server{
	async loginOut(){
		let data = await this.POST('/api/login/out')
		if(data.status==='1'){
			window.location.href= web.user + "/login?login" 
		}else{
			message.msg(data.msg)
		}
	}
}

export default new Login()