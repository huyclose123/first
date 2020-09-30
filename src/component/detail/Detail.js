import React, {useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import Header from '../header/header';
import CardSalon from '../cardsalon/card_salon';
import CardUser from '../carduser/CardUser';

export default Detail = ({navigation, route}) => {
  console.log(route.params);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{position: 'absolute', top: 0, left: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{fontSize: 30}}> Goback</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view1}>
        <Image
          style={{height: 350, width: '100%'}}
          source={{
            uri: route.params.uri,
          }}></Image>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text1}>{route.params.price}</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text0}>{route.params.title}</Text>
      </View>
    </SafeAreaView>
  );
};
