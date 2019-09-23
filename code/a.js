import React from 'react'
import {View,StyleSheet,Text,Image} from 'react-native'
import { createAppContainer,createStackNavigator } from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



import Screen2 from './doa setelah sholat'
import Screen3 from './screen3'
import Screen01 from './hal1'
import Screen02 from './hal2'
import Screen03 from './hal3'

const tabBarIcon = name => ({activeTintColor}) => (
    <MaterialIcons 
        style={{backgroundColor:'transparent'}}
        name={name}
        color={activeTintColor}
        size={24}
    />
)




const Macan = createMaterialBottomTabNavigator({
    Sholat:{
        screen:Screen01,
        navigationOptions:{
            tabBarIcon:({tintColor}) => <MaterialIcons name='perm-identity' color={tintColor} size={25}/>,
            tabBarColor : '#004280'
        }
       
    },
    Doa:{
        screen:Screen2,
        navigationOptions:{
            tabBarIcon:({tintColor}) => <MaterialIcons name='local-library' color={tintColor} size={25}/>,
            tabBarColor : '#FACB00'
           
        }
    },
    Dzikir:{
        screen:Screen3,
        navigationOptions:{
            tabBarIcon:({tintColor}) => <MaterialIcons name='layers' color={tintColor} size={25}/>,
            tabBarColor :'#9400d3'
        }
    },
   
},
{
    shifting:true,
    activeTintColor:'#fff',
    inactiveTintColor:'#fff',
    barStyle:{
        borderTopWidth:StyleSheet.hairlineWidth,
        borderStyle:'solid',
        borderColor:'#8a2b',
    },
})
 const Beranda = createStackNavigator({
     Home:{
         screen:Macan,
         navigationOptions:() =>({
             header:null
         })

     },
     hal2:{
        screen:Screen02,
        navigationOptions:()=>({
            header:null
        })
    },
    hal3:{
        screen:Screen03,
        navigationOptions:()=>({
            header:null
        })
    },
 }) 

 const Kate =createAppContainer(Beranda)
 export default Kate

const Styles=StyleSheet.create({
    semabarang:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})








