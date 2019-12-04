import React, { Component } from 'react'
import BurgerBulder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBulder />
        </Layout>
      </div>
    )
  }
}

export default App
