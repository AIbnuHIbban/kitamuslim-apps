import React from 'react'
import {View,Text,TextInput,TouchableNativeFeedback,Image,ScrollView,StyleSheet} from 'react-native'



export default class Screen01 extends React.Component{
  state={
    teks:'',
    hasilnya:[]
  }
 
 render(){
    return(
      <View style={{flex:1}}>
      
      <View style={Styles.bag3}>
        <Text>
        tata cara sholat
        </Text>
      </View>


      <View style={Styles.bag5}>
        <Text>feefe</Text>
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
      backgroundColor:'#7fffd4',
      elevation:20
    },
})