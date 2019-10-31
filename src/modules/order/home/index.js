import React ,{useEffect, useState}from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../../utils/Colors'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  ViewWrapper,
  ViewHeader,
  TextHeader,
  TouchableOpacityHeader,
  View,
  ImageWrapper,
  TextWrapper,
  TextBottom,
  ViewBottom
} from './styled'
import {getOrderImage} from '../reducer'
function Order(props){
  const {
    getOrderImage,
    order
  } = props
  useEffect(() =>{
    getOrderImage()
  },[])
  return(
    <ViewWrapper>
      <ViewHeader>
        <TextHeader>Đơn hàng hiện tại</TextHeader>
        <TouchableOpacityHeader>
          <Icon name= 'calendar-clock' size= {30} color={Colors.black_1}></Icon>
        </TouchableOpacityHeader>
      </ViewHeader>
      <View></View>
      {
        order.OrderImage.map((e,i) => {
          return(
            <ImageWrapper key ={i} source={{uri: e.uri}}></ImageWrapper>
          )
        })
      }
      
      <ViewBottom>
        <TextWrapper>Hãy đặt hàng GoViet!</TextWrapper>
        <TextBottom>Các tài xế của chúng tôi rất vui{"\n"} lòng được phục vụ bạn.</TextBottom>
      </ViewBottom>
    </ViewWrapper>
  )
}
const mapStateToProps = state => ({
  order: state.order
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getOrderImage
  }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)