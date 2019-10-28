import { handleActions } from 'redux-actions'
import { Main } from '../../api'

import {
  FOODMENU,
  IMAGE,
  IMAGE2,
  setFoodMenu,
  setImage,
  setImage2
} from './action-type'
import Model from './model'
const initialState = Model(null)

export const getFoodMenu = (search) => async dispatch => {
  // dispatch(setLoading(true))
  debugger
  try {
    const data = await Main.fetchFoodMenu().catch(err => {
    })
    console.log('getFoodMenu', data)
    if (data) {
      dispatch(setFoodMenu(data))
    }
  } catch (error) {
    console.log('getFoodMenu ERROR', error)
  }

  // dispatch(setLoading(false))
}
export const getImage = (search) => async dispatch => {
  // dispatch(setLoading(true))

  try {
    const data = await Main.fetchImage().catch(err => {
    })
    console.log('getImage', data)
    if (data) {

      dispatch(setImage(data))
    }
  } catch (error) {
    console.log('getImage ERROR', error)
  }

  // dispatch(setLoading(false))
}
export const getImage2 = (search) => async dispatch => {
  // dispatch(setLoading(true))

  try {
    const data = await Main.fetchImage2().catch(err => {
      // RequestHandler(err, dispatch)
    })
    console.log('getImage2', data)
    if (data) {

      dispatch(setImage2(data))
    }
  } catch (error) {
    console.log('Image2 ERROR', error)
  }
  // dispatch(setLoading(false))
}
const actions = {
  [FOODMENU]: (state, action) => state.setFoodMenu(action.payload),
  [IMAGE]: (state, action) => state.setImage(action.payload),
  [IMAGE2]: (state, action) => state.setImage2(action.payload)
}
export default handleActions(actions, initialState)