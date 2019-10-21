import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFood from 'react-native-vector-icons/MaterialCommunityIcons'
import IconSend from 'react-native-vector-icons/Entypo'
import Colors from '../../../utils/Colors' 
import {
  MainWrapper,
  ImageLogo,
  ViewHeader,
  ImageTouchableOpacity,
  ViewWraper,
  TextImage,
  ViewRender,
  ImageBackground,
  TextRender,
  TouchableOpacity,
  TextGoFood,
  ViewGoFood,
  TextFood,
  TouchableOpacityFood,
  TextWrapper,
  ViewRenderFood,
  ImageFood,
  TextRenderFood,
  ScrollViewFood,
  ViewBanner,
  ViewBottom
} from './styled'

function RenderImage(uri, text, onPress){
  return (
    <ViewRender onPress = {() => {onPress()}}>
      <ImageBackground source= {{uri: uri}}>
        <TouchableOpacity>
          <TextRender>{text}</TextRender>
        </TouchableOpacity>
      </ImageBackground>
  </ViewRender>
  )
}
function onPress(){

}
function RenderFood(uri, text, onPress){
  return(
    <ViewRenderFood onPress= {() => {onPress()}}>
      <ImageFood source= {{uri: uri}}></ImageFood>
      <TextRenderFood>{text}</TextRenderFood>
    </ViewRenderFood>
  )
}
function Main(){
  return(
    <MainWrapper showsVerticalScrollIndicator = {false}>
      <ImageLogo source= {require('../../../assets/imageMain/logo.png')}></ImageLogo>
      <ViewHeader>
        <ImageTouchableOpacity>
            <Icon name= 'motorbike' size= {30} color= {Colors.green_2}></Icon>
        </ImageTouchableOpacity>
        <ImageTouchableOpacity>
            <IconFood name= 'bowl' size= {30} color= {Colors.red_1}></IconFood>
        </ImageTouchableOpacity>
        <ImageTouchableOpacity>
            <IconSend name= 'box' size= { 30} color= {Colors.yellow_1}></IconSend>
        </ImageTouchableOpacity>
      </ViewHeader>
      <ViewWraper style={{}}>
        <TextImage>GO-BIKE</TextImage>
        <TextImage>GO-FOOD</TextImage>
        <TextImage>GO-SEND</TextImage>
      </ViewWraper>
      {RenderImage('https://i.ytimg.com/vi/6qurkGQ7Bf0/maxresdefault.jpg','Đặt món ngay',onPress)}
      {RenderImage('https://i.ytimg.com/vi/6qurkGQ7Bf0/maxresdefault.jpg','Đặt chuyến',onPress)}
      <TextGoFood>GO-FOOD</TextGoFood>
      <ViewGoFood>
        <TextFood>Khám phá món ăn</TextFood>
        <TouchableOpacityFood>
          <TextWrapper>Xem tất cả</TextWrapper>
        </TouchableOpacityFood>
      </ViewGoFood>
      <ViewBanner>
        <ScrollViewFood scrollToOverflowEnabled horizontal = {true} showsHorizontalScrollIndicator = {false} contentContainerStyle={{ paddingBottom: 30 }}>
          {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW','Cơm và sôi',onPress)}
          {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW','Món nước',onPress)}
          {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW','Trà sữa và trà',onPress)}
          {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW','Bánh mì',onPress)}
          {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW','Bánh mì',onPress)}
          {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW','Bánh mì',onPress)}
        </ScrollViewFood>
      </ViewBanner>
      <ViewBottom>
        {RenderImage('https://i.ytimg.com/vi/6qurkGQ7Bf0/maxresdefault.jpg','Đặt món ngay',onPress)}
        {RenderImage('https://i.ytimg.com/vi/6qurkGQ7Bf0/maxresdefault.jpg','Đặt món ngay',onPress)}
      </ViewBottom>
    </MainWrapper>
  )
}
export default Main