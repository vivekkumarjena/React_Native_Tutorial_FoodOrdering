import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useLocalSearchParams, Stack } from 'expo-router'
import products from '@/assets/data/products';
import { DefaultPizzaimg } from '@/src/components/ProductListItems';
import { useState } from 'react';
import Button from '@/src/components/Button';

// type productDetailScreenProps = {
//   product : Product
// };

const sizes = ['S', 'M', 'L', 'XL']

const productDetailScreen = () => {

  const { id } = useLocalSearchParams();

  const [selectedSize, setselectedSize] = useState('M')

  const addtoCart = ()=>{
    console.warn('Added to the Cart , size: ',selectedSize)
  }

  const product = products.find((p) => p.id.toString() == id)

  if (!product) {
    return <Text>OOPS! Product not found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image style={styles.image} source={{ uri: product.image || DefaultPizzaimg }}></Image>
      <Text style={styles.select_size}>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => { setselectedSize(size) }}
            key={size} style={[styles.size, { backgroundColor: selectedSize == size ? 'black' : 'white' }]}>

            <Text style={[styles.sizeText, { color: selectedSize == size ? 'white' : 'grey' }]}>{size}</Text>

          </Pressable>

        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>

      <Button onPress={addtoCart} text='Add to Cart'  />
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
    marginTop:'auto'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10
  },
  sizeText: {
    fontSize: 20,
    fontWeight: 500
  },
  select_size: {
    fontSize: 20,
    fontWeight: 700
  }
})

export default productDetailScreen