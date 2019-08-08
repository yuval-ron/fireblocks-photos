import React, {Component} from 'react'
import {connect} from 'react-redux'

import Navbar from './Navbar'
import WelcomePage from './WelcomePage'
import {loadPhotos} from '../../photos/actions'
import '../../styles/App.css'

class App extends Component {
  componentDidMount() {
    const {loadPhotos} = this.props

    loadPhotos()
  }

  goToPath = (path) => {
    const {router} = this.props

    router.replace(path)
  }

  render() {
    const {children} = this.props

    return (
      <div className="App">
        <Navbar goToPath={this.goToPath} />
        <div className="pages-container">
          {children ? children : <WelcomePage />
          }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {loadPhotos}

export default connect(null, mapDispatchToProps)(App)

