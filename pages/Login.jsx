import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style = {{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
      <ImageBackground source={require('../assets/logo.png')} style = {{display:'flex',justifyContent:'center',alignItems:'center',marginTop:150,height:200,width:200}}></ImageBackground>
      <Text style = {{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',color:'#9ca3af',fontFamily:'Gabarito',marginTop:-40}}>Find Your Best Place In Sri Lanka.</Text>
      <Text style = {{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',fontFamily:'Gabarito',marginTop:50,fontSize:35}}>Sign In</Text>
        
    </View>
  )
}

export default Login