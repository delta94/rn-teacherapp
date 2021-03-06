import React, {Fragment} from 'react';
import {Text, View} from 'react-native';

import {PRIMARY_COLOR} from '../../constants';
import {MyShadow} from '../MyShadow';

import {styles} from './styles';

export const MyButton = ({
  icon,
  title = '',
  onPress = () => {},
  style,
  color,
  bold,
  opacity = 0.5,
}) => {
  const formatBackgroundColor = color + opacity * 100;
  return (
    <MyShadow
      style={[
        styles.buttonContainer,
        color ? {backgroundColor: formatBackgroundColor} : null,
        style,
      ]}
      color={color}
      size={10}
      onPress={onPress}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text
        style={[
          styles.buttonText,
          bold && styles.bold,
          color ? {color} : null,
          icon ? styles.left : null,
        ]}>
        {title}
      </Text>
    </MyShadow>
  );
};
