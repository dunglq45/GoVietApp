import React from 'react'
import {
  ViewSale,
  TextSale,
  ImageHeader,
  TextInputSale,
  Text
} from './styled'

function sale(){
  return(
    <ViewSale>
      <ImageHeader source= {{uri:'https://magiamgia.com/wp-content/uploads/2019/04/ma-giam-gia-goviet-khuyen-mai-cover.png'}}></ImageHeader>
      <TextSale>Bạn có mã khuyến mãi?</TextSale>
      <Text>Hãy nhập mã khuyến mại của bạn để đổi thưởng.</Text>
      <TextInputSale placeholder='Nhập mã khuyến mãi'></TextInputSale>
    </ViewSale>
  )
}
export default sale