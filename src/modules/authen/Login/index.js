import React from 'react'
import {View} from 'react-native'
import {
  LoginWrapper,
  ImageHeader,
  ImageContent,
  TouchableOpacityLogin,
  ViewLogin,
  TextWrapper,
  TextLogin,
  TextFooter,
  ViewFooter,
  TouchableOpacityFooter,
  Text
} from './styled'

function Login(){
  return(
    <LoginWrapper>
      <ImageHeader source= {require('../../../assets/imageMain/logo.png')} ></ImageHeader>
      <ImageContent source={require('../../../assets/imageMain/logo_1.jpeg')}></ImageContent>
      <TextWrapper>Chào mừng đến với GoViet!</TextWrapper>
      <ViewLogin>
        <TouchableOpacityLogin>
          <TextLogin>ĐĂNG NHẬP</TextLogin>
        </TouchableOpacityLogin>
        <TouchableOpacityLogin>
          <TextLogin>ĐĂNG KÍ</TextLogin>
        </TouchableOpacityLogin>
      </ViewLogin>
      <ViewFooter>
        <TextFooter>Khi đăng kí, đăng nhập, tôi đã đồng ý với tôi đã đồng ý với tôi đã đồng ý với</TextFooter>
        <TouchableOpacityFooter>
          <Text> điều khoản dịch vụ</Text>
        </TouchableOpacityFooter>
        <TextFooter> và</TextFooter>
        <TouchableOpacityFooter>
          <Text>chính sách bảo mật.</Text>
        </TouchableOpacityFooter>
      </ViewFooter>
    </LoginWrapper>
  )
}
export default Login