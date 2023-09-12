//rnfe
import { Text, View, ImageBackground, Dimensions, StyleSheet, ActivityIndicator,Image} from 'react-native'
import React, { useState, useEffect } from 'react'
import { BarIndicator, } from 'react-native-indicators';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import About from './Screens/About';
import Home from './Screens/Home';
import Mapps from './Screens/Mapps';








const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Drawer.Screen name="About" component={About} options={{headerStyle:{backgroundColor: 'gray',}}}/>
    </Drawer.Navigator>
  );
}

const App = () => {

  useEffect(() => {
    startLoading();
  }, []);

  const [loading, setLoading] = useState(false);
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  return (
    <ImageBackground source={require('./images/3.1.jpg')} resizeMode="cover"style={styles.image}>
      { loading ? (
    <View style={styles.container}>

      <View style={{marginTop:60}}>
        <Text style={styles.view}>Welcome To</Text>
        <Text style={styles.view}>Thamba</Text>
        <Text style={styles.view3}>Panni</Text>
      </View>
      <View style={styles.view2}>
        <BarIndicator color='white'/>
        <View style={{alignItems:"center", textAlign:"center", marginTop:30}}>
        <Image source={require("./images/logo.png")} style={{alignItems:"center",width:180, height:180}}/>
        </View>
      </View>
      <View>
        <Text style={{fontSize:24, marginTop:200, color:"white", fontWeight:"bold", textAlign:"center",fontFamily: "serif"}}>Powerd By AMAD</Text>
      </View>
  </View>):(


    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )}
    </ImageBackground>
  );

  
  
}





const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    height: screenHeight,
    width: screenWidth,
  },
  view: {
    fontSize: 52,
    textAlign: "center",
    color: 'white',
    fontWeight: "bold",
    fontFamily: "serif"
  },
  view3: {
    fontSize: 42,
    textAlign: "center",
    color: 'white',
    fontWeight: "bold",
    fontFamily: "serif"
  },
   view2: {
    marginTop: 40
  }


})
export default App


