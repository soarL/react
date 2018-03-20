import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { 
	Button,
	Icon,
	Menu,
	Dropdown,
	Pagination,
	message,
} from 'antd'

import './index.less'

class Antd extends Component{
	componentWillMount() {
		message.info('你好')
	}
	state = {
		iconLoading:false
	}
	enterIconLoading(){

		this.setState(()=>{
			return{
				iconLoading:this.state.iconLoading ? false : true
			}
		})

		setTimeout(()=>{
			this.setState({
				iconLoading:false
			})
		},1000)
	}
	onchange=(pageNumber)=>{
		console.log(pageNumber)
	}



	render() {

		const menu = (
		  <Menu>
		    <Menu.Item key="1">1st item</Menu.Item>
		    <Menu.Item key="2">2nd item</Menu.Item>
		    <Menu.Item key="3">3rd item</Menu.Item>
		  </Menu>
		)

		const info = () => {
		  message.info('充值成功!你很牛逼');
		}

		return (
			<div className='antds'>
				<div>
					hello antd button
					<hr/>
					<p>
						<Button type="primary" size="large"> btn-primary large</Button>
						<Button type="primary" size="small"> btn-primary small </Button>
						<Button type="primary"> btn-primary</Button>
						<Button> btn-Default </Button>
						<Button type="dashed"> btn-dashed </Button>
						<Button type="danger"> btn-danger </Button>
						<Button type="dashed" disabled> btn-dashed disabled</Button>
					</p>
					<p>
						<Button type="primary" shape="circle" icon="download"/>
						<Button type="primary" icon="download">Download</Button>
						<Button type="primary">
						    <Icon type="left" />Backward
						</Button>
						<Button type="primary">
						    Forward<Icon type="right" />
						</Button>
					</p>
					<p>
						<Button type="primary" loading>Loading</Button>

						<Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading.bind(this)}>
						          Click me!
						</Button>
						<Button type="primary" shape="circle" loading />
					</p>

					<Dropdown overlay={menu} trigger={['click']}>
					  <Button>
					    Actions <Icon type="down" />
					  </Button>
					</Dropdown>
				</div>
				
				<div>
					hello antd Pagination
					<hr/>
					<Pagination defaultCurrent={1} total={50}/>
					<Pagination defaultCurrent={5} total={500}/>
					<Pagination defaultCurrent={5} total={500} showSizeChanger/>
					<Pagination defaultCurrent={5} total={500} showQuickJumper onChange={this.onchange}/>

					<Pagination defaultCurrent={1} total={50} size="small"/>
					<Pagination defaultCurrent={5} total={500} size="small"/>
					<Pagination defaultCurrent={5} total={500} showSizeChanger size="small"/>
					<Pagination defaultCurrent={5} total={500} showQuickJumper onChange={this.onchange} size="small"/>
				</div>
				
				<div>
					hello antd message
					<hr/>
					<Button type="primary" onClick={info}>Display normal message</Button>
				</div>
			</div>
		)
	}
} 
    
const mapStateToProps = (state)=>{
	return state
}

export default connect(mapStateToProps,{

})(Antd)