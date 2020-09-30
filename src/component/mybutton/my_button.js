import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

export default MyButton = ({
  height,
  title,
  borderRadius,
  containerStyle,
  bgColor,
  leftIconSource,
  colorType,
  startColor,
  endColor,
  titleStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          containerStyle,
          styles.view0,
          {
            height: height ?? 40,
            borderRadius: borderRadius ?? 20,
            backgroundColor: bgColor,
          },
        ]}>
        {colorType == 'topToBottom' && (
          <LinearGradient
            colors={[startColor, endColor]}
            locations={[0, 1]}
            style={[
              styles.linearGradient0,
              {
                borderRadius: borderRadius ?? 20,
              },
            ]}
          />
        )}

        {colorType == 'leftToRight' && (
          <LinearGradient
            colors={[startColor, endColor]}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}
            locations={[0, 1]}
            style={[
              styles.linearGradient0,
              {
                borderRadius: borderRadius ?? 20,
              },
            ]}
          />
        )}

        <View style={[styles.view1]}>
          <Image source={leftIconSource}></Image>
          <View style={[styles.view2]}></View>
          <Text style={[styles.text0, titleStyle]}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
