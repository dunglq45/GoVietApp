import styled from 'styled-components/native';
import Colors from '../../../utils/Colors';
import {StyleSheet} from 'react-native'
export const ViewWrapper = styled.View`
flex: 1;
`
export const ViewHeader = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 30;
padding-top:10;
padding-bottom: 10;
background-color: ${Colors.white_2};
`
export const TextInput = styled.TextInput`
padding-left: 5;
`
export const ViewRenderItem = styled.View`
padding-top: 20;
padding-bottom: 20;
`
export const TouchableOpacityItem = styled.TouchableOpacity`
display: flex;
flex-direction: row;
justify-content: space-between;`
export const TextItem = styled.Text`
padding-left: 15%;`
export const View = styled.View`
width: 85%;
height: 1;
background-color: ${Colors.white_2};
margin-left: 15%;
`
export const ViewBanner = styled.View``
const styles = StyleSheet.create({
  
})