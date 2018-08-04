import React from 'react'
import { render } from 'react-snapshot'
import { HashRouter as Router } from 'react-router-dom'
import './global.css'
import App from './pages'
import registerServiceWorker from './registerServiceWorker'

render(<Router><App /></Router>, document.getElementById('root'))
registerServiceWorker()
