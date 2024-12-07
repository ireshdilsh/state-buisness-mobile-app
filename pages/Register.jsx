import { View, Text, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const continueWithFacebook = () => {
    console.log("Clik the continue with facebook button...")
}

const continueWithGoogle = () => {
    console.log("Clik the continue with google button...");
}

const gotoLoginPage = () => {
    console.log("Clik the goto Login page button...");
}

const Register = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <ImageBackground
        source={require("../assets/logo.png")}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120,
          height: 200,
          width: 200,
        }}
      ></ImageBackground>
      <Text
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#9ca3af",
          fontFamily: "Gabarito",
          marginTop: -40,
        }}
      >
        Find Your Best Place In Sri Lanka.
      </Text>
      <Text
        style={{
          fontFamily: "Gabarito",
          fontSize: 18,
          marginTop: 50,
          textAlign: "center",
        }}
      >
        Welcome to Your New Home
      </Text>
      <Text
        style={{
          fontFamily: "Gabarito",
          fontSize: 15,
          textAlign: "center",
          color: "#9ca3af",
          padding: 18,
        }}
      >
        Create your account to get started on your journey to finding the perfect property.
      </Text>

      {/* continu with email button and continue with google button*/}
      <View style = {{marginTop:50,display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
      <TouchableOpacity onPress={continueWithGoogle} style = {{backgroundColor:'#fff',height:50,width:'85%',borderWidth:1,borderColor:'#000',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:8}}><Text style = {{fontWeight:700,color:'#000',fontFamily:'Gabarito'}}>     Continue with Google     <FontAwesome name="google" size={15} color="black"/></Text></TouchableOpacity>
      </View>
      <View style = {{marginTop:10,display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
      <TouchableOpacity onPress={continueWithFacebook} style = {{backgroundColor:'#2563eb',height:50,width:'85%',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:8}}><Text style = {{color:'#fff',fontFamily:'Gabarito',fontWeight:700}}>     Continue with Facebook     <FontAwesome5 name="facebook" size={17} color="#fff"/></Text></TouchableOpacity>
      </View>

        <View style = {{marginTop:80,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Text style = {{fontFamily:'Gabarito',fontSize:15,color:'#9ca3af'}}>If you already haven an account ?</Text>
        <Pressable style = {{marginTop:3,display:'flex',justifyContent:'center',alignItems:'center'}} onPress={gotoLoginPage}><Text style = {{fontSize:15,fontFamily:'Gabarito',textAlign:'center',color:'#1d4ed8'}}> Goto Login</Text></Pressable>
        </View>
    </View>
  )
}

export default Register