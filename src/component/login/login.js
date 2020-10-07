import React, {useState, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Input from '../inputprimary/input';
import MyButton from '../mybutton/my_button';
import {styles} from './style';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import I18n from '../../in18/translation';

GoogleSignin.configure({
  webClientId:
    '248198624652-iemoqdqgcm4tuudghpkfah0pqssgapvm.apps.googleusercontent.com',
});
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
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;

  if (user) {
    navigation.navigate('BottomTab', user);
  }

  onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential

    await auth().signInWithCredential(googleCredential);
  };

  return (
    <SafeAreaView style={styles.view0}>
      <View style={styles.view1}>
        <View>
          <Text style={styles.text0}>{I18n.t('Username')}</Text>
          <Input
            required
            placeholder={I18n.t('id')}
            onChangeText={(text) => {
              id.id = text;
            }}
          />
          <Text style={styles.text0}>{I18n.t('Password')}</Text>
          <Input
            required
            placeholder={I18n.t('Password')}
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
            title={I18n.t('Login')}
            onPress={() => {
              // onLogin(id.id, id.Password, id);
              console.log(user);
            }}
            containerStyle={styles.myButton0}
          />
        </View>
        <View style={styles.view2}>
          <MyButton
            colorType="leftToRight"
            startColor="#32b4d8"
            endColor="#2d5c81"
            title={I18n.t('Register')}
            onPress={() => {
              navigation.navigate('Register');
            }}
            containerStyle={styles.myButton0}
          />
        </View>
        <View style={styles.view2}>
          <MyButton
            colorType="leftToRight"
            startColor="#32b4d8"
            endColor="#2d5c81"
            title={I18n.t('LoginwithGoogle')}
            onPress={async () =>
              onGoogleButtonPress().then(() => {
                console.log('welcome');
              })
            }
            containerStyle={styles.myButton0}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
