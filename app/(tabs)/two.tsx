import { StyleSheet, Text, View, Image, Pressable, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { Link,  } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View style ={{flexDirection: "row"}}>
        <Text style={styles.title}>Welcome, Alin</Text>
        <Link href="/Intro" asChild>
        <Pressable>
             {({ pressed }) => (
               <Image style={styles.iC2}
               source={require("../../assets/images/av4.png")} /> 
        )}
        </Pressable>
      </Link>
      
      </View>
      <Text style={styles.title2}>Tuedays, 27 November 2019</Text>
      <TextInput
      
        style={styles.searchBar}
        placeholder='Search here..'
      />
      <Text style={styles.title3}>We Found 5 Spots</Text>
      <Image style={styles.img3}
               source={require("../../assets/images/img3.png")} />
      <View style ={{flexDirection: "row"}}>
      <View  style={styles.box1}>
      <Link href="/detail1" asChild>
        <Pressable>
             {({ pressed }) => (
              <Text style={styles.title3}>Surau Al-Ikhlas</Text>
       
        )}
        </Pressable>
      </Link>
        
        <View style ={{flexDirection: "row"}}>
        <Entypo name="location-pin" size={24} color="black" style={styles.loc} />
        <Text style={styles.titloc}>Petaling, Selangor</Text>
        </View>
      </View>
      <View  style={styles.box2}>
        <Text style={styles.title4}>2.5 km</Text>
      </View>
      
      </View>
      <Image style={styles.img3}
               source={require("../../assets/images/img4.png")} />
       <View style ={{flexDirection: "row"}}>
      <View  style={styles.box1}>
        <Text style={styles.title3}>Surau Sentosa</Text>
        <View style ={{flexDirection: "row"}}>
        <Entypo name="location-pin" size={24} color="black" style={styles.loc} />
        <Text style={styles.titloc}>Sg Buloh, Selangor</Text>
        </View>
      </View>
      <View  style={styles.box2}>
        <Text style={styles.title4}>3.2 km</Text>
        
      </View>
      
      </View>
      <MaterialCommunityIcons name="restart" size={24} color="#EF6E7A" style={styles.title5} />
      <View style={styles.container}>
        
      <View style={styles.content}>
      <Text style={styles.title4}>3.2 km</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.loctit2}>Your Location</Text>
        <View style ={{flexDirection: "row"}}>
        <Entypo name="location-pin" size={24} color="white" style={styles.loc1} />
        <Text style={styles.titloc2}>Kampung Jaya Industrial Area, Petaling,</Text>
        <AntDesign name="right" size={24} color="white" />
        </View>  
      </View>  
      
      </View>      
    
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  box: {
   
  },
  scrollView: {
    backgroundColor: "#FFFFFF"
  },
  box1: {
    borderWidth: 0.5,
    borderColor: "#EF6E7A",
    width: 245,
    left: 25,
    height: 70
  },
  box2: {
    borderWidth: 0.5,
    borderColor: "#707B7C",
    width: 120,
    left: 21.5,
    height: 70,
    backgroundColor: "#EF6E7A"
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 30,
  },
  title2: {
    fontSize: 15,
    color:"#757373",
    marginLeft: 20,
    paddingBottom: 10,
  },
  title3: {
    fontSize: 15,
    color:"#000000",
    marginLeft: 20,
    paddingTop: 15,
    fontWeight: 'bold',
  },
  title4: {
    fontSize: 25,
    color:"#FFFFFF",
    marginLeft: 20,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  title5: {
    
    alignSelf: "center",
    paddingTop: 15
    
   
  },
  iC2: {
    width: 60,
    height: 60,
    marginLeft: 90,
    marginTop:15,
    borderRadius: 50,
  },
  searchBar: {
    borderWidth: 0.5,
    borderColor: "#707B7C",
    height: 40,
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 20,
  },
  img3: {
    
    marginLeft: 25,
    marginTop:20,
    
  },
  loc: {
    marginLeft: 15,
  },
  loc1: {
    marginRight: 5,
  },
  titloc: {
    
    marginTop: 5,
  },
  titloc2: {
    paddingRight: 30,
    marginTop: 5,
    color: "#FFFFFF",
  },
  container2: {
    flex: 1,
    backgroundColor: "#EF6E7A",
    
  },
  content: {
    flex: 1
  },
  footer: {
    backgroundColor: "#EF6E7A",
    padding: 20,
    
   
  },
  loctit2: {
    color: "#FFFFFF",
  },
});

 
        
     
      