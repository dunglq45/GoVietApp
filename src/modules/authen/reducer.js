import { handleActions } from 'redux-actions'
import {Authen} from '../../api'

import {
  USERINFO,
  setUserInfo
} from './action-type'
import Model from './model'
const initialState = Model(null)

export const getUserInfo = (search) => async dispatch => {
  // dispatch(setLoading(true))
  debugger
  try {
    const data = await Authen.fetchUserInfo().catch(err => {
    })
    console.log('getUserInfo', data)
    if (data) {
      dispatch(setUserInfo(data))
    }
  } catch (error) {
    console.log('getUserInfo ERROR', error)
  }
}
const actions = {
  [USERINFO]: (state, action) => state.setUserInfo(action.payload),
}
export default handleActions(actions, initialState)