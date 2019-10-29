import React, { useEffect, useState, createRef } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../../utils/Colors'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getContentProfile} from '../reducer'
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
  const {
    navigation,
    getContentProfile,
    profile
  } = props
  useEffect(() =>{
    getContentProfile()
  },[])
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
  // const arrayItem = [
  //   ['sale','Nhập mã khuyến mại','Sale'],
  //   ['format-letter-case','Thay đổi ngôn ngữ', 'ChangeLanguage'],
  //   ['text-subject','Điều khoản dịch vụ', 'TermsAndService'],
  //   ['shield-key','Chính sách bảo mật', 'privacyPolicy'],
  //   ['text-subject','Quy chế', 'TermsAndService'],
  //   ['star-outline','Đánh giá ứng dụng GoViet', 'TermsAndService']
  // ]
  const arrScreenName = [
    ["1", "Sale"],
    ["2", "ChangeLanguage"],
    ["3", "TermsAndService"],
    ["4", "privacyPolicy"],
    ["5", "TermsAndService"],
    ["6", "TermsAndService"]
  ]
  function onPressItem(SceenName){
    navigation.navigate(SceenName)
  }
  return(
    <ViewWrapper>
      <TextHeader>Tài khoản</TextHeader>
      <ViewHeader></ViewHeader>
      {arrScreenName.map((e, i) => {
        let obj = profile.ContentProfile.find(element => {
          return e[0] === element.id
        })
        if(obj){
          console.log(obj)
          return(
            <ViewItemWrapper key = {i}>
              {RenderItem(obj.IconName, obj.Text,e[1],onPressItem )}
            </ViewItemWrapper>
          )
        }
      })  
      }
      <ViewLogOut onPress= {() => navigation.navigate('AuthenticationLogin')}>
        <TextLogOut>Đăng xuất</TextLogOut>
      </ViewLogOut>
    </ViewWrapper>
  )
}
const mapStateToProps = state => ({
  profile : state.profile
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getContentProfile,
  }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)