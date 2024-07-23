import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const cartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.init}>cartScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    init:{
        fontSize:30,
        fontWeight:900,
        
    }
})

export default cartScreen