import React from 'react';
import {Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Input from '../inputprimary/input';
import MyButton from '../mybutton/my_button';
import styles from './style';
export default Register = ({navigation}) => {
  let user = {
    id: '',
    Password: '',
    name: '',
  };
  return (
    <SafeAreaView style={styles.view0}>
      <View style={styles.view1}>
        <View>
          <Text style={styles.text0}>User Name</Text>
          <Input
            required
            placeholder={'ID'}
            onChangeText={(text) => {
              user.id = text;
            }}
          />
          <Text style={styles.text0}>Password</Text>
          <Input
            required
            placeholder={'Password'}
            secureTextEntry
            onChangeText={(text) => {
              user.Password = text;
            }}
          />
          <Text style={styles.text0}>Name</Text>
          <Input
            required
            placeholder={'Name'}
            onChangeText={(text) => {
              user.name = text;
            }}
          />
        </View>

        <View style={styles.view2}>
          <MyButton
            colorType="leftToRight"
            startColor="#32b4d8"
            endColor="#2d5c81"
            title={'Register'}
            onPress={() => {
              navigation.navigate('BottomTab', user);
            }}
            containerStyle={styles.myButton0}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
