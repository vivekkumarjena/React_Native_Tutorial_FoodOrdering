import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';

export const DefaultPizzaimg = "https://hips.hearstapps.com/hmg-prod/images/pizza-1631065682.jpg?crop=0.5xw:1xh;center,top&resize=1200:*"

type ProductListItemsProps = {
  product: Product;
};

const ProductListItems = ({ product }: ProductListItemsProps) => {
  console.log(product)
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || DefaultPizzaimg}} style={styles.image} />
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
