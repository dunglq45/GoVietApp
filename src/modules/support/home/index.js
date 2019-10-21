import React from 'react'
import Colors from '../../../utils/Colors'
import Icon from 'react-native-vector-icons/Feather'
import IconItem from 'react-native-vector-icons/AntDesign'
import IconGoBike from 'react-native-vector-icons/MaterialCommunityIcons'
import IconGoFood from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  ViewWrapper,
  ViewHeader,
  TextInput,
  ViewRenderItem,
  TouchableOpacityItem,
  View,
  ViewBanner,
  TextItem,

} from './styled'
function RenderItem(text){
  return(
    <ViewRenderItem>
      <TouchableOpacityItem>
        <TextItem>{text}</TextItem>
        <IconItem name= 'right' size= {20} color={Colors.white_3}></IconItem>
      </TouchableOpacityItem>
      <View></View>
    </ViewRenderItem>
  )
}
function Support(){
  return(
    <ViewWrapper>
      <ViewHeader>
        <TextInput placeholder= 'Tìm kiếm câu hỏi tại đây'></TextInput>
        <Icon name= 'search' size= {20} style={{paddingRight: 10}}></Icon>
      </ViewHeader>
      <ViewBanner>
        {RenderItem('GO-BIKE')}
        {RenderItem('GO-FOOD')}
        {RenderItem('GO-SEND')}
        {RenderItem('Tài khoản')}
        {RenderItem('Khác')}
      </ViewBanner>
    </ViewWrapper>
  )
}
export default Support