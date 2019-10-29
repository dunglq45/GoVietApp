import React from 'react'
import {View, Text} from 'react-native'
import {Header} from '../../../components'
import {
  ViewWrapper
} from './styled'
function privacyPolicy(props){
  const {navigation} = props
  return(
    <ViewWrapper>
      <Header navigation= {navigation} back title= 'Chính sách bảo mật'></Header>
      <Text>privacyPolicy</Text>
    </ViewWrapper>
  )
}
export default privacyPolicy