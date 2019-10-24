import React from 'react'
import {View, Text} from 'react-native'
import {
  TouchableOpacityHeader,
  ViewWrapper
} from './styled'
function ChangeLanguage(){
  return(
    <ViewWrapper>
      <TouchableOpacityHeader onPress= {() => goBack()}>
        <Text>ChangeLanguage</Text>
      </TouchableOpacityHeader>
      
    </ViewWrapper>
  )
}
export default ChangeLanguage