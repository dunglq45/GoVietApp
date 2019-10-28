import { createAction } from 'redux-actions'

export const IS_EXPIRED = 'errors/IS_EXPIRED'
export const IS_NOT_FOUND = 'errors/IS_NOT_FOUND'
export const IS_BAD_REQUEST = 'errors/IS_BAD_REQUEST'
export const IS_INTERNAL_SERVER_ERROR = 'errors/IS_INTERNAL_SERVER_ERROR'
export const IS_ANOTHER_ERROR = 'errors/IS_ANOTHER_ERROR'

export const setIsExpired = createAction(IS_EXPIRED)
export const setIsNotFound = createAction(IS_NOT_FOUND)
export const setIsBadRequest = createAction(IS_BAD_REQUEST)
export const setIsInternalServerError = createAction(IS_INTERNAL_SERVER_ERROR)
export const setIsAnOtherError = createAction(IS_ANOTHER_ERROR)
