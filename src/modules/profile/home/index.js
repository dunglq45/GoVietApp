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
  TextLogOut,
  ViewItemWrapper
} from './styled'

function Profile(props){
  function RenderItem(IconName, text,SceenName, onPressItem){
    return(
      <ViewItem>
        <ViewIcon onPress= {() => {onPressItem(SceenName)}} >
          <Icon name={IconName} size={25} color={Colors.black_1}></Icon>
          <TextItem>{text}</TextItem>
        </ViewIcon>
        <View></View>
      </ViewItem>
    )
  }
  const {navigation} = props
  const arrayItem = [
    ['sale','Nhập mã khuyến mại','Sale'],
    ['format-letter-case','Thay đổi ngôn ngữ', 'ChangeLanguage'],
    ['text-subject','Điều khoản dịch vụ', 'TermsAndService'],
    ['shield-key','Chính sách bảo mật', 'privacyPolicy'],
    ['text-subject','Quy chế', 'TermsAndService'],
    ['star-outline','Đánh giá ứng dụng GoViet', 'TermsAndService']
  ]
  function onPressItem(SceenName){
    navigation.navigate(SceenName)
  }
  return(
    <ViewWrapper>
      <TextHeader>Tài khoản</TextHeader>
      <ViewHeader></ViewHeader>
      {arrayItem.map(e =>{
        return(
          <ViewItemWrapper>
            {RenderItem(e[0], e[1], e[2],onPressItem )}
          </ViewItemWrapper>
        )
      })}
      <ViewLogOut onPress= {() => navigation.navigate('AuthenticationLogin')}>
        <TextLogOut>Đăng xuất</TextLogOut>
      </ViewLogOut>
    </ViewWrapper>
  )
}
export default Profile