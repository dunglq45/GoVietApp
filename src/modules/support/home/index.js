import React, { useEffect, useState, createRef } from 'react'
import Colors from '../../../utils/Colors'
import Icon from 'react-native-vector-icons/Feather'
import IconItem from 'react-native-vector-icons/AntDesign'
import IconBike from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFood from 'react-native-vector-icons/MaterialCommunityIcons'
import IconSend from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getSupportContent} from '../reducer'
import {
  ViewWrapper,
  ViewHeader,
  TextInput,
  ViewRenderItem,
  TouchableOpacityItem,
  View,
  ViewBanner,
  TextItem,
  TouchableOpacitySeach,
  ViewItem,
  ViewSupport
} from './styled'

function Support(props){
  const {
    navigation,
    getSupportContent,
    support
  } = props
  useEffect(() =>{
    getSupportContent()
  },[])
  const arr = ['gobike', 'gofood', 'gosend', 'khac']
  function RenderItem(text){
    return(
      <ViewRenderItem>
        <ViewItem>
          <TextItem>{text}</TextItem>
          <IconItem name= 'right' size= {20} color={Colors.white_3}></IconItem>
        </ViewItem>
        <View></View>
      </ViewRenderItem>
    )
  }
  return(
    <ViewWrapper>
      <ViewHeader>
        <TextInput placeholder= 'Tìm kiếm câu hỏi tại đây'></TextInput>
        <TouchableOpacitySeach>
           <Icon name= 'search' size= {20} style={{paddingRight: 10}}></Icon>
        </TouchableOpacitySeach>
      </ViewHeader>
      <ViewBanner>
        {support.SupportContent.map((e, i) => {
          return(
            <TouchableOpacityItem key ={i}>
              {RenderItem(e)}
            </TouchableOpacityItem>
          )
        })}
        {arr.map((e,i) => {
          return(
            <TouchableOpacityItem key ={i}>
              {RenderItem(e)}
            </TouchableOpacityItem>
          )
        })}
        <TouchableOpacityItem>
        {RenderItem('gobike')}
        </TouchableOpacityItem>
      </ViewBanner>
    </ViewWrapper>
  )
}
const mapStateToProps = state => ({
  support : state.support
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getSupportContent,
  }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Support)