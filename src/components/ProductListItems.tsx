import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';
import { Link } from 'expo-router';

export const DefaultPizzaimg = "https://hips.hearstapps.com/hmg-prod/images/pizza-1631065682.jpg?crop=0.5xw:1xh;center,top&resize=1200:*"

type ProductListItemsProps = {
  product: Product;
};

const ProductListItems = ({ product }: ProductListItemsProps) => {
  console.log(product)
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image                                    //we can use pressable instead of view and use the onPress Function
          source={{ uri: product.image || DefaultPizzaimg }}
          style={styles.image}
          resizeMode='contain'    //So that the whole image is visible   ;  By default it is 'cover'
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{'$' + product.price}</Text>
      </Pressable>
    </Link>
  );
}

export default ProductListItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
    margin: 10,
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
