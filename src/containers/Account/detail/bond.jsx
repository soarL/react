import React, { Component } from 'react'
import {
	Row,
	Col
} from 'antd'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'

class Bond extends Component{
	componentDidMount() {

		const benjin = echarts.init(document.getElementById('benjin'));

		benjin.setOption({
			backgroundColor: '#fff', //图表的配置颜色
			color: ['#fa6c43', '#009dec'], //每一项对应的颜色

			tooltip : {  //提示框组件
			               show: true,
			               formatter: "{a} <br/>{b} : {c} ({d}%)"  //正则设置格式
			},
		    series : [{
                    name:'资产明细',  //名字--用于tooltip的显示
                    type:'pie',    //类型--饼状图
                    clockWise:false,   //饼图的扇区是否是顺时针排布。
                    radius : [0,65], //饼图的半径，数组的第一项是内半径，第二项是外半径。 内半径是0就是一个真正的饼
                    center:['50%', '50%'], //饼图片的中心
                    hoverAnimation: true, //是否开启 hover 在扇区上的放大动画效果。
                    zlevel:2,
                    data:[  //系列中的数据内容数组
                        {
                            value:this.props.data.benjin.fandai,     //数据值总的值
                            name:'承接债权'  //数据项名称。
                        },
                        {
                            value:this.props.data.benjin.chedai,     //剩下的值
                            name:'投资散标'
                        }
                    ],
                    label:{
                    	show:false
                    }
                }]
		});


		const interest = echarts.init(document.getElementById('interest'));

		interest.setOption({
			backgroundColor: '#fff', //图表的配置颜色
			color: ['#fa6c43', '#009dec'], //每一项对应的颜色
			tooltip : {  //提示框组件
			               show: true,
			               formatter: "{a} <br/>{b} : {c} ({d}%)"  //正则设置格式
			},
		    series : [{
                    name:'资产明细',  //名字--用于tooltip的显示
                    type:'pie',    //类型--饼状图
                    clockWise:false,   //饼图的扇区是否是顺时针排布。
                    radius : [0,65], //饼图的半径，数组的第一项是内半径，第二项是外半径。 内半径是0就是一个真正的饼
                    center:['50%', '50%'], //饼图片的中心
                    hoverAnimation: true, //是否开启 hover 在扇区上的放大动画效果。
                    zlevel:2,
                    data:[  //系列中的数据内容数组
                        {
                            value:this.props.data.interest.fandai,     //数据值总的值
                            name:'承接债权'  //数据项名称。
                        },
                        {
                            value:this.props.data.interest.chedai,     //剩下的值
                            name:'投资散标'
                        }
                    ],
                    label:{
                    	show:false
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
		});

	}
	render(){
		return(
			<div className='invest'>
				<Row className='header'>
					<Col span={12}>
						总待收本金: <span>￥{this.props.data.benjin.fandai + this.props.data.benjin.chedai}</span>元
					</Col>
					<Col span={12}>
						总待收利息: <span>￥{this.props.data.interest.fandai + this.props.data.interest.chedai}</span>元
					</Col>
				</Row>	
				<Row className='body'>
					<Col span={12}>
						<Row>
							<Col span={12}>
								<div id='benjin' style={{height:200}}></div>
							</Col>
							<Col span={12} className='legend'>
								<p><span className='or'></span>房优贷待收本金:￥{this.props.data.benjin.fandai}元</p>
								<p><span></span>车险优贷待收本金:￥{this.props.data.benjin.chedai}元</p>
							</Col>
						</Row>
					</Col>
					<Col span={12}>
						<Row>
							<Col span={12}>
								<div id='interest' style={{height:200}}></div>
							</Col>
							<Col span={12} className='legend'>
								<p><span className='or'></span>房优贷待收利息:￥{this.props.data.interest.fandai }元</p>
								<p><span></span>车险优贷待收利息:￥{this.props.data.interest.chedai}元</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Bond