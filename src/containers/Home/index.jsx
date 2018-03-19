import React,{ Component } from 'react'
import { connect } from 'react-redux'
import homeApi from '@/api/home'
import { onchange , back } from '@/actions/home'

import './index.less'

class Home extends Component{
	async hhs(){
		let aff = await homeApi.getData()
		this.props.onchange(aff)
	}
	render(){
		return(
			<div>
				这是home页面
				<hr/>
				<span className='red-font'>我是Data页面</span>
				<hr/>
				<span>这是通过redux 传来的值 : <span className='red-font'>{ this.props.homeReducer.value }</span></span>
				<button onClick={ this.hhs.bind(this) }>点击我获取异步的数据</button>
				<button onClick={this.props.back.bind(this,'xxxxxx')}>点我获取同步的数据</button>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return state
}

export default connect(mapStateToProps,{
	onchange,
	back
})(Home)