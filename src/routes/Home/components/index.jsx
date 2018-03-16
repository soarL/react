import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './index.less'

export const HomeView = () => (
  <div>
    <h4>This is a duck, because Redux!</h4>
    <img className='duck' src={DuckImage} alt="实验" />
  </div>
)

export default HomeView
