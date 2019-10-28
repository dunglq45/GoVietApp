import React, {useEffect} from 'react'

import Colors from '../../utils/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import {StatusBar} from 'react-native'
import {
  Wrapper,
  HeaderTitle,
  ButtonWrapper,
  ViewWrapper,
  ViewHeader
} from './styled'

const ICON_SIZE = 25
function Header (props) {
  const { navigation, title, back, search , onPressSearch, isMainHeader,fonts} = props
  useEffect(() => {
    StatusBar.setHidden(false)
  }, [])
  return (
    <ViewHeader>
    <Wrapper>
      {back && <ButtonWrapper
        onPress={() => {
          if (back) return navigation.goBack()
        }}
      >
        <Icon
          name={ 'md-arrow-back' }
          size={20}
          color={Colors.black_1}
        />
      </ButtonWrapper>}
       <HeaderTitle fonts={fonts}>{title}</HeaderTitle>
    {/* {search && 
      <ButtonSearchWrapper
        onPress = {() => {onPressSearch()}}
      >
         <Icon
          name='ios-search'
          size={ICON_SIZE}
          color={Colors.black_1}
        />
      </ButtonSearchWrapper>
    } */}
    </Wrapper>
    <ViewWrapper></ViewWrapper>
    </ViewHeader>
  )
}

export default Header
