import styled from 'styled-components/native';
import Colors from '../../../utils/Colors';

export const LoginWrapper = styled.View``
export const ImageHeader = styled.Image`
width: 30%;
height: 30;
margin-top: 30;
margin-left: 20;
`
export const ImageContent = styled.Image`
width: 100%;
height: 37%;
margin-top: 100;
`
export const TouchableOpacityLogin = styled.TouchableOpacity`
width: 43%;
height: 40;
background: ${Colors.green_1};
border-radius: 5;
margin-left: 20;
justify-content: center;
align-items: center;
`
export const ViewLogin = styled.View`
margin-top: 15;
display: flex;
flex-direction: row;
`
export const TextWrapper = styled.Text`
padding-top: 10;
fontWeight: 600;
font-size: 18;
padding-left: 20;
`
export const TextLogin = styled.Text`
font-size: 15;
color: ${Colors.white_1};
fontWeight: 700;
`
export const TextFooter = styled.Text`
font-size: 15;
padding-top: 10;
padding-left: 10;
fontWeight: 500;
`
export const ViewFooter = styled.View`
display: flex;
flex-direction: row;
`
export const TouchableOpacityFooter =styled.TouchableOpacity`
justify-content: center;
align-items: center;
margin-top: 10;
`
export const Text = styled.Text`
font-size: 15;
fontWeight: 500;
color: ${Colors.green_1}
`