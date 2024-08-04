import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Button from '@/src/components/Button'
import { DefaultPizzaimg } from '@/src/components/ProductListItems'
import Colors from '@/src/constants/Colors'
import * as ImagePicker from 'expo-image-picker'
import { Stack, useLocalSearchParams } from 'expo-router'

const CreateProductScreen = () => {
  const [errors, setErrors] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const {id} = useLocalSearchParams();
  const isUpdating = !!id;

  const resetFields = () => {
    setName('')
    setPrice('')
  }

  const validateinput = () => {
    if (!name) {
      setErrors('Name is a required field');
      return false;
    }
    if (!price) {
      setErrors('Price is a required field');
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors('Price must be a number');
      return false;
    }
    return true;
  }

  const onSubmit = () => {
    if(isUpdating){
      onUpdate()
    }
    else{
      onCreate()
    }
  }

  const onCreate = () => {
    if (!validateinput()) {
      return;
    }

    console.warn("Creating Product : ", name)

    //Save in the database

    resetFields();
  }

  const onUpdate = () => {
    if (!validateinput()) {
      return;
    }

    console.warn("Updating Product ")

    //Save in the database

    resetFields();
  }

  const onDelete = () => {
    console.warn("DELETING!!!!")
  }

  const confirmDelete = () => {
    Alert.alert('Confirm' , 'Are you sure you want to delete this product?' , [
      {
        text : 'Cancel,'
      },
      {
        text : 'Delete',
        style : 'destructive',
        onPress : onDelete,
      }
    ])
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: isUpdating ? 'Update Product' : 'Create Product'}} />

      <Image source={{ uri: image || DefaultPizzaimg }} style={styles.image} />
      <Text onPress={pickImage} style={styles.textButton}>Select An Image</Text>

      <Text style={styles.label}>Name*</Text>
      <TextInput value={name} onChangeText={setName} placeholder='Name' style={styles.input} />

      <Text style={styles.label}>Price*($)</Text>
      <TextInput value={price} onChangeText={setPrice} placeholder='9.99' style={styles.input} keyboardType='numeric' />

      <Text style={{ color: 'red' }}>*{errors}</Text>
      <Button onPress={onSubmit} text={ isUpdating ? 'Update' : 'Create'} />
      {isUpdating && <Text onPress={confirmDelete} style={styles.textButton}>Delete</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    color: 'grey',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20
  },
  label: {
    fontSize: 20,
    fontWeight: 600,
  },
  image: {
    width: '80%',
    aspectRatio: 1,
    resizeMode: 'contain',
    // margin:'auto',
    alignSelf:'center'
  },
  textButton:{
    fontSize:18,
    fontWeight:400,
    marginVertical:15,
    alignSelf:'center',
    color:Colors.light.tint
  }
})

export default CreateProductScreen