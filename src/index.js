import React from 'react'
import ReactDOM from 'react-dom'
import { Route , Switch ,BrowserRouter } from 'react-router-dom'
import App from '@/App'
import Loadable from 'react-loadable'
import 'moment/locale/zh-cn'

import {
  loading,
} from '@/components'

const AsyncLogin = Loadable({
  loader: () => import('@/containers/Login'),
  loading: loading
})

ReactDOM.render(
		<BrowserRouter>
				<Switch>
					<Route path="/login" component={ AsyncLogin }></Route>
					<Route path="/" component={ App }></Route>
				</Switch>			
		</BrowserRouter>,
	document.getElementById('root')
)