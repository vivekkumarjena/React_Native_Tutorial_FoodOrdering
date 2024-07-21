import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import React from 'react';

const productDetailScreen = () => {

  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 800, display: 'flex', justifyContent: 'center' }}>productDetailScreen for id: {id}</Text>
    </View>
  )
}

export default productDetailScreen