import React from 'react'
import {View,Text,TextInput,TouchableNativeFeedback,Image,ScrollView,StyleSheet,TouchableOpacity,FlatList,ImageBackground} from 'react-native'
import {Button} from 'native-base'



export default class Screen3 extends React.Component{
  state={
    teks:'',
    hasilnya:[]
  }
 
 render(){
    return(
      <View style={{flex:1}}>
      
    
      <View style={Styles.bag3}>
        <Text style={{color:'#696969'}}>
        Dzikir Pagi Petang 
        </Text>
      </View>


      <View style={{flex:1}}>
      {/* <ImageBackground source={require('../gambar/#art #colorful #iphonewallpaper.jpeg')} style={{height:'100%',width:'100%'}} /> */}
        <View style={{alignItems:'center',paddingTop:150}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('hal2')} style={Styles.bag9}>
              <Text style={{textAlign:'center',color:'#fff'}}>Dzikir pagi</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems:'center',paddingTop:100}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('hal3')} style={Styles.bag9}>
              <Text style={{textAlign:'center',color:'#fff'}}>Dzikir Petang</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View>
        
      </View>
        
      </View>
    )
  }
}

const Styles= StyleSheet.create({
  
  bag2:{height:45,
    width:45
  },
  bag1:{fontSize:18,
    fontWeight:'bold',
    color:'#fff'},

  bag5:{flex:1,
    backgroundColor:'#b8860b'
  },
  bag6:{height:50,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  bag7:{height:50,
    width:'80%',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  bag8:{height:45,
    width:45
  },
    bag3:{height:50,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff',
      elevation:20
  },
  bag9:{
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:7,
      width: '90%',
      backgroundColor: '#9400d3'
  }
})