import React,{Component}  from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../../utils/Colors'
import {
  ViewItem,
  ViewIcon,
  TextItem,
  View,
  ViewWrapper,
  TextHeader,
  ViewHeader,
  ViewLogOut,
  TextLogOut
} from './styled'

function Profile(){
  function RenderItem(IconName, text, onPress){
    return(
      <ViewItem>
        <ViewIcon onPress= {() => {onPress()}} >
          <Icon name={IconName} size={25} color={Colors.black_1}></Icon>
          <TextItem>{text}</TextItem>
        </ViewIcon>
        <View></View>
      </ViewItem>
    )
  }
  function onPress(){
  
  }
  return(
    <ViewWrapper>
      <TextHeader>Tài khoản</TextHeader>
      <ViewHeader></ViewHeader>
      {RenderItem('sale','Nhập mã khuyến mại',onPress)}
      {RenderItem('format-letter-case','Thay đổi ngôn ngữ', onPress)}
      {RenderItem('text-subject','Điều khoản dịch vụ', onPress)}
      {RenderItem('shield-key','Chính sách bảo mật', onPress)}
      {RenderItem('text-subject','Quy chế', onPress)}
      {RenderItem('star','Đánh giá ứng dụng GoViet', onPress)}
      <ViewLogOut>
        <TextLogOut>Đăng xuất</TextLogOut>
      </ViewLogOut>
    </ViewWrapper>
  )
}
export default Profile