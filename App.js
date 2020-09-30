import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './src/navigator/bottomTab';
import login from './src/component/login/login';
import register from './src/component/register/register';
import Detail from './src/component/detail/Detail';
const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen name="Login" component={login}></Stack.Screen>
        <Stack.Screen name="Register" component={register}></Stack.Screen>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
