import App from 'App'
import GlobalStyle from 'GlobalStyles'
import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
