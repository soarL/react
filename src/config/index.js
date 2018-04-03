let baseURL,
	ENV = process.env.NODE_ENV,
	web={
		main:'https://www.91hc.com',
		user:'http://user.91hc.com'
	}

if(ENV==="development"){
	// 开发环境中使用代理避免跨域问题
	baseURL=''
}else{
	// 生产环境中真实地址
	baseURL='https://www.91hc.com'
}

let authKey = "abcdeft12345"

export {
	baseURL,
	web,
	authKey
}