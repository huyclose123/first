import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import styles from './style';
export default CardSalon = ({
  onPress,
  url,
  title,
  isNonChild,
  cardStyle,
  price,
}) => {
  return (
    <View style={[styles.view0, cardStyle]}>
      <TouchableOpacity onPress={onPress} style={styles.view1}>
        <View style={styles.view1}>
          {url ? (
            <Image
              style={styles.image0}
              source={{uri: url}}
              resizeMethod={'auto'}
            />
          ) : (
            <Image style={styles.image0} />
          )}
          {!isNonChild && (
            <View style={[styles.view2]}>
              <Text style={styles.text0}>{title}</Text>
              <Text style={styles.text1}>{price}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      {/* <Text style={styles.serviceTitle} numberOfLines={1} ellipsizeMode={'tail'}>{title}</Text> */}
    </View>
  );
};
