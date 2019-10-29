import React from 'react'
import {Header} from '../../../components'
import {
  TouchableOpacityHeader,
  ViewWrapper
} from './styled'
function ChangeLanguage(props){
  const {navigation} = props
  return(
    <ViewWrapper>
        <Header navigation={navigation} back title= 'Thay đổi ngôn ngữ'></Header>
    </ViewWrapper>
  )
}
export default ChangeLanguage