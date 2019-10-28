// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import NavigationState from './src/app/navigators'
// import styled from 'styled-components'
// function App () {
//   return(
//     <ViewWrap>
//       <NavigationState/>
//     </ViewWrap>
//   )
// }
// const ViewWrap = styled.View`
// flex: 1
// `
// export default App;
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
// import NavigationService from './src/app/services/navigator'

const store = configureStore()

function App () {
  return (
    <Provider store={store}>
      <Wrapper>
        <NavigationState
          // ref={navigatorRef => {
          //   NavigationService.setTopLevelNavigator(navigatorRef)
          // }}
        />
      </Wrapper>
    </Provider>
  )
}

const Wrapper = styled.View`
  flex: 1
`

export default App