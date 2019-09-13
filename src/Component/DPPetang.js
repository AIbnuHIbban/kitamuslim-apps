import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import Pagi from '../Data Base/DPagi.json'
import Petang from '../Data Base/DPetang.json'
import Hadist from '../Data Base/hadisDPP.json'


export default class DPPetang extends React.Component {
  state = {
    Pagi,
    Petang,
    Hadist
    
  }

  //untuk navigasi si pembuat kasih nama DDPetang
  onDetail = dataItem => {
    this.props.navigation.navigate('DPPetang', { detil: dataItem })
  }
  render () {
    return (
      <View>
      <ScrollView>
      <Text>Firman Allah dan Hadist Tentang Keutamaan Dzikir Pagi dan Sore </Text>
       <FlatList
          data={this.state.Hadist}
          keyExtractor={(index, item) => index.toString()}
          renderItem={({ index, item }) => {
            return (

              // Data.json berisi:
              //   id, arab, artinya
              // kalo ada yg bingung bisa nanya ke si pembuat

              <View>
                <Text>{item.arab}</Text>
                <Text>{item.artinya}</Text>
              </View>
            )
          }}
        />
      <Text>DZIKIR PAGI</Text>
        <FlatList
          data={this.state.Pagi}
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
                <Text>{item.deskripsi}</Text>
              </View>
            )
          }}
        />
        <Text>DZIKIR PETANG</Text>
        <FlatList
          data={this.state.Petang}
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
                <Text>{item.deskripsi}</Text>
              </View>
            )
          }}
        />
        </ScrollView>
      </View>
    )
  }
}

const Style = StyleSheet.create({})
