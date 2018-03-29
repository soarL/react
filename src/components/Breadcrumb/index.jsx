import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './index.less'

import {
	Breadcrumb
} from 'antd'

import {
  web
} from '@/config'

import breadcrumbNameMap from '@/config/map'

class Breadcrumbs extends Component{

	render(){

		const pathSnippets = window.location.pathname.split('/').filter(i => i)

		const extraBreadcrumbItems = pathSnippets.map((_, index) => {
		  const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
		  return (
		    <Breadcrumb.Item key={url}>
		      <Link to={url} className={index + 1 === pathSnippets.length ? "fonc now" :"fonc"}>
		        {breadcrumbNameMap[url]}
		      </Link>
		    </Breadcrumb.Item>
		  )
		})

		const breadcrumbItems = [(
		  <Breadcrumb.Item key="home">
		    <Link to={web.main} className="fonc">首页</Link>
		  </Breadcrumb.Item>
		)].concat(extraBreadcrumbItems)

		return(
			<div className="Breadcrumb">
				<div className="container">
				  <Breadcrumb>
					   {breadcrumbItems}
				  </Breadcrumb>
				</div>
			</div>
		)
	}
}

export default Breadcrumbs