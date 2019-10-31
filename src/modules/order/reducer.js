import { handleActions } from 'redux-actions'
import {Order} from '../../api'

import {
  ORDERIMAGE,
  setOrderImage
} from './action-type'
import Model from './model'
const initialState = Model(null)

export const getOrderImage = (search) => async dispatch => {
  // dispatch(setLoading(true))
  debugger
  try {
    const data = await Order.fetchOrderImage().catch(err => {
    })
    console.log('getOrderImage', data)

    if (data) {
      dispatch(setOrderImage(data))
    }
  } catch (error) {
    console.log('getOrderImage ERROR', error)
  }
}
const actions = {
  [ORDERIMAGE]: (state, action) => state.setOrderImage(action.payload),
}
export default handleActions(actions, initialState)