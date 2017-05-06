import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* * Styles * */
// import style from './userHomePage-css'

export default class HomePage extends Component {
  constructor () {
    super()
  }

  componentDidMount () {

  }

 
  render () {
    return (
      <h1>HomePage</h1>
    );
  }
}

// HomePage.contextTypes = {
//   router: PropTypes.object
// }

// Redux: 
// const mapStateToProps = ({ user }) => {
//   return { user }
// }
// export default connect(mapStateToProps, null)(UserHomePage)
