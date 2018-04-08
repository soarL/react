import React,{ Component } from 'react'
import {
	Tabs,
	Table
} from 'antd'


const TabPane = Tabs.TabPane


const columnsT = [{
  title: '投资时间',
  dataIndex: 'time',
}, {
  title: '借款编号',
  dataIndex: 'oddNumber',
}, {
  title: '项目类型',
  dataIndex: 'TypeName',
},{
	title:'借款金额（元）',
	dataIndex:'oddMoney'
},{
	title:'投资金额（元）',
	dataIndex:'money'
},{
	title:'年化利率',
	dataIndex:'oddReward'
},{
	title:'借款期限',
	dataIndex:'getPeriod'
},{
	title:'投资方式',
	dataIndex:'remark'
},{
	title:'状态',
	dataIndex:'getPRGName'
}]

const columnsH = [{
  title: '投资时间',
  dataIndex: 'time',
}, {
  title: '借款编号',
  dataIndex: 'oddNumber',
}, {
  title: '项目类型',
  dataIndex: 'TypeName',
},{
	title:'借款金额（元）',
	dataIndex:'oddMoney'
},{
	title:'投资金额（元）',
	dataIndex:'money'
},{
	title:'年化利率',
	dataIndex:'oddReward'
},{
	title:'借款期限',
	dataIndex:'getPeriod'
},{
	title:'投资方式',
	dataIndex:'remark'
},{
	title:'状态',
	dataIndex:'getPRGName'
}]

const columnsY = [{
  title: '投资时间',
  dataIndex: 'time',
}, {
  title: '借款编号',
  dataIndex: 'oddNumber',
}, {
  title: '项目类型',
  dataIndex: 'TypeName',
},{
	title:'借款金额（元）',
	dataIndex:'oddMoney'
},{
	title:'投资金额（元）',
	dataIndex:'money'
},{
	title:'年化利率',
	dataIndex:'oddReward'
},{
	title:'借款期限',
	dataIndex:'getPeriod'
},{
	title:'投资方式',
	dataIndex:'remark'
},{
	title:'状态',
	dataIndex:'getPRGName'
}]


const dataT = [{
  key:'1',
  time: '12555',
  oddNumber: 'John Brown',
  TypeName: '￥300,000.00',
  oddMoney: 'New York No. 1 Lake Park',
  money: 'New York No. 1 Lake Park',
  oddReward: 'Na',
  getPeriod: 'zxc',
  remark: 'zxc',
  getPRGName: 'zxc',
}]

const dataH = [{
  key:'1',
  time: '12555',
  oddNumber: 'John Brown',
  TypeName: '￥300,000.00',
  oddMoney: 'New York No. 1 Lake Park',
  money: 'New York No. 1 Lake Park',
  oddReward: 'Na',
  getPeriod: 'zxc',
  remark: 'zxc',
  getPRGName: 'zxc',
}]

const dataY = [{
  key:'1',
  time: '12555',
  oddNumber: 'John Brown',
  TypeName: '￥300,000.00',
  oddMoney: 'New York No. 1 Lake Park',
  money: 'New York No. 1 Lake Park',
  oddReward: 'Na',
  getPeriod: 'zxc',
  remark: 'zxc',
  getPRGName: 'zxc',
}]


class Tables extends Component{
	callback = e=>{
		
	}
	render(){
		return(
			<div className='table'>
				<Tabs defaultActiveKey="1" onChange={this.callback} tabBarStyle={{padding:'10px 20px',fontWeight:'bold'}}>
				    <TabPane tab="投标中" key="1">
					    <Table
					        columns={ columnsT }
					        dataSource={ dataT }
					        bordered
					      />
				    </TabPane>
				    <TabPane tab="还款中" key="2">
				    	<Table
				    	    columns={ columnsH }
				    	    dataSource={ dataH }
				    	    bordered
				    	  />
				    </TabPane>
				    <TabPane tab="已结清" key="3">
				    	<Table
				    	    columns={ columnsY }
				    	    dataSource={ dataY }
				    	    bordered
				    	  />
				    </TabPane>
				 </Tabs>
			</div>
		)
	}
}

export default Tables