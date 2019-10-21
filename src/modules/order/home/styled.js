import styled from 'styled-components/native';
import Colors from '../../../utils/Colors';

export const ViewWrapper = styled.View`
flex: 1;
`
export const ViewHeader = styled.View`
justify-content: space-between;;
display: flex;
flex-direction: row;
padding-top: 30;
padding-left: 10;
padding-right: 10;
align-items: center;
`
export const TextHeader = styled.Text`
font-size: 15;
color: ${Colors.black_1};
fontWeight: 600;
`
export const TouchableOpacityHeader = styled.TouchableOpacity``
export const View = styled.View`
height: 3;
background-color: ${Colors.white_2};
`
export const TextWrapper = styled.Text`
font-size: 18;
fontWeight: 600;
`
export const TextBottom = styled.Text`
font-size: 13;
padding-top: 5;
padding-left: 5;
`
export const ImageWrapper = styled.Image`
width: 100%;
height: 100;
margin-top: 150;
`
export const ViewBottom = styled.View`
padding-top: 10;
align-items: center;
`