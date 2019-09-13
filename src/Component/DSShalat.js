import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import  Data from '../Data Base/DSShalat.json'
import Hadist from '../Data Base/HadistDSS.json'

export default class DSShalat extends React.Component {
  state = {
    Data,
    Hadist
  }

  //untuk navigasi si pembuat kasih nama DSShalat
  onDetail = dataItem => {
    this.props.navigation.navigate('DSShalat', { detil: dataItem })
  }
  render () {
    return (
      <View>
      <ScrollView>
      <FlatList
          data={this.state.Hadist}
          keyExtractor={(index, item) => index.toString()}
          renderItem={({ index, item }) => {
            return (

              // Data.json berisi:
              //   id, diskripsi, arab, artinya,
              // kalo ada yg bingung bisa nanya ke si pembuat

              <View>

                <Text>{item.deskripsi}</Text>
                <Text>{item.arab}</Text>
                <Text>{item.artinya}</Text>
                
              </View>
            )
          }}
        />
        <Text>Berikut ini adalah bacaan-bacaan dzikir yang shahih setelah shalat fardhu, yang sesuai dengan sunnah Rasulullah Shallallaahu ‘alaihi wasallam. (dibaca setelah salam).</Text>
        <FlatList
          data={this.state.Data}
          keyExtractor={(index, item) => index.toString()}
          renderItem={({ index, item }) => {
            return (

              // Data.json berisi:
              //   id, diskripsi, arab, artinya,
              // kalo ada yg bingung bisa nanya ke si pembuat

              <View>
                <Text>{item.id}</Text>
                <Text>{item.arab}</Text>
                <Text>{item.artinya}</Text>
                <Text>{item.deskripsi}</Text>
              </View>
            )
          }}
        />
        <Text>Demikian bacaan dzikir yang shahih setelah shalat fardhu sesuai dengan sunnah Rasulullah Shallallaahu ‘alaihi wasallam. Mudah-mudahan dapat memberi kebaikan dan manfaat bagi kita semua.</Text>
        </ScrollView>
      </View>
    )
  }
}

const Style = StyleSheet.create({})
