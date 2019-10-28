import React, { useEffect, useState, createRef } from 'react'
import {Header} from '../../../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  ViewWrapper,
  ImageBackground,
  TextContent,
  ViewFooter,
  TextInput,
  TouchableOpacityFooter,
  TextFooter,
  View
  
} from './styled'
import {getUserInfo} from '../reducer'
function ScreenLogin(props){
  const {
    navigation,
    getUserInfo,
    authen
  } = props
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() =>{
    getUserInfo()
  },[])
  function CheckUserInfo(){
    var found = authen.userInfo.find(function(e) {
      return e.userName=== userName && e.password===password
    });
    if(found){
      navigation.navigate('App')
      console.log('login success')
    } else {
      console.log('login failure')
    }
  }

  return(
    <ViewWrapper>
      <Header navigation={navigation} back></Header>
      <ImageBackground source= {{uri : 'https://atasouthport.com/wp-content/uploads/2017/04/default-image.jpg'}}></ImageBackground>
      <TextContent>Nhập tài khoản đã đăng kí để đăng nhập</TextContent>
      <ViewFooter>
          <TextInput placeholder= 'Tên đăng nhập'
          onChangeText = {(text) =>{
            setUserName(text)
          }}
          autoCapitalize = 'none'
          autoCorrect = {false}
          ></TextInput>
          <View></View>
          <TextInput placeholder= 'password'
          onChangeText = {(text) =>{
            setPassword(text)
          }}
          autoCapitalize = 'none'
          autoCorrect = {false}
          ></TextInput>
          <View></View>
      </ViewFooter>
      <TouchableOpacityFooter onPress={() => {CheckUserInfo()} }>
        <TextFooter>TIẾP TỤC</TextFooter>
      </TouchableOpacityFooter>
    </ViewWrapper>
  )
}
const mapStateToProps = state => ({
  authen : state.authen
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getUserInfo,
  }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenLogin)