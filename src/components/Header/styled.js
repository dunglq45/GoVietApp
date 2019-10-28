import styled from 'styled-components'
import Colors from '../../utils/Colors'
import Fonts from '../../utils/Fonts'
const HEADER_HEIGHT = 61

export const ViewHeader = styled.View`
`
export const Wrapper = styled.View`
  height: ${HEADER_HEIGHT};
  padding-top: 15;
  background-color: ${Colors.white_1};
  flex-direction: row;
  align-items: center;
  padding-right: 10;
  padding-left: 20;
`

export const HeaderTitle = styled.Text`
${props => props.fonts === true? Fonts.header : Fonts.fonts};
  color: ${Colors.black_1};
  width : 73%;
  padding-left: 10;
`

export const ButtonWrapper = styled.TouchableOpacity`
  height: ${HEADER_HEIGHT};
  justify-content: center;
  margin-right : 20;
`

export const ViewWrapper = styled.View`
width: 100%;
height: 1;
background-color: ${Colors.white_3}
`