import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../component/home/home';
import CardUser from '../component/carduser/CardUser';
import {SafeAreaView} from 'react-navigation';
import auth from '@react-native-firebase/auth';
import I18n from '../in18/translation';
const tintColor = 'rgb(23,146,230)';
function signOut() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}
function SettingsScreen({navigation, route}) {
  console.log(route.params._user);
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <View style={{marginTop: 100}}>
        <CardUser
          name={route.params._user.displayName}
          email={route.params._user.email}
          url="https://cdn.icon-icons.com/icons2/1161/PNG/512/1487716857-user_81635.png"></CardUser>
      </View>
      <View style={{position: 'absolute', bottom: 5, left: 10}}>
        <TouchableOpacity
          onPress={() => {
            signOut();
            navigation.popToTop();
          }}>
          <Text style={{fontSize: 25}}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default BottomTab = ({route}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          padding: 3,
        },
        activeTintColor: tintColor,
        labelStyle: {
          fontSize: 9,
          lineHeight: 14,
          letterSpacing: 1.2,
        },
      }}
      headerMode="none"
      screenOptions={{gestureEnabled: false}}>
      <Tab.Screen
        initialParams={route.params}
        name="Home"
        component={Home}
        options={{
          tabBarLabel: I18n.t('Home'),
        }}
      />
      <Tab.Screen
        initialParams={route.params}
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: I18n.t('Account'),
        }}
      />
    </Tab.Navigator>
  );
};
