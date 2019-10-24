import styled from 'styled-components/native';
import Colors from '../../../utils/Colors';

export const ViewItem = styled.View`
padding-top: 20;
`
export const ViewIcon = styled.TouchableOpacity`
display: flex;
flex-direction: row;
margin-left: 5%;
`
export const TextItem = styled.Text`
padding-left: 20;
padding-bottom: 20;
`
export const View = styled.View`
width: 80%;
height: 1;
background-color: ${Colors.white_2};
margin-left: 10%;
`
export const ViewWrapper = styled.View`
flex: 1;
`
export const TextHeader = styled.Text`
padding-top: 25;
padding-left: 5%;
font-size: 18;
fontWeight: 600;
padding-bottom: 5;
`
export const ViewHeader = styled.View`
width: 90%;
background-color: ${Colors.white_3};
height: 1;
margin-left: 5%;
`
export const ViewLogOut = styled.TouchableOpacity`
align-items: center;
margin-top: 20;
`
export const TextLogOut = styled.Text`
font-size: 16;
color: ${Colors.red_1};
fontWeight: 600;
`
export const ViewItemWrapper = styled.View``