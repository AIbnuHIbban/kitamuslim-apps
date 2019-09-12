import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import Data from '../Data Base/TCShalat.json'

export default class TCShalat extends React.Component {
  state = {
    Data
  }

  //untuk navigasi si pembuat kasih nama TCShalat
  onDetail = dataItem => {
    this.props.navigation.navigate('TCShalat', { detil: dataItem })
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
              //   id, title, arab, artinya, image
              // kalo ada yg bingung bisa nanya ke si pembuat

              <View>

                  <Text>{item.id}</Text>
                  <Text>{item.title}</Text>
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: item.image }}
                  />
                  <Text>{item.diskripsi}</Text>
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
