/**
 * Storage 本地化存储类
 * add 添加属性，和改一起
 * del 删除属性，
 * delAll 删除全部，
 * get 查
 */ 
import {
	message
} from 'antd'

class Storage {
	constructor(){
		if(!window.localStorage){
			message.error('您的浏览器不支持Storage!会导致本站功能无法正常使用！建议使用Chrome浏览器。或者其他浏览器！')
		}else{
			this.Storage = window.localStorage
		}
	}
	add(data={}){
		for(let key in data){
			this.Storage.setItem(key,data[key])
		}
	}
	del(key){
		this.Storage.removeItem(key)
	}
	delAll(){
		this.Storage.clear()
	}
	get(key){
		return this.Storage.getItem(key)
	}
}

export default new Storage()