import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Photoprofile, Location, Notification, Search, Filter } from "../../assets/";
import { TextInput } from "react-native-gesture-handler";
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
      {/* End TopMenu */}

      {/* Search */}
      <View style={{ flexDirection: "row", backgroundColor: "white", marginHorizontal: 30, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 30, justifyContent: "space-between", alignItems: "center", marginTop: 30 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={Search} />
          <TextInput placeholder="Search Coffee..." style={{ marginLeft: '25'}}></TextInput>
        </View>
        <View>
          <Image source={Filter} />
        </View>
      </View>
      {/* End Search */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
