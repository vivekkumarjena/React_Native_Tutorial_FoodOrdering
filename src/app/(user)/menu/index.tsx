import {FlatList} from 'react-native';
import products from '@/assets/data/products';
import ProductListItems from '@/src/components/ProductListItems';

export default function MenuScreen() {
  return (
    // <View>
    //   {/* <ProductListItems product={products[0]} />
    //   <ProductListItems product={products[1]} /> */}

      
    // </View>
    <FlatList
    data={products}
    renderItem = { ({item}) => <ProductListItems product={item}/>}
    numColumns={2}
    // contentContainerStyle = {{gap:10 , padding:10}}
    // columnWrapperStyle = {{gap:10}}                      we can do this or in style we can give margin to the container
    />
  );
}