import React, { PureComponent } from 'react'
import AppNavbar from './components/layouts/AppNavbar'
import Student from './components/layouts/Student'

import './App.css'

class App extends PureComponent {
  render() {
    return (
      <>
        <AppNavbar />
        
        <Student />
    
      </>
    )
  }
}

export default App
