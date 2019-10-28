import { useEffect } from 'react'
import Routes from '../../utils/Routes'
import { connect } from 'react-redux'
import { Alert } from 'react-native'

function ErrorBoundary (props) {
  const { navigation, error, children } = props

  function showAlert () {
    if (error.message) {
      setTimeout(() => {
        Alert.alert(null, error.message, [{ text: 'OK' }], {
          cancelable: false
        })
      }, 1000)
    }
  }

  function navigateToAuthen () {
    if (error.expired) navigation.navigate(Routes.authen)
  }

  useEffect(navigateToAuthen, [error.expired])
  useEffect(showAlert, [error.message])

  return children
}

const mapStateToProps = state => ({
  error: state.error
})

export default connect(
  mapStateToProps,
  null
)(ErrorBoundary)
