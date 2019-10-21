import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../../../utils/Colors'
import {
  ViewItem,
  ViewIcon,
  TextItem,
  View,
  ViewWrapper
} from './styled'
function RenderItem(IconName, text){
  return(
    <ViewItem>
      <ViewIcon>
        <Icon name={IconName} size={20} color={Colors.black_1}></Icon>
        <TextItem>{text}</TextItem>
      </ViewIcon>
      <View></View>
    </ViewItem>
  )
}
function Profile(){
  return(
    <ViewWrapper>
    </ViewWrapper>
  )
}
export default Profile