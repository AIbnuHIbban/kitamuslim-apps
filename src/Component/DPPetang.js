import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Data from '../Data Base/DPPagi.json'

export default class DPPetang extends React.Component {
  state = {
    Data
  }

  //untuk navigasi si pembuat kasih nama DDPetang
  onDetail = dataItem => {
    this.props.navigation.navigate('DPPetang', { detil: dataItem })
  }
  render () {
    return (
      <View>
        <FlatList
          data={this.state.Data}
          keyExtractor={(index, item) => index.toString()}
          renderItem={({ index, item }) => {
            return (

              // Data.json berisi:
              //   id, arab, artinya
              // kalo ada yg bingung bisa nanya ke si pembuat

              <View>
                <Text>{item.id}</Text>
                <Text>{item.arab}</Text>
                <Text>{item.artinya}</Text>
              </View>
            )
          }}
        />
      </View>
    )
  }
}

const Style = StyleSheet.create({})
