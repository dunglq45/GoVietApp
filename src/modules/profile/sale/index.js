import React from 'react'
import {Header} from '../../../components'
import {
  ViewSale,
  TextSale,
  ImageHeader,
  TextInputSale,
  Text,
  View
} from './styled'

function sale(props){
  const {navigation} = props
  return(
    <ViewSale>
      <Header navigation ={navigation} back title= 'Khuyen mai'></Header>
      <View>
        <ImageHeader source= {{uri:'https://magiamgia.com/wp-content/uploads/2019/04/ma-giam-gia-goviet-khuyen-mai-cover.png'}}></ImageHeader>
        <TextSale>Bạn có mã khuyến mãi?</TextSale>
        <Text>Hãy nhập mã khuyến mại của bạn để đổi thưởng.</Text>
        <TextInputSale placeholder='Nhập mã khuyến mãi'></TextInputSale>
      </View>
    </ViewSale>
  )
}
export default sale