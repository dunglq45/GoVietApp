import styled from 'styled-components/native';
import Colors from '../../../utils/Colors';

export const ViewRapper = styled.View`
flex: 1;
`
export const View = styled.View`
width: 100%;
height: 1;
background-color: ${Colors.white_3}
`
export const ViewText = styled.View`
width: 90%;
padding-left: 5%;
padding-top: 30;
`
export const Text = styled.Text`
font-size: 13;
fontWeight: 600;
padding-bottom: 10;
`
export const TextInput = styled.TextInput`
font-size: 15;
fontWeight: 600;
padding-bottom: 5;
`
export const TextHeader = styled.Text`
font-size: 18;
fontWeight: 600;
padding-left: 10;
padding-top: 10;
`
export const ViewFooter = styled.View``
export const TouchableOpacity = styled.TouchableOpacity`
background-color: ${Colors.white_3}
align-items: center;
margin-top: 366;
`
export const TextFooter = styled.Text`
font-size: 15;
color: ${Colors.white_1};
padding-top: 10;
padding-bottom: 10;
`