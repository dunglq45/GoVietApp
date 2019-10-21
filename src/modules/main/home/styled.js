import styled from 'styled-components/native';
import Colors from '../../../utils/Colors';

export const MainWrapper = styled.ScrollView`
flex : 1;
`
export const ImageLogo = styled.Image`
width: 40%;
height: 40;
margin-top: 30;
margin-left: 20;
`
export const ViewHeader = styled.View`
display: flex;
flex-Direction: row;
padding-top: 10;
justify-content: space-between;
padding-left: 40;
padding-right: 40;
`
export const ImageTouchableOpacity = styled.TouchableOpacity`
width: 15%;
height: 50;
background-color: ${Colors.white_2};
border-Radius: 15;
border-Color: ${Colors.white_2};
align-items: center;
justify-content: center;
`
export const TextImage = styled.Text`
font-size: 14;

`
export const ViewWraper = styled.View`
justify-content: space-between;
display: flex;
flex-direction: row;
padding-top: 5;
padding-left: 35;
padding-right: 25;
`
export const ViewRender = styled.TouchableOpacity`
width: 100%;
padding-left: 5%;
padding-right: 5%;
height: 140;
padding-top: 20;
`
export const ImageBackground = styled.ImageBackground`
width: 100%;
height: 100%;
border-radius: 15;
align-items: flex-end;
`
export const TextRender = styled.Text`
font-size: 13;
fontWeight: 700;
`
export const TouchableOpacity = styled.TouchableOpacity`
width: 100;
height: 30;
background-color: white;
border-radius: 10;
justify-content: center;
align-items : center;
margin-top: 80;
margin-right: 10;
`
export const TextGoFood = styled.Text`
font-size: 15;
fontWeight: 600;
padding-top: 10;
padding-left: 10;
`
export const ViewGoFood = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top: 10;
padding-left: 10;
padding-right: 10;
`
export const TextFood = styled.Text`
font-size: 13;
fontWeight: 600;
`
export const TouchableOpacityFood = styled.TouchableOpacity`
`
export const TextWrapper = styled.Text`
color: ${Colors.green_1};
`
export const ViewRenderFood = styled.TouchableOpacity`
width: 150;
height: 100%;
`
export const ImageFood = styled.Image`
width: 140;
height: 100%;
border-radius: 5;
`
export const TextRenderFood = styled.Text`
font-size: 13;
fontWeight: 600;
margin-top: 10;
`
export const ScrollViewFood = styled.ScrollView`
  display: flex;
  flex : 1;
  flex-direction: row;
`
export const ViewBanner = styled.View`
display: flex;
height: 150;
flex : 1;
padding-right: 10;
padding-left: 10;
margin-top: 5;
`
export const ViewBottom = styled.View`

`