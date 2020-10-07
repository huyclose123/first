import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '248198624652-iemoqdqgcm4tuudghpkfah0pqssgapvm.apps.googleusercontent.com',
});

import {useNavigation} from '@react-navigation/native';
const useTodo = () => {
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
  function signOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential

    await auth().signInWithCredential(googleCredential);
  };
  return {
    signOut,
    onGoogleButtonPress,
  };
};

export default useTodo;
