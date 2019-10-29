import { createAction } from 'redux-actions'

export const PROOMOTIONALCODE = 'profile/PROOMOTIONALCODE'
export const CONTENTPROFILE = 'profile/CONTENTPROFILE'
export const setPromotionalCode = createAction(PROOMOTIONALCODE)
export const setContentProfile = createAction(CONTENTPROFILE)