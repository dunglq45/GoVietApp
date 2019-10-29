import React, { useEffect, useState, createRef } from 'react'
import {Header} from '../../../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getPromotionalCode} from '../reducer'
import { StackActions, NavigationActions } from 'react-navigation'
import {
  ViewSale,
  TextSale,
  ImageHeader,
  TextInputSale,
  Text,
  View,
  TouchableOpacity,
  TextFooter
} from './styled'

function sale(props){
  const {
    navigation,
    getPromotionalCode,
    profile
  } = props
  const [code, setCode] = useState('')
  useEffect(() =>{
    getPromotionalCode()
  },[])
  function CheckCode(){
    var found = profile.PromotionalCode.find(function(e) {
      return e.code === code
    });
    if(found){
      const resetStack = StackActions.reset({
        actions: [NavigationActions.navigate({ routeName: 'AppMain' })],
        index: 0,
        key: null,
      });
      debugger
      const resetStack2 = NavigationActions.navigate({ routeName: 'CallGoBike' });
      navigation.dispatch(resetStack);
      navigation.dispatch(resetStack2);
      console.log('code success')
    } else {
      console.log('code failure')
    }
  }
  return(
    <ViewSale>
      <Header navigation ={navigation} back title= 'Khuyen mai'></Header>
      <View>
        <ImageHeader source= {{uri:'https://magiamgia.com/wp-content/uploads/2019/04/ma-giam-gia-goviet-khuyen-mai-cover.png'}}></ImageHeader>
        <TextSale>Bạn có mã khuyến mãi?</TextSale>
        <Text>Hãy nhập mã khuyến mại của bạn để đổi thưởng.</Text>
        <TextInputSale placeholder='Nhập mã khuyến mãi'
             onChangeText = {(text) =>{
              setCode(text)
            }}
            autoCapitalize = 'none'
            autoCorrect = {false}
        ></TextInputSale>
      </View>
      <TouchableOpacity  onPress={() => {CheckCode()}}>
        <TextFooter>TIẾP TỤC</TextFooter>
      </TouchableOpacity>
    </ViewSale>
  )
}
const mapStateToProps = state => ({
  profile : state.profile
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getPromotionalCode,
  }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sale)