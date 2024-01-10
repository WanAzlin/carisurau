import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo } from '@expo/vector-icons';
const Tab = createMaterialTopTabNavigator();
const settings = () => {
  return (
    
    <Tab.Navigator>
      
      <Tab.Screen name="Description" component={Description} />
      <Tab.Screen name="Safety" component={Safety} />
    
    </Tab.Navigator>
  );
}

const Description = () => {
  
  return <View style={{flex: 1, }} >
    
    <Image style={styles.img3}
               source={require("../../assets/images/img3.png")} />
        <View  style={styles.box1}>
        <View style ={{flexDirection: "row"}}>
        <Entypo name="location-pin" size={24} color="grey" style={styles.loc} />
        <Text style={styles.titloc2}>Surau Al-Ikhlas, Taman Berjawa</Text>
        <Text style={styles.titloc3}>2.5 km</Text>
        </View>
        <Text style={styles.titloc2}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or </Text>
        <Text  style={styles.titloc4}>web designs. The passage is attributed to an unknown typesetter in the 15th.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th</Text>
        </View>
       
  </View>
  
}
const Safety = () => {
  return <View style={{flex: 1, }} >
   

  </View>
}
const Test = () => {
  return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: 30}}> Login</Text>

  </View>
}
export default settings;

const styles = StyleSheet.create({
  img3: {
    
    marginLeft: 20,
    marginTop:20,
    
  },
  scrollView:{
    backgroundColor: "#FFFFFF"
  },
  box1: {
    backgroundColor: "#F4F4F4",
    width: 363,
    left: 20,
    height: 55
  },
  loc: {
    marginLeft: 15,
    paddingTop: 10,
  },
  titloc2: {
    paddingRight: 30,
    marginTop: 14,
    color: "grey"
    
  },
  titloc3: {
    left: 30,
    marginTop: 14,
    color: "grey"
    
  },
  titloc4: {
    paddingRight: 30,
    marginTop: 14,
    color: "grey",
    
    
  },
})