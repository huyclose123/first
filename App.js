import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './src/navigator/bottomTab';
import login from './src/component/login/login';
import register from './src/component/register/register';
import Detail from './src/component/detail/Detail';
import IntroImage from './src/component/appIntroSlider/IntroImage';
const Stack = createStackNavigator();
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import appReducers from './src/redux/reducers';
export const store = createStore(appReducers);
let App1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen name="ImageScreen" component={IntroImage}></Stack.Screen>
        <Stack.Screen name="Login" component={login}></Stack.Screen>
        <Stack.Screen name="Register" component={register}></Stack.Screen>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App = () => {
  return (
    <Provider store={store}>
      <App1 />
    </Provider>
  );
};
