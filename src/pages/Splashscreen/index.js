import { Image, ImageBackground, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { Backgrounds, Splashs } from '../../assets/images'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Splashscreen = () => {
  return (
    <View style={{ flex: 1 }}>
        <ImageBackground source={Backgrounds} style={{ flex: 1 }}>
          <View style={{ marginTop: 90 }}>
            <Image source={Splashs} />
          </View>
          <View>
            <Text style={{ fontSize: 24, fontweight: '600', color: 'white' }}>Coffe So good, your taste buds will love its</Text>
          </View>
          <View>
            <Text>The best grain, the finest roas, the most powerful flavor.</Text>
          </View>
          <TouchableOpacity>
            <Text>Get started</Text>
          </TouchableOpacity>
        </ImageBackground>
    </View>
  );
}

export default Splashscreen

const styles = StyleSheet.create({})