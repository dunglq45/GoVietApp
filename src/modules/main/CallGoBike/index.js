import React from 'react'
import {View, Text} from 'react-native'
import {Header} from '../../../components'
function CallGoBike(props){
  const {navigation} = props
  return(
    <View>
      <Header navigation={navigation} title={'TÀI NGUYÊN'} back fonts></Header>
    </View>
  )
}
export default CallGoBike