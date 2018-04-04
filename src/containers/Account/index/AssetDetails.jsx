import React,{ Component } from 'react'
import echarts from 'echarts/lib/echarts'
import Pie from 'echarts/lib/chart/pie'
import Title from 'echarts/lib/component/title'
import Tooltip from 'echarts/lib/component/tooltip'


import {
	Link
} from 'react-router-dom'
import {
	Row,
	Col
} from 'antd'


class AssetDetails extends Component{
	constructor(props){
		super(props)
		this.state={
			investStayCapital:100,
			creditStayCapital:200,
			investStayInterest:600,
			creditStayInterest:900
		}
	}
	componentDidMount() {

		const myChart = echarts.init(document.getElementById('pandectBodyTable'));

		myChart.setOption({
			backgroundColor: '#fff', //图表的配置颜色
			color: ['#fa6c43', '#009dec'], //每一项对应的颜色
			title :{
		      text :'资产明细',
		      textStyle:{
		      	color:'#000',
		      	fontWeight:'normal',
		      },
		      x:'center',
		      y:'center'
		    },
			tooltip : {  //提示框组件
			               show: true,
			               formatter: "{a} <br/>{b} : {c} ({d}%)"  //正则设置格式
			},
		    series : [{
                    name:'资产明细',  //名字--用于tooltip的显示
                    type:'pie',    //类型--饼状图
                    clockWise:false,   //饼图的扇区是否是顺时针排布。
                    radius : [70,88], //饼图的半径，数组的第一项是内半径，第二项是外半径。 内半径是0就是一个真正的饼
                    center:['50%', '50%'], //饼图片的中心
                    hoverAnimation: true, //是否开启 hover 在扇区上的放大动画效果。
                    zlevel:2,
                    data:[  //系列中的数据内容数组
                        {
                            value:this.state.investStayCapital + this.state.investStayInterest,     //数据值总的值
                            name:'承接债权'  //数据项名称。
                        },
                        {
                            value:this.state.creditStayCapital + this.state.creditStayInterest,     //剩下的值
                            name:'投资散标'
                        }
                    ],
                }]
		});

	}
	render(){
		return(
			<div className="pandect">
			    <div className="title">
			    	<Row>
			    		<Col span={4}>
							<h1>资产详情</h1>
			    		</Col>
			    		<Col span={14}>
			    			
			    		</Col>
			    		<Col span={6} className="classfix">
			    			<span>按项目类型</span>
			    			<span><Link to='/account/detail'>资产明细</Link></span>
			    			<span><Link to='/account/logs'>交易记录</Link></span>
			    		</Col>
			    	</Row>
			    </div>
			    <div className="body">
			    	<Row>
			    		<Col span={10}>
			    			<div id="pandectBodyTable" style={{width:'360px',height:'320px'}}></div>
			    		</Col>
			    		<Col span={14}>
			    			<div className="table">
			    				<Row>
			    					<Col span={9}>
			    						<h3>项目类型</h3>
			    						<p><span className="oval-1"></span>投资散标</p>
			    						<p><span className="oval-2"></span>承接债权</p>
			    					</Col>
			    					<Col span={8}>
			    						<h3>待收本金</h3>
			    						<p>{this.state.investStayCapital}元</p>
			    						<p>{this.state.creditStayCapital}元</p>
			    					</Col>
			    					<Col span={7}>
			    						<h3>待收利息</h3>
			    						<p className="origin">{this.state.investStayInterest}元</p>
			    						<p className="origin">{this.state.creditStayInterest}元</p>
			    					</Col>
			    				</Row>
			    			</div>
			    		</Col>
			    	</Row>
			        <h3 className='footer'>具体收益以实际收益为准</h3>
			    </div>
			</div>
		)
	}
}

export default AssetDetails