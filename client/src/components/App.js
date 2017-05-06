import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* * Utils * */
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Redirect } from 'react-router-dom'

/* * Actions * */
// import { setUser } from '../actions/userActions'

/* * Components * */
import HomePage from './HomePage/HomePage'

const history = createHistory()

export default class App extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path='/' component={HomePage} />
            <Route path='/index' component={HomePage} />
          </div>
        </ConnectedRouter>
      </div>
    )
  }
}

// const mapStateToProps = ({ user, games }) => {
//   return { user, games }
// }

// export default connect(mapStateToProps, { setUser })(App)
