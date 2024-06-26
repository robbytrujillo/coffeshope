import { Image, navigation, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Backgrounds, Splashs } from "../../assets/images";
// import { TouchableOpacity } from 'react-native-gesture-handler'

const Splashscreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={Backgrounds} style={{ flex: 1 }}>
        <View style={{ marginTop: 60 }}>
          <Image source={Splashs} />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 24, fontWeight: "500", color: "white", paddingHorizontal: 100, textAlign: "center" }}>Coffe So good, your taste buds will love its</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 14, color: "white", textAlign: "center", paddingHorizontal: 90 }}>The best grain, the finest roas, the most powerful flavor.</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ backgroundColor: "#00512C", alignItems: "center", paddingHorizontal: 30, paddingVertical: 15, borderRadius: 30, marginHorizontal: 60, marginTop: 30 }}
          onPress={() => navigation.navigate("MainApp")}
        >
          <Text style={{ fontSize: 16, fontWeight: 600, color: "white" }}>Get started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({});
