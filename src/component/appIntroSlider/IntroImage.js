import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './style';
import I18n from '../../in18/translation';
const slides = [
  {
    key: 'one',
    title: 'WelCome',
    text: I18n.t('content1'),
    image: require('../../asset/image/admin.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: I18n.t('content2'),
    image: require('../../asset/image/chat.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: I18n.t('content3'),
    image: require('../../asset/image/introEmployee.png'),
    backgroundColor: '#22bcb5',
  },
];
export default IntroImage = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);
  const _renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: item.backgroundColor,
          flex: 1,
          alignItems: 'center',
        }}>
        <View style={{marginTop: 10}}></View>

        <View style={{marginTop: 200}}>
          <Image source={item.image} style={{height: 300, width: 300}} />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 25}}>{item.text}</Text>
        </View>
      </View>
    );
  };
  const _onDone = () => {
    navigation.navigate('Login');
  };
  if (showRealApp) {
    navigation.navigate('Login');
  } else {
    return (
      <AppIntroSlider data={slides} renderItem={_renderItem} onDone={_onDone} />
    );
  }
};
