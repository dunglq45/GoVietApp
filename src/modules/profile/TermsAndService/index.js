import React from 'react'
import {View, Text} from 'react-native'
import {Header} from '../../../components'
import {
  ViewWrapper
} from './styled'
function TermsAndService(props){
  const {navigation} = props
  return(
    <ViewWrapper>
      <Header navigation={navigation} back title='Điều khoản và dịch vụ'></Header>
      <Text>TermsAndService</Text>
    </ViewWrapper>
  )
}
export default TermsAndService