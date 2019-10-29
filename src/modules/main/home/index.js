import React ,{useEffect, useState}from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFood from 'react-native-vector-icons/MaterialCommunityIcons'
import IconSend from 'react-native-vector-icons/Entypo'
import Colors from '../../../utils/Colors' 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
import constant from '../../../utils/contanst'
import {
  getFoodMenu,
  getImage,
  getImage2
} from '../reducer'
function Main(props){
  const {
    navigation,
    getFoodMenu,
    getImage,
    getImage2,
    main
  } = props
  // const arrTextAndFunction = [
  //   ['Cơm và sôi' , "CallGoFood"],
  //   ['Món nước', "CallGoFood"],
  //   ['Trà sữa và trà', 'CallGoFood'],
  //   ['Bánh mì', 'CallGoFood'],
  //   ['Bánh mì', 'CallGoFood'],
  //   ['Bánh mì', 'CallGoFood']
  // ]
  // const arrTextAndScreen= [
  //   ['Đặt món ngay','CallGoFood'],
  //   ['Đặt chuyến','CallGoBike']
  // ]
  // const arrTextAndScreen2= [
  //   ['Xem ngay','CallGoFood'],
  //   ['Nhập mã ngay','Sale']
  // ]
  // const screen =['CallGoFood','CallGoBike','CallGoFood','Sale']
  // const [foodMenuList, setFoodMenuList] = useState([])
  // const [imageList, setImageList] = useState([])
  // const [imageList2, setImageList2] = useState([])
  // function getFoods(){
  //   fetch(`${constant.serverName}foodmenu.json`)
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log(responseJson)
  //     setFoodMenuList(responseJson)
  //     return responseJson.movies;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }
  // function getImages(){
  //   fetch(`${constant.serverName}images.json`)
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log(responseJson)
  //     setImageList(responseJson)
  //     return responseJson.movies;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }
  // function getImages2(){
  //   fetch(`${constant.serverName}images2.json`)
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log(responseJson)
  //     setImageList2(responseJson)
  //     return responseJson.movies;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }
  useEffect(() =>{
    // getFoods()
    // getImages()
    // getImages2()
    getFoodMenu()
    getImage()
    getImage2()
  },[])
  function onPressMenu(screenName){
    console.log(typeof screenName)
    navigation.navigate(screenName)
  }
  function RenderImage(uri, text,screenName,onPressImage){
    console.log(screenName)
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
        {main.image.length > 0 && main.image.map((e, index)=> {
          return(
            <View key = {index}>
              {RenderImage(e.uri, e.text, e.screenName,onPressMenu)}
            </View>
          )
        })}
      <TextGoFood>GO-FOOD</TextGoFood>
      <ViewGoFood>
        <TextFood>Khám phá món ăn</TextFood>
        <TouchableOpacityFood onPress={() => navigation.navigate('CallGoFood')}>
          <TextWrapper>Xem tất cả</TextWrapper>
        </TouchableOpacityFood>
      </ViewGoFood>
      <ViewBanner>
        <ScrollViewFood scrollToOverflowEnabled horizontal = {true} showsHorizontalScrollIndicator = {false} 
        contentContainerStyle={{ paddingBottom: 30 }}>
          {main.foodMenu && main.foodMenu.length > 0 && main.foodMenu.map((e, i) => {
            return(
              <View key= {i}>
              {RenderFood(e.uri, e.name, 'CallGoFood', onPressMenu)}
              </View>
            )
          })}
        </ScrollViewFood>
      </ViewBanner>
      <ViewBottom>
        {main.image2.length>0 && main.image2.map((e, i) => {
          return(
            <View key = {i}>
              {RenderImage(e.uri, e.text, e.screenName, onPressMenu)}
            </View>
          )
        })}
      </ViewBottom>
    </MainWrapper>
  )
}
const mapStateToProps = state => ({
  main: state.main,
  authen : state.authen
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getFoodMenu,
    getImage,
    getImage2
  }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
