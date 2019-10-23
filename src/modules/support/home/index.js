import React from 'react'
import Colors from '../../../utils/Colors'
import Icon from 'react-native-vector-icons/Feather'
import IconItem from 'react-native-vector-icons/AntDesign'
import IconBike from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFood from 'react-native-vector-icons/MaterialCommunityIcons'
import IconSend from 'react-native-vector-icons/Entypo'
import {
  ViewWrapper,
  ViewHeader,
  TextInput,
  ViewRenderItem,
  TouchableOpacityItem,
  View,
  ViewBanner,
  TextItem,
  TouchableOpacitySeach,
  ViewItem,
  ViewIcon
} from './styled'

function Support(){
  function RenderItem(text){
    return(
      <ViewRenderItem>
        <ViewItem>
          <TextItem>{text}</TextItem>
          <IconItem name= 'right' size= {20} color={Colors.white_3}></IconItem>
        </ViewItem>
        <View></View>
      </ViewRenderItem>
    )
  }
  return(
    <ViewWrapper>
      <ViewHeader>
        <TextInput placeholder= 'Tìm kiếm câu hỏi tại đây'></TextInput>
        <TouchableOpacitySeach>
           <Icon name= 'search' size= {20} style={{paddingRight: 10}}></Icon>
        </TouchableOpacitySeach>
      </ViewHeader>
      <ViewBanner>
        <TouchableOpacityItem>
          <IconBike name= 'motorbike' size= {30} color= {Colors.green_2}></IconBike>
          {RenderItem('GO-BIKE')}
        </TouchableOpacityItem>
        <TouchableOpacityItem>
          <IconFood name= 'bowl' size= {30} color= {Colors.red_1}></IconFood>
          {RenderItem('GO-FOOD')}
        </TouchableOpacityItem>
        <TouchableOpacityItem>
          <IconSend name= 'box' size= { 30} color= {Colors.yellow_1}></IconSend>
          {RenderItem('GO-SEND')}
        </TouchableOpacityItem>
        <TouchableOpacityItem style={{paddingLeft: 30}}>
          {RenderItem('Tài khoản')} 
        </TouchableOpacityItem>
        <TouchableOpacityItem style={{paddingLeft: 30}}>
          {RenderItem('Khác')} 
        </TouchableOpacityItem>
      
      </ViewBanner>
    </ViewWrapper>
  )
}
export default Support