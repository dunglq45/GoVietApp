import { handleActions } from 'redux-actions'
import {Profile} from '../../api'

import {
  PROOMOTIONALCODE,
  setPromotionalCode,
  CONTENTPROFILE,
  setContentProfile
} from './action-type'
import Model from './model'
const initialState = Model(null)

export const getPromotionalCode = (search) => async dispatch => {
  // dispatch(setLoading(true))
  debugger
  try {
    const data = await Profile.fetchPromotionalCode().catch(err => {
    })
    console.log('getPromotionalCodeo', data)
    if (data) {
      dispatch(setPromotionalCode(data))
    }
  } catch (error) {
    console.log('getPromotionalCodeo ERROR', error)
  }
}
export const getContentProfile = (search) => async dispatch => {
  // dispatch(setLoading(true))
  debugger
  try {
    const data = await Profile.fetchContentProfile().catch(err => {
    })
    console.log('getContentProfile', data)
    if (data) {
      dispatch(setContentProfile(data))
    }
  } catch (error) {
    console.log('getContentProfile ERROR', error)
  }
}
const actions = {
  [PROOMOTIONALCODE]: (state, action) => state.setPromotionalCode(action.payload),
  [CONTENTPROFILE]: (state, action) => state.setContentProfile(action.payload),
}
export default handleActions(actions, initialState)