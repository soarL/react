import React from 'react'
import ReactDOM from 'react-dom'
import { Route , Switch ,BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '@/App'
import store from '@/store.js'
import Loadable from 'react-loadable'

import {
  loading,
} from '@/components'

const AsyncLogin = Loadable({
  loader: () => import('@/containers/Login'),
  loading: loading
})

ReactDOM.render(
	<Provider store = { store } >
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={ AsyncLogin }></Route>
				<Route path="/" component={ App }></Route>
			</Switch>			
		</BrowserRouter>
	</Provider>,
		document.getElementById('root')
)