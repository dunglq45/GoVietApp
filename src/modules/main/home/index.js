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
  ViewBottom,
  ViewText,
  View
} from './styled'

function Main(props){
  const {navigation} = props
  const arrTextAndFunction = [
    ['Cơm và sôi' , "CallGoFood"],
    ['Món nước', "CallGoFood"],
    ['Trà sữa và trà', 'CallGoFood'],
    ['Bánh mì', 'CallGoFood'],
    ['Bánh mì', 'CallGoFood'],
    ['Bánh mì', 'CallGoFood']
  ]
  const arrTextAndScreen= [
    ['Đặt món ngay','CallGoFood'],
    ['Đặt chuyến','CallGoBike']
  ]
  function onPress(){}
  function onPressMenu(screenName){
    navigation.navigate(screenName)
  }

  function RenderImage(uri, text,screenName,onPressImage){
    return (
      <ViewRender onPress = {() => onPressImage(screenName)}>
        <ImageBackground source= {{uri: uri}}>
        </ImageBackground>
        <ViewText>
          <TextRender>{text}</TextRender>
        </ViewText>
    </ViewRender>
    )
  }
  function RenderFood(uri, text, screenName, onPressM){
    return(
      <ViewRenderFood onPress= {() => onPressM(screenName)}>
        <ImageFood source= {{uri: uri}}></ImageFood>
        <TextRenderFood>{text}</TextRenderFood>
      </ViewRenderFood>
    )
  }
  return(
    <MainWrapper showsVerticalScrollIndicator = {false}>
      <ImageLogo source= {require('../../../assets/imageMain/logo.png')}></ImageLogo>
      <ViewHeader>
        <ImageTouchableOpacity onPress= {() => {navigation.navigate('CallGoBike')}}>
            <Icon name= 'motorbike' size= {30} color= {Colors.green_2}></Icon>
        </ImageTouchableOpacity>
        <ImageTouchableOpacity onPress= {() => {navigation.navigate('CallGoFood')}}>
            <IconFood name= 'bowl' size= {30} color= {Colors.red_1}></IconFood>
        </ImageTouchableOpacity>
        <ImageTouchableOpacity onPress= {() => {navigation.navigate('CallGoSend')}}>
            <IconSend name= 'box' size= { 30} color= {Colors.yellow_1}></IconSend>
        </ImageTouchableOpacity>
      </ViewHeader>
      <ViewWraper>
        <TextImage>GO-BIKE</TextImage>
        <TextImage>GO-FOOD</TextImage>
        <TextImage>GO-SEND</TextImage>
      </ViewWraper>
      {/* {RenderImage('https://i.ytimg.com/vi/6qurkGQ7Bf0/maxresdefault.jpg','Đặt món ngay',onPress)}
      {RenderImage('https://i.ytimg.com/vi/6qurkGQ7Bf0/maxresdefault.jpg','Đặt chuyến',onPress)} */}
        {arrTextAndScreen.map(e => {
          return(
            <View>
              {RenderImage('https://i.ytimg.com/vi/6qurkGQ7Bf0/maxresdefault.jpg',e[0], e[1],onPressMenu)}
            </View>
          )
        })}
      <TextGoFood>GO-FOOD</TextGoFood>
      <ViewGoFood>
        <TextFood>Khám phá món ăn</TextFood>
        <TouchableOpacityFood>
          <TextWrapper>Xem tất cả</TextWrapper>
        </TouchableOpacityFood>
      </ViewGoFood>
      <ViewBanner>
        <ScrollViewFood scrollToOverflowEnabled horizontal = {true} showsHorizontalScrollIndicator = {false} contentContainerStyle={{ paddingBottom: 30 }}>
          {/* {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW','Cơm và sôi',onPressRice)}
          {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW','Món nước',onPress)}
          {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW','Trà sữa và trà',onPress)}
          {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW','Bánh mì',onPress)}
          {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW','Bánh mì',onPress)}
          {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW','Bánh mì',onPress)} */}
          {arrTextAndFunction.map(e => {
            return(
              <View>
              {RenderFood('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5olV2bcbsDizZLVqK_WWXxUD_b7Dw_LG8DNvmk0M2oTVp2lW', e[0], e[1], onPressMenu)}
              </View>
            )
          })}
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