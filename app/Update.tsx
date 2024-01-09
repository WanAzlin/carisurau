import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Link,  } from 'expo-router';

const update = () => {
  return (
    <View style={styles.container}>
        <Link href="/two" asChild>
        <Pressable>
             {({ pressed }) => (
               <Text style={styles.title}>Updating your location... </Text>
        )}
      </Pressable>
      </Link>
      <Image style={styles.pic1}
        source={require("../assets/images/r1.png")} />
      <Image style={styles.pic2}
        source={require("../assets/images/img2.png")} />
    
    </View>
  )
}

export default update;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF"
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#EF6E7A",
       },
       pic1:{
        width: 30,
        height: 30,
    },
     pic2:{
        right: 10,
    },
})