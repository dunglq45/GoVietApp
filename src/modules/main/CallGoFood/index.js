import React from 'react'
import {Header} from '../../../components'
import{
  ViewWrappre
} from './styled'
function CallGoFood(props){
  const {navigation} = props
  return(
    <ViewWrappre>
      <Header navigation={navigation} back title='Go Food' fonts></Header>
    </ViewWrappre>
  )
}
export default CallGoFood