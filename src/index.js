import React from 'react'
import { render } from 'react-dom'

import App from '_views/app'

import './bootstrap'

const root = () => {
  render(<App />, document.getElementById('root'))
}

root()
