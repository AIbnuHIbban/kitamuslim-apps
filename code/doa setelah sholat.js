import React from 'react'
import {View,Text,TextInput,TouchableNativeFeedback,Image,ScrollView,StyleSheet,TouchableOpacity,FlatList,YellowBox} from 'react-native'
import DSSholat from './DSSholat.json'


export default class Screen2 extends React.Component{
  state={
    DSSholat
  }
 
 render(){
  YellowBox.ignoreWarnings(['Encountered','ReferenceError']);
    return(
      <View style={{flex:1}}>
      
      <View style={Styles.bag3}>
        <Text style={{color:'#696969'}}>
        Doa Setelah Shalat
        </Text>
      </View>


      <View style={{flex:1}}>
      <FlatList 
                    data={this.state.DSSholat}
                    keyExtractor={(index,item) => toString()}
                    renderItem={({index,item}) => {
                        return(
                            <View>
                           
                                    <View style={{paddingTop:30}} >
                                    <View style={{flexDirection:'column'}}>
                                       
                                        <View style={{flexDirection:'row',paddingLeft:10}}>
                                        
                                        <View >
                                          <Text style={{padding:10,backgroundColor:'#FACB00',borderRadius:100,height:40,width:40,textAlign:'center',fontWeight:'bold'}}>{item.id}</Text>
                                        </View>

                                        <View style={{flexDirection:'column',paddingLeft:10}}>


                                        <View style={{paddingRight:60,paddingTop:30}}>
                                        <Text style={{fontSize:20}}>{item.arab}</Text>
                                        <View style={{paddingTop:20}}>
                                        <Text >{item.artinya}</Text>
                                        </View>
                                        
                                        </View>

                                        </View>
                                        </View>
                                    </View>    

                                    </View>
                                  
                                   
                                    
                               
                            </View>
                        )
                    }}
                />
       
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
      elevation:40
    },
})