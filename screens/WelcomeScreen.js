import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import {withNavigation} from 'react-navigation'

export default class WelcomeScreen extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#bcc5e7'}}>
        <View>
        <Text style = {{fontSize:70,fontWeight:"bold",alignContent:"center",paddingTop:60}}>NGO Information App</Text>
        </View>
        <View style={{paddingTop:100,paddingLeft:100}}>
        <Image source={
          require("../assets/image1.jpg")
        }
        style={{width:500,height:300}}
        />
        </View>
        <View style={{alignItems:'center',paddingTop:60}}>
          <TouchableOpacity
          style={{backgroundColor:'#cfc0ea',width:150,height:30,borderColor:'black',borderWidth:4,borderRadius:10}}
          onPress={()=>{
            this.props.navigation.navigate('ListScreen')}}
          >
            <Text style={{fontSize:15,fontWeight:"bold",alignSelf:'center'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
