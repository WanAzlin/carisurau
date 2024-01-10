import React, {useState} from 'react';
import {View, Text,StyleSheet, TextInput, Dimensions, Pressable} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { Link,  } from 'expo-router';
export default function App() {
  
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Selangor', value: 'Selangor'},
        {label: 'Wilayah Persekutuan', value: 'Wilayah Persekutuan'},
        {label: 'Johor Bahru', value: 'Johor Bahru'},
    ]);

    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Help us to add surau if it is not the list</Text>
        <Text style={styles.title2}>Surau Name</Text>
        <TextInput  placeholder='Enter Name'  style={styles.TextInput}/>
        <Text style={styles.title2}>Direction</Text>
        <TextInput  style={styles.TextInput1}/>
        <Text style={styles.title}>Brief direction on guide to the surau.  eg. near the shop lot. etct</Text>
        <View  style={styles.box1}>
            <Text style={styles.title3}>upload image here</Text>
              <View  style={styles.box2}>
              <Text style={styles.title4}>Choose File</Text>
              </View>
              <Text style={styles.title4}>images up to 4MB, max 10 files</Text>
            </View>
        <Text style={styles.title2}>State</Text>
        <View style={{flex: 1}}>
            <View
                style={{
                    flex: 1,
                    paddingTop: 10,
                    paddingHorizontal: 15,
                }}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={'Choose a state.'}
                />
            </View>
            <Link href="/two" asChild>
        <Pressable>
             {({ pressed }) => (
              <View  style={styles.button}>
              <Text style={styles.title5}>Submit</Text>
        </View> 
        )}
        </Pressable>
      </Link>
        </View>
        </ScrollView>
    );
    
}
const width = Dimensions.get('window').width - 30;
const styles = StyleSheet.create({
  scrollView:{
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 15,
    color:"#757373",
    marginLeft: 20,
    paddingTop: 10,
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 30,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#000000",
    width,
    height: 45,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    marginTop: 15,
    marginLeft: 16,
    
},
TextInput1: {
  borderWidth: 1,
  borderColor: "#000000",
  width,
  height: 105,
  borderRadius: 10,
  paddingLeft: 15,
  fontSize: 18,
  marginTop: 15,
  marginLeft: 16,
  
},
box1:{
  borderWidth: 1,
  borderColor: "#000000",
  height: 130,
  width:370,
  alignSelf: 'center',
  marginTop: 20,
  borderRadius: 10,
},
title3: {
  fontSize: 15,
  color:"#757373",
  alignSelf: "center",
  paddingTop: 20,
},
title4: {
  fontSize: 13,
  
  alignSelf: "center",
  paddingTop: 10,
},
box2:{
  borderWidth: 1,
  borderColor: "#000000",
  height: 40,
  width:100,
  alignSelf: "center",
  marginTop: 10,
  
},
button: {
  borderColor:'#000000',
  backgroundColor: "#EF6E7A",
  borderRadius: 10,
  elevation: 5,
  width: 380,
  height: 50,
  marginTop: 20,
  left: 10,
},
title5: {
  fontSize: 20,
  fontWeight: 'bold',
  color: "#FFFFFF",
  alignSelf: "center",
  marginTop: 13,
 },
})