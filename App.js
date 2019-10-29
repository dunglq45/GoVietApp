/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow type
 */

import React from 'react'
import styled from 'styled-components'

import { Provider } from 'react-redux'

import NavigationState from './src/app/navigators'
import configureStore from './src/app/store'
import NavigationService from './src/app/services'

const store = configureStore()

function App () {
  return (
    <Provider store={store}>
      <Wrapper>
        <NavigationState
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </Wrapper>
    </Provider>
  )
}

const Wrapper = styled.View`
  flex: 1
`

export default App
