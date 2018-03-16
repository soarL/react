import React from 'react'
import { IndexLink, Link } from 'react-router'
import './index.less'

export const Header = () => (
  <div>
    <h1>React Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' · '}
  </div>
)

export default Header
