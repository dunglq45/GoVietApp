import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import 
  {
  AuthenticationLogin,
  AuthenticationForgotPassword,
  AuthenticationLoading,
  ScreenLogin,
  ScreenSubscribe
  } 
from '../../modules/authen/index';
import {
  ProfileHome,
  ChangeLanguage,
  privacyPolicy,
  saleOff,
  TermsAndService
} from '../../modules/profile'
import {SupportHome} from '../../modules/support';
import {OrderHome} from '../../modules/order';
import {
  MainHome,
  CallGoBike,
  CallGoFood,
  CallGoSend,
} from '../../modules/main'
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import constanst from '../../utils/contanst';
import Colors from '../../utils/Colors';

const AuthStack = createStackNavigator(
  {
    AuthenticationLogin,
    ScreenLogin,
    ScreenSubscribe
  },
  {
    initialRouteName: 'AuthenticationLogin',
    headerMode: 'none'
  })
const SupportStack = createStackNavigator(
  {
    Support: SupportHome,
    // SupportList,
    // Post
  },
  {
    initialRouteName: 'Support',
    headerMode: 'none'
  }
)
SupportStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  let drawerLockMode = 'locked-closed'
  if (navigation.state.index > 0) {
    tabBarVisible = false
    drawerLockMode = 'locked-closed'
  }
    return {
      tabBarVisible,
      drawerLockMode
    }
   }
const MainStack = createStackNavigator({
    Main: MainHome,
    CallGoBike: CallGoBike,
    CallGoFood: CallGoFood,
    CallGoSend: CallGoSend,
},
{
  initialRouteName: 'Main',
  headerMode: 'none'
})
MainStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  let drawerLockMode = 'locked-closed'
  if (navigation.state.index > 0) {
    tabBarVisible = false
    drawerLockMode = 'locked-closed'
  }
    return {
      tabBarVisible,
      drawerLockMode
    }
   }
const ProfileStack = createStackNavigator({
Profile: ProfileHome,
Sale: saleOff,
ChangeLanguage: ChangeLanguage,
privacyPolicy: privacyPolicy,
TermsAndService: TermsAndService,
},
{
initialRouteName: 'Profile',
headerMode: 'none',
backBehavior: 'initialRoute'

})
ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  let drawerLockMode = 'locked-closed'
  if (navigation.state.index > 0) {
    tabBarVisible = false
    drawerLockMode = 'locked-closed'
  }
    return {
      tabBarVisible,
      drawerLockMode
    }
   }
const OrderStack = createStackNavigator({
  Order: OrderHome,
},
{
  initialRouteName: 'Order',
  headerMode: 'none'
})
const tabStack = createBottomTabNavigator({
  Main: MainStack,
  Order: OrderStack,
  Support: SupportStack,
  Profile: ProfileStack,
},
{
  initialRouteName: 'Main',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      const style = {marginBottom: 10}
      return (
        <Icon name={constanst.icons[routeName]} size={24}  color = {tintColor}  style = {style}/>
      );
    },
    title : constanst.titles[navigation.state.routeName]
  }),
  tabBarOptions: {
    activeTintColor: Colors.green_1,
    inactiveTintColor: Colors.gray_1,
    style: {
      paddingTop: 13,
      paddingBottom: 4,
      paddingLeft: 4,
      height: 65
    },
  },
  headerMode: 'none',
  backBehavior: 'previoustab',
  
})
const AppStack = createStackNavigator(
  {
    AppMain: tabStack,
  },
  {
    initialRouteName: 'AppMain',
    headerMode: 'none'
  }
)
const StackNavigation = createSwitchNavigator({
AuthLoading: AuthenticationLoading,
Auth: AuthStack,
App: AppStack,
},
{
  initialRouteName: 'App',
  headerMode: 'none'
})
export default createAppContainer(StackNavigation)