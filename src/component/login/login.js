import React from 'react';
import {Image, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Input from '../inputprimary/input';
import MyButton from '../mybutton/my_button';
import {styles} from './style';
export default Login = ({navigation}) => {
  let id = {
    id: '',
    Password: '',
    name: 'Tran Phuoc Hung',
  };
  function onLogin(id, Password, param) {
    if (id == 'hung844101' && Password == '123456') {
      navigation.navigate('BottomTab', param);
    } else {
      alert('Wrong  ID or Password');
    }
  }
  return (
    <SafeAreaView style={styles.view0}>
      <View style={styles.view1}>
        <View>
          <Text style={styles.text0}>User Name</Text>
          <Input
            required
            placeholder={'ID'}
            onChangeText={(text) => {
              id.id = text;
            }}
          />
          <Text style={styles.text0}>Password</Text>
          <Input
            required
            placeholder={'Password'}
            secureTextEntry
            onChangeText={(text) => {
              id.Password = text;
            }}
          />
        </View>
        <View style={styles.view2}>
          <MyButton
            colorType="leftToRight"
            startColor="#32b4d8"
            endColor="#2d5c81"
            title={'Login'}
            onPress={() => {
              onLogin(id.id, id.Password, id);
            }}
            containerStyle={styles.myButton0}
          />
        </View>
        <View style={styles.view2}>
          <MyButton
            colorType="leftToRight"
            startColor="#32b4d8"
            endColor="#2d5c81"
            title={'Register'}
            onPress={() => {
              navigation.navigate('Register');
            }}
            containerStyle={styles.myButton0}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
