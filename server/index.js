const express = require('express')
const app = express()

//返回数据处理
function msg(status,info,data){
	data = data || {};
	return {
		status,
		info,
		data
	}
}


app.post('/api/host', function(req, res){
  res.send({data:'hello world'})
})

app.post('/api/login/out', function(req, res){
  res.send(msg("1","退出成功"))
})

app.post('/api/user/info', function(req, res){
	let data={
		phone:'1377477057'
	}
  res.send(msg("1","退出成功",data))
})

app.get('/api', function(req, res){
  res.send({data:'hello worxxxld'})
})

app.get('/api/math', function(req, res){
	let data = req.query
  res.send(data)
})


app.listen(3001)