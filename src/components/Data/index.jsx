import React,{ Component } from 'react'

class Data extends Component{
	render(){
		return (
			<div>
				<span className='red-font'>我是Data页面</span>
				<hr/>
				<span>这是通过redux 传来的值 : <span className='red-font'>{ this.props.value}</span></span>
				<button onClick={ this.props.onchange }>点击我获取最新的数据</button>
				<button onClick={this.props.back}>回到初始化状态</button>
			</div>
		)
	}
}

export default Data