import React from 'react'
import ReactDOM from 'react-dom'
import { Route , Switch ,BrowserRouter } from 'react-router-dom'
import App from '@/App'
import Loadable from 'react-loadable'
import 'moment/locale/zh-cn'
import moment from 'moment'

import {
  Loading,
} from '@/components'

moment.locale('zh-cn')

const AsyncLogin = Loadable({
  loader: () => import('@/containers/Login'),
  loading: Loading
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