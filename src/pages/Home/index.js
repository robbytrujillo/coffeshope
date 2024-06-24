import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Photoprofile } from '../../assets/images'

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>Home</Text> */}
      <View>
        <View>
          <Image source={Photoprofile} />
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})