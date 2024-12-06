import { View, Text, ImageBackground ,TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import AntDesign from '@expo/vector-icons/AntDesign';
const Landing = () => {

    const gotoLoginPage = () => {
      console.log("Goto Login");
    }

  return (
     <View style = {{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
      <LinearGradient colors={[ '#ff0000', '#ff3500', '#ff4d00', '#ff6000', '#ff7000', '#ff7f00', '#ff8c01', '#ff9913']} style = {{marginTop:-25,marginLeft:350,opacity:0.7,height:100,width:100,borderRadius:360}}/>
      <ImageBackground source={require('../assets/logo.png')} style = {{display:'flex',justifyContent:'center',alignItems:'center',marginTop:200,height:200,width:200}}></ImageBackground>
      <Text style = {{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',color:'#9ca3af',fontFamily:'Gabarito',marginTop:-40}}>Find Your Best Place In Sri Lanka.</Text>      
      <TouchableOpacity onPress={gotoLoginPage} style={{height:50,width:'85%',backgroundColor:'#2563eb',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:100}}>
        <Text style = {{fontFamily:'Gabarito',color:'#fff',textAlign:'center',fontWeight:600,fontSize:16}}>       Get Started     <AntDesign name="arrowright" size={15} color="#fff"/></Text>
      </TouchableOpacity>  
      <LinearGradient colors={['#00ceff', '#00b1f1', '#0095e2', '#0079d1', '#005cbd', '#0040a6', '#00248b', '#07006e']} style = {{marginTop:200,marginLeft:-350,height:100,width:100,borderRadius:360}}/>
    </View>
  )
}

export default Landing