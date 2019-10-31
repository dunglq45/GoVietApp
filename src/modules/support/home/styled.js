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
width: 100%;
`
export const TextItem = styled.Text`
font-size: 18;
fontWeight: 200;
`
export const View = styled.View`
width: 100%;
height: 1;
background-color: ${Colors.white_2};
margin-left: 15%;
`
export const ViewBanner = styled.View`
`
export const TouchableOpacitySeach = styled.TouchableOpacity``
export const TouchableOpacityItem = styled.TouchableOpacity`
`
export const ViewItem = styled.View`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
padding-bottom: 10;
`
export const ViewSupport = styled.View``
const styles = StyleSheet.create({
  
})