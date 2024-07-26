import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useCart } from '@/src/providers/CartProvider';
import CartListItem from '@/src/components/CartListItem';

const cartScreen = () => {

  // const { items } = useContext(CartContext); we would have to write this line if we imported both useContext and CartContext but we created a function inside CartProvider to export the same, now we simply have to import that function in this cart.tsx

  const { items } = useCart();

  return (
  <View>
    <FlatList data={items} renderItem={({item}) => <CartListItem cartItem={item} />} />
  </View>
  );
};



export default cartScreen