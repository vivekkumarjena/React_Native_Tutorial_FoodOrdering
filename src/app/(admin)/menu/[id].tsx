import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useLocalSearchParams, Stack, useRouter, Link } from 'expo-router'
import products from '@/assets/data/products';
import { DefaultPizzaimg } from '@/src/components/ProductListItems';
import { useState } from 'react';
import Button from '@/src/components/Button';
import { useCart } from '@/src/providers/CartProvider';
import { PizzaSize } from '@/src/types';
import { FontAwesome } from '@expo/vector-icons';

// type productDetailScreenProps = {
//   product : Product
// };

const productDetailScreen = () => {

  const router = useRouter();

  const { id } = useLocalSearchParams();

  const { addItem } = useCart();

  const product = products.find((p) => p.id.toString() == id)

  if (!product) {
    return <Text>OOPS! Product not found</Text>
  }

  return (
    <View style={styles.container}>

      <Stack.Screen options={{
        title: 'Menu', headerRight: () => (
          <Link href={`/(admin)/menu/create?id=${id}`} asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="pencil"
                  size={25}
                  color='black'
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        )
      }} />


      <Stack.Screen options={{ title: product.name }} />
      <Image style={styles.image} source={{ uri: product.image || DefaultPizzaimg }}></Image>

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 30,
    fontWeight: 900,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  select_size: {
    fontSize: 20,
    fontWeight: 700
  },
  title: {
    fontSize: 30,
    fontWeight: 900,
    marginVertical: 20,
  }
})

export default productDetailScreen