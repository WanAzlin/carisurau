import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Tab = createMaterialTopTabNavigator();
const settings = () => {
  return (
    
    <Tab.Navigator>
      
      <Tab.Screen name="Description" component={Description} />
      <Tab.Screen name="Safety" component={Safety} />
      <Tab.Screen name="Reviews" component={Reviews} />
    </Tab.Navigator>
  );
}

const Description = () => {
  
  return <View style={{flex: 1, backgroundColor: "#FFFFFF" }} >
    
    <Image style={styles.img3}
               source={require("../assets/images/img3.png")} />
        <View  style={styles.box1}>
        <View style ={{flexDirection: "row"}}>
        <Entypo name="location-pin" size={24} color="grey" style={styles.loc} />
        <Text style={styles.titloc2}>Surau Al-Ikhlas, Taman Berjawa</Text>
        <Text style={styles.titloc3}>2.5 km</Text>
        </View>
        <Text style={styles.titloc7}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, </Text>
        <Text style={styles.titloc4}>as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown. laying out print,  </Text>
        <Text style={styles.titloc4}>as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown,laying out print,  </Text>
        </View>
       
  </View>
  
}
const Safety = () => {
  return <View style={{flex: 1,backgroundColor: "#FFFFFF"}} >
   
   <Image style={styles.img4}
               source={require("../assets/images/cctv.png")} />
    <Text style={styles.titloc6}> Equipped with CCTV</Text>
    <Text style={styles.titloc5}>as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown. laying out print,  </Text>
    <Image style={styles.img4}
               source={require("../assets/images/guard.png")} />
    <Text style={styles.titloc6}> Secured by Guards</Text>
    <Text style={styles.titloc5}>as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown. laying out print,  </Text>
  </View>
}
const Reviews = () => {
  return <View style={{flex: 1, backgroundColor: "#FFFFFF" }} >
      <View style={styles.box}>
        <View style ={{flexDirection: "row"}}>
        <Image style={styles.iC2}
               source={require("../assets/images/av4.png")} /> 
        <Text style={styles.titloc9}> Alin</Text>
        <Text style={styles.titloc12}>5  </Text>
        <Entypo name="star" size={20}   style={styles.clock} color="red" />
        <Entypo name="star" size={20}   style={styles.clock1} color="red" />
        <Entypo name="star" size={20}   style={styles.clock1} color="red" />
    
       
   </View >
   <Text style={styles.titloc11}>as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown. laying out print,  </Text>
   </View>
   <View style={styles.box}>
        <View style ={{flexDirection: "row"}}>
        <Image style={styles.iC2}
               source={require("../assets/images/av5.png")} /> 
        <Text style={styles.titloc9}> Iffah</Text>
        <Text style={styles.titloc12}>5  </Text>
        <Entypo name="star" size={20}   style={styles.clock} color="red" />
        <Entypo name="star" size={20}   style={styles.clock1} color="red" />
        <Entypo name="star" size={20}   style={styles.clock1} color="red" />
        
    
       
   </View >
   <Text style={styles.titloc11}>as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown. laying out print,  </Text>
   </View>
    
    
  </View>
}
export default settings;

const styles = StyleSheet.create({
  img3: {
    
    marginLeft: 20,
    marginTop:20,
    
  },
  img4: {
    alignSelf: "center",
    width: 130,
    height: 110,
    marginTop: 30,
  },
  img5: {
    marginLeft: 1,
    width: 35,
    height: 35,
    marginTop: 32,
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
    paddingTop: 15,
    color: "grey"
    
  },
  titloc3: {
    left: 30,
    marginTop: 14,
    color: "grey"
    
  },
  titloc4: {
    paddingRight: 30,
    marginTop: 2,
    color: "grey",
    
    
  },
  titloc5: {
    paddingLeft: 30,
    marginTop: 2,
    color: "grey",
    
    
  },
  titloc6: {
 
    paddingTop: 34,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  titloc7: {
    paddingRight: 30,
    paddingTop: 35,
    color: "grey"
    
  },
  titloc8: {
    fontSize: 25,
    paddingLeft: 30,
    paddingTop: 35,
    fontWeight: "bold",
    
  },
  cyl: {
    marginLeft: 20,
    marginRight: 15,
    borderColor:'#000000',
    backgroundColor: "#ECECEC",
    
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
    paddingVertical: 55,
    paddingHorizontal: 20,
    marginTop: 30,
    
  },
  iC2: {
    width: 60,
    height: 60,
    marginLeft: 20,
    marginTop:20,
    borderRadius: 50,
   
  },
  titloc9: {
 
    paddingTop: 30,
    fontWeight: "bold",
    paddingLeft: 10
    
  },

  titloc10: {
    fontSize: 25,
    marginRight: 59,
    paddingTop: 40,
   justifyContent: "flex-end",
    fontWeight: "bold",
    
  },
  star:{
    alignSelf: "flex-end",
    paddingTop:20,
  },
  titloc11: {
    paddingLeft: 30,
    marginTop: 12,
    color: "grey",
    
    
  },
  box:{
    borderWidth:1,
    width: 360,
    height: 180,
    marginTop: 30,
    marginLeft: 20,
    borderRadius: 20,
    borderColor: "#EF6E7A",
  },
  titloc12: {
    paddingLeft: 140,
    marginTop: 25,
    color: "red",
    fontSize: 25,
    
  },
  clock:{
    
    marginTop: 30,
  },
  clock1:{
    paddingLeft:2,
    marginTop: 30,
  }
})