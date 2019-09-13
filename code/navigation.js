import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation'

import Screen1 from './screen'
import Screen2 from './screen3'
import Screen3 from './screen4'


const Route =createBottomTabNavigator({
    Home:{
        screen:Screen1,
         navigationOptions:()=>({
            title:'HOME'
          })
        
    },
    Lodas:{
        screen:Screen2,
         navigationOptions:()=>({
            title:'LODAS'
          })
    },
    L:{
        screen:Screen3,
         navigationOptions:()=>({
            title:'LODAS'
          })
    },
   
   
})

const Beranda=createStackNavigator({
    
        Home:{
            screen:Route,
            navigationOptions:()=>({
                title:'KitamusliM'
              })
            
        },
       
       
        
})

const Kate=createAppContainer(Beranda)
export default Kate