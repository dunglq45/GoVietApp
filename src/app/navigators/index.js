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
  AuthenticationLoading
  } 
from '../../modules/authen/index';
import {MainHome} from '../../modules/main';
import {ProfileHome} from '../../modules/profile'
import {SupportHome} from '../../modules/support';
import {OrderHome} from '../../modules/order';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
// import IconEntypo from 'react-native-vector-icons/Entypo';
// import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import constanst from '../../utils/contanst';
import Colors from '../../utils/Colors';
const AuthStack = createStackNavigator(
  {
    AuthenticationForgotPassword,
    AuthenticationLogin
  },
  {
    initialRouteName: 'AuthenticationLogin',
    headerMode: 'none'
  }
)
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
const MainStack = createStackNavigator({
    Main: MainHome,
    // Post,
},
{
  initialRouteName: 'Main',
  headerMode: 'none'
})
const ProfileStack = createStackNavigator({
Profile: ProfileHome,
// Setting: Setting
},
{
initialRouteName: 'Profile',
headerMode: 'none'

})

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
})
const StackNavigation = createSwitchNavigator({
AuthLoading: AuthenticationLoading,
Auth: AuthStack,
App: tabStack,
},
{
  initialRouteName: 'App',
  headerMode: 'none'
})
export default createAppContainer(StackNavigation)