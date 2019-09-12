import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import  Data from '../Data Base/DSShalat.json'

export default class DSShalat extends React.Component {
  state = {
    Data
  }

  //untuk navigasi si pembuat kasih nama DSShalat
  onDetail = dataItem => {
    this.props.navigation.navigate('DSShalat', { detil: dataItem })
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
              //   id, diskripsi, arab, artinya,
              // kalo ada yg bingung bisa nanya ke si pembuat

              <View>
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
