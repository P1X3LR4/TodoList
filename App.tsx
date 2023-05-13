/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Text,
  View,
} from 'react-native';

export default function App(): JSX.Element {
  
  return (
    <View className='flex-1 items-center justify-center bg-zinc-900'>
      <Text className='text-2xl font-bold text-zinc-50'>TODO LIST</Text>
      <Icon name="add" size={40} color="#FFF" />
    </View>
  );
}