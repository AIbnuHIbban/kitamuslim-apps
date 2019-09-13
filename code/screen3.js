import React from 'react'
import {View,Text,TextInput,TouchableNativeFeedback,Image,ScrollView,StyleSheet,TouchableOpacity,FlatList} from 'react-native'



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
        Dzikir Pagi Petang Sore
        </Text>
      </View>


      <View style={{flex:1}}>
        <View style={{alignItems:'center',paddingTop:80}}>
       <Image source={require('../gambar/man-reading.png')} style={{height:100,width:100}}/>
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
    width:45},
    bag3:{height:50,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff',
      elevation:20
    },
})