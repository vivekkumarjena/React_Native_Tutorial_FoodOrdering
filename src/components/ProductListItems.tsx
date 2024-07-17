import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@/src/constants/Colors';

// const product = products[1];

const ProductListItems = ({ product }) => {
  console.log(product)
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{'$' + product.price}</Text>
    </View>
  );
}

export default ProductListItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 900,
  },

  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  },

  image: {
    width: '100%',
    aspectRatio: 1,

  }
});
