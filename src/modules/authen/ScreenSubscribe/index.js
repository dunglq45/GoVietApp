import React from 'react'
import {Header} from '../../../components'
import {
  ViewRapper,
  ViewText,
  Text,
  TextInput,
  View,
  TextHeader,
  ViewFooter,
  TouchableOpacity,
  TextFooter
} from './styled'

function RenderText(content,text){
  return(
    <ViewText>
      <Text>{content}</Text>
      <TextInput placeholder= {text}></TextInput>
      <View></View>
    </ViewText>
  )
}
function ScreenSubscribe(props){
  const {navigation} = props
  return(
    <ViewRapper>
      <Header navigation= {navigation} back></Header>
      <TextHeader>Vui lòng điền một số thông tin dưới đây</TextHeader>
      <ViewFooter>
        {RenderText('Tên đầy đủ', 'Ví dụ Nguyễn Văn A')}
        {RenderText('Địa chỉ Email', 'Ví dụ nguyenvana@email.com')}
        {RenderText('Số điện thoại', 'ví dụ 090xxxxx')}
      </ViewFooter>
      <TouchableOpacity>
        <TextFooter>TIẾP TỤC</TextFooter>
      </TouchableOpacity>
    </ViewRapper>
  )
}
export default ScreenSubscribe