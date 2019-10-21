import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../../utils/Colors'
import {
  ViewWrapper,
  ViewHeader,
  TextHeader,
  TouchableOpacityHeader,
  View,
  ImageWrapper,
  TextWrapper,
  TextBottom,
  ViewBottom
} from './styled'

function Order(){
  return(
    <ViewWrapper>
      <ViewHeader>
        <TextHeader>Đơn hàng hiện tại</TextHeader>
        <TouchableOpacityHeader>
          <Icon name= 'calendar-clock' size= {30} color={Colors.black_1}></Icon>
        </TouchableOpacityHeader>
      </ViewHeader>
      <View></View>
      <ImageWrapper source= {require('../../../assets/imageMain/logo.png')}></ImageWrapper>
      <ViewBottom>
        <TextWrapper>Hãy đặt hàng GoViet!</TextWrapper>
        <TextBottom>Các tài xế của chúng tôi rất vui{"\n"} lòng được phục vụ bạn.</TextBottom>
      </ViewBottom>
    </ViewWrapper>
  )
}
export default Order