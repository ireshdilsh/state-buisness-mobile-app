import { TouchableOpacity,View, Text, ImageBackground, Pressable } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from "react";

const Login = () => {

  const continueWithGoogle = () => {
    console.log("Continue with Google Button Clicked...")
  }

  const continueWithFacebook = () => {
    console.log("Continue with Facebook Button Clicked")
  }

  const gotoRegisterPage = () => {
    console.log("Go to Register");
  }

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
        Your Gateway to Finding the Perfect Home
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
        Discover the ultimate tool for homebuyers, renters, and real estate
        professionals.
      </Text>

      {/* continu with email button and continue with google button*/}
      <View style = {{marginTop:50,display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
      <TouchableOpacity onPress={continueWithGoogle} style = {{backgroundColor:'#fff',height:50,width:'85%',borderWidth:1,borderColor:'#000',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:8}}><Text style = {{fontWeight:700,color:'#000',fontFamily:'Gabarito'}}>     Continue with Google     <FontAwesome name="google" size={15} color="black"/></Text></TouchableOpacity>
      </View>
      <View style = {{marginTop:10,display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
      <TouchableOpacity onPress={continueWithFacebook} style = {{backgroundColor:'#2563eb',height:50,width:'85%',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:8}}><Text style = {{color:'#fff',fontFamily:'Gabarito',fontWeight:700}}>     Continue with Facebook     <FontAwesome5 name="facebook" size={17} color="#fff"/></Text></TouchableOpacity>
      </View>

        <View style = {{marginTop:80,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Text style = {{fontFamily:'Gabarito',fontSize:15,color:'#9ca3af'}}>If you haven't an account ?</Text>
        <Pressable style = {{display:'flex',justifyContent:'center',alignItems:'center'}} onPress={gotoRegisterPage}><Text style = {{fontSize:15,fontFamily:'Gabarito',textAlign:'center',color:'#1d4ed8'}}> Create Account</Text></Pressable>
        </View>

    </View>
  );
};

export default Login;
