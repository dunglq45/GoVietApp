/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import NavigationState from './src/app/navigators'
import styled from 'styled-components'
function App () {
  return(
    <ViewWrap>
      <NavigationState/>
    </ViewWrap>
  )
}
const ViewWrap = styled.View`
flex: 1
`
export default App;
