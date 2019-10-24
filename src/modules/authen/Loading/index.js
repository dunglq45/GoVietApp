import React from 'react'
import {View, Text} from 'react-native'
import {
  ViewWrapper,
  ImageWrapper
} from './styled'

function Loading(){
  return(
    <ViewWrapper>
      <ImageWrapper source= {{uri: 'https://advertisingvietnam.com/wp-content/uploads/2018/12/Goviet-logo-min.png'}}></ImageWrapper>
    </ViewWrapper>
  )
}
export default Loading