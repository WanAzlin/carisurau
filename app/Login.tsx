import { StyleSheet, Text, View,  Pressable, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { Link,  } from 'expo-router';
export default function login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter username to </Text>
      <Text style={styles.title1}>login</Text>
      <TextInput  placeholder='Enter Name' style={styles.TextInput}/>
      <Link href="/Update" asChild>
        <Pressable>
             {({ pressed }) => (
              <View  style={styles.button}>
              <Text style={styles.title2}>Login</Text>
        </View> 
        )}
        </Pressable>
      </Link>
    </View>
  )
}
const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 50,
        left: 15,
       },
       title1: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 2,
        color: "#EF6E7A",
        left: 15,
       },
       TextInput: {
        borderWidth: 2,
        borderColor: "#EF6E7A",
        width,
        height: 50,
        borderRadius: 5,
        paddingLeft: 15,
        fontSize: 25,
        marginTop: 25,
        marginLeft: 20,
    },
    button: {
        borderColor:'#000000',
        backgroundColor: "#EF6E7A",
        borderRadius: 10,
        elevation: 5,
        width: 150,
        height: 50,
        marginTop: 20,
        left: 100,
    },
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FFFFFF",
        left: 45,
        marginTop: 13,
       },
})