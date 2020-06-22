import '@babel/polyfill'
import { ThemeProvider } from 'styled-components'

import React from 'react'
import ReactDom from 'react-dom'
// import { Provider } from 'react-redux'
import App from './App'

import * as theme from './styles/theme'
import { GlobalStyle } from './styles/global'
// import store from './store'

const root = document.getElementById('app')
ReactDom.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  root,
)
