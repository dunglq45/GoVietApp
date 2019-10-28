import { handleActions } from 'redux-actions'
import Model from './model'

import {
  IS_ANOTHER_ERROR,
  IS_BAD_REQUEST,
  IS_EXPIRED,
  IS_INTERNAL_SERVER_ERROR,
  IS_NOT_FOUND
} from './action-type'

const initialState = Model(null)

const actions = {
  [IS_ANOTHER_ERROR]: (state, action) => state.setOtherError(action.payload),
  [IS_BAD_REQUEST]: (state, action) => state.setBadRequest(action.payload),
  [IS_EXPIRED]: (state, action) => state.setExpired(action.payload),
  [IS_INTERNAL_SERVER_ERROR]: (state, action) =>
    state.setInternalServerError(action.payload),
  [IS_NOT_FOUND]: (state, action) => state.setIsNotFound(action.payload)
}

export default handleActions(actions, initialState)
