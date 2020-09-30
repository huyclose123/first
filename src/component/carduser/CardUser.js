import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default CardUser = ({
  onPress,
  url,
  name,
  email,
  nonChild,
  cardStyle,
}) => {
  return (
    <View style={[styles.serviceCard]}>
      <TouchableOpacity onPress={onPress}>
        <View style={{flexDirection: 'row'}}>
          {url ? (
            <Image
              style={styles.imageStyle}
              source={{uri: url}}
              resizeMethod={'auto'}
            />
          ) : (
            <Image style={styles.imageStyle} />
          )}

          {!nonChild && (
            <View style={[styles.view0]}>
              <Text style={styles.Text1}>{name}</Text>

              <Text style={styles.Text2}>{email}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      {/* <Text style={styles.serviceTitle} numberOfLines={1} ellipsizeMode={'tail'}>{title}</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  serviceCard: {
    flex: 1,
    position: 'absolute',
    top: -63,
    marginVertical: 10,
    shadowColor: '#FAFAFA',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 5,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    height: 100,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  imageStyle: {
    marginLeft: 20,
    height: 66,
    width: 66,
    borderRadius: 50,
  },
  view0: {
    marginLeft: 20,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  Text1: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#2F87AB',
  },
  Text2: {
    fontSize: 14,

    marginTop: 2,
  },
});
