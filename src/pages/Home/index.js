import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Photoprofile, Location, Notification } from "../../assets/";
// import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* TopMenu */}
      <View style={{ flexDirection: "row", marginTop: 30, marginHorizontal: 30, justifyContent: "space-between", alignItems: "center" }}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={Photoprofile} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={Location} />
          <Text style={{ fontWeight: 500, fontSize: 12, marginLeft: 5 }}>Jakarta, Indonesia</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={Notification} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
