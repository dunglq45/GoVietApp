import { handleActions } from 'redux-actions'
import {Support} from '../../api'

import {
  SUPPORTCONTENT,
  setSupportContent
} from './action-type'
import Model from './model'
const initialState = Model(null)

export const getSupportContent = (search) => async dispatch => {
  // dispatch(setLoading(true))
  debugger
  try {
    const data = await Support.fetchSupportContent().catch(err => {
    })
    console.log('getSupportContent', data)
    if (data) {
      dispatch(setSupportContent(data))
    }
  } catch (error) {
    console.log('getSupportContent ERROR', error)
  }
}
const actions = {
  [SUPPORTCONTENT]: (state, action) => state.setSupportContent(action.payload),
}
export default handleActions(actions, initialState)