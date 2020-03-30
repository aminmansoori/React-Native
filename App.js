import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { setNavigator } from './src/navigationRef';
import splash from './src/components/splash';


const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});
trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name='th-list' size={20} />
};

const switchNavigator = createSwitchNavigator({
  Splash: splash,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    TrackCreate: TrackCreateScreen,
    trackListFlow,
    Account: AccountScreen
  }),
});

const App = createAppContainer(switchNavigator)

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
  return (
    <Provider store={store}>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </Provider>
  )
}