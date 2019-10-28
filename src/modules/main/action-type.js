import { createAction } from 'redux-actions'

export const FOODMENU = 'home/FOODMENU'
export const IMAGE = 'home/IMAGE'
export const IMAGE2 = 'home/IMAGE2'
export const setFoodMenu = createAction(FOODMENU)
export const setImage = createAction(IMAGE)
export const setImage2 = createAction(IMAGE2)