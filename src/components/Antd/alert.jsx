import React,{ Component } from 'react'
import { 

	message,
	Alert as Alertantd,
	Badge,
	Icon,
	Button,
} from 'antd'
import './index.less'

const ButtonGroup = Button.Group;

class Alert extends Component {
	componentWillMount() {
		message.info('欢迎来到信息提示组件区')
	}
	onClose(e){
		console.log(e)
	}
	render(){
		return(
			<div className="alerts">
				<h2>信息提示</h2>
				<hr/>

				<Alertantd  message="success" type="success" style={{'marginBottom':"10px"}}/>
				<Alertantd  message="error" type="error" style={{'marginBottom':"10px"}}/>
				<Alertantd  message="info" type="info" style={{'marginBottom':"10px"}}/>
				<Alertantd  message="warning" type="warning" style={{'marginBottom':"10px"}}/>

				<Alertantd  message="success" type="success" showIcon style={{'marginBottom':"10px"}}/>
				<Alertantd  message="error" type="error" showIcon style={{'marginBottom':"10px"}}/>
				<Alertantd  message="info" type="info" showIcon style={{'marginBottom':"10px"}}/>
				<Alertantd  message="warning" type="warning" showIcon style={{'marginBottom':"10px"}}/>

				<Alertantd  message="开关闭的closable" type="success" closable onClose={this.onClose} showIcon style={{'marginBottom':"10px"}}/>
				<Alertantd  message="开关闭的closable" type="error" closable onClose={this.onClose} showIcon style={{'marginBottom':"10px"}}/>
				<Alertantd  message="开关闭的closable" type="info" closable onClose={this.onClose} showIcon style={{'marginBottom':"10px"}}/>
				<Alertantd  message="开关闭的closable" type="warning" closable onClose={this.onClose} showIcon style={{'marginBottom':"10px"}}/>

				<Alertantd 
					message="description"
				    description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
				    type="success"
				    closable
				    onClose={this.onClose}
				    showIcon
				    style={{'marginBottom':"10px"}}
  				/>

  				<Alertantd 
					message="description"
				    description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
				    type="error"
				    closable
				    onClose={this.onClose}
				    showIcon
				    style={{'marginBottom':"10px"}}
  				/>
				
  				<Alertantd 
					message="description"
				    description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
				    type="info"
				    closable
				    onClose={this.onClose}
				    showIcon
				    style={{'marginBottom':"10px"}}
  				/>

  				<Alertantd 
					message="description"
				    description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
				    type="warning"
				    closable
				    onClose={this.onClose}
				    showIcon

  				/>

  				<div className="height-20px" />

  				<Badge count={888}>
  				    <a href="javascript:" className="head-example"></a>
  				</Badge>

  				<Badge count={888} overflowCount={10}>
  				    <a href="javascript:" className="head-example"></a>
  				</Badge>

  				<Badge dot>
  				  <Icon type="notification" />
  				</Badge>
  				<Badge dot>
  				  <a href="javascript:">一个链接</a>
  				</Badge>

  				<Badge count={25} />
  				<Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />
  				<Badge count={109} style={{ backgroundColor: '#87d068' }} />

  				<div>
	  				<Badge count={this.state.count}>
			          <a href="#" className="head-example"></a>
			        </Badge>
			        <Badge dot={this.state.show}>
			          <a href="#" className="head-example"></a>
			        </Badge>
			        <div style={{ marginTop: 10 }}>
			          <ButtonGroup>
			            <Button type="ghost" onClick={this.decline}>
			              <Icon type="minus" />
			            </Button>
			            <Button type="ghost" onClick={this.increase}>
			              <Icon type="plus" />
			            </Button>
			          </ButtonGroup>
			          <Button type="ghost" onClick={this.onClick} style={{ marginLeft: 8 }}>
			            切换红点显隐
			          </Button>
			        </div>
  				</div>

			</div>
		)
	}
}

export default Alert