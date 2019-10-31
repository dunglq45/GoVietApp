import { combineReducers } from 'redux'
import HomeReducer from '../../modules/main/reducer'
import AuthenReducer from '../../modules/authen/reducer'
import ProfileReducer from '../../modules/profile/reducer'
import SupportReducer from '../../modules/support/reducer'
import OrderReducer from '../../modules/order/reducer'
// import HomeReducer from '../../modules/home/reducer'
// import NotifiReducer from '../../modules/notification/reducer'
// import ForumReducer from '../../modules/forum/reducer'
// import DocumentReducer from '../../modules/doc/reducer'
// import ErrorReducer from '../../modules/ErrorBoundary/reducer'

// const router = AppNavigator.router

// const mainNavAction = router.getActionForPathAndParams('Auth')
// const initialNavState = router.getStateForAction(mainNavAction)

// const navReducer = (state = initialNavState, action) =>
//   router.getStateForAction(action, state)

const reducer = combineReducers({
  main: HomeReducer,
  authen: AuthenReducer,
  profile: ProfileReducer,
  support: SupportReducer,
  order: OrderReducer
  // home: HomeReducer,
  // notify : NotifiReducer,
  // forum  : ForumReducer,
  // doc : DocumentReducer,
  // error: ErrorReducer,
})

export default reducer
