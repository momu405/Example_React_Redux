import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import todoApp from './reducers'
import App from './containers/App'
import './index.css'
import './App.css'
import 'antd/dist/antd.css'

import registerServiceWorker from './registerServiceWorker'

const store = createStore(todoApp)

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
