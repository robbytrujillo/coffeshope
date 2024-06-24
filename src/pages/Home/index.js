import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Photoprofile, Location, Notification, Search, Filter, Coffee, GreenCoffee } from "../../assets/";
import { ScrollView, TextInput } from "react-native-gesture-handler";
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

      <View style={{ marginHorizontal: 30, marginTop: 15 }}>
        <Text style={{ fontWeight: 500, fontSize: 14 }}>Good Morning, Robby</Text>
      </View>
      {/* Search */}
      <View style={{ flexDirection: "row", backgroundColor: "white", marginHorizontal: 30, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 30, justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={Search} />
          <TextInput placeholder="Search Coffee..." style={{ marginLeft: "25" }}></TextInput>
        </View>
        <View>
          <Image source={Filter} />
        </View>
      </View>
      {/* End Search */}

      <View>
        <View>
          <Text>Categories</Text>
        </View>
        <ScrollView horizontal={true}>
          {/* menu */}
          <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: "#00582F", paddingVertical: 5, paddingHorizontal: 5, flexDirection: "row", alignItems: "center", borderRadius: 30 }}>
            <Image source={Coffee} />
            <Text style={{ color: "white", marginLeft: 5 }}>Cappucino</Text>
          </TouchableOpacity>
          {/* end menu */}

          {/* menu */}
          <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: "white", paddingVertical: 5, paddingHorizontal: 5, flexDirection: "row", alignItems: "center", borderRadius: 30, elevation: 2, shadowColor: "black" }}>
            <Image source={ GreenCoffee } />
            <Text style={{ color: "#00582F", marginLeft: 5 }}>Cappucino</Text>
          </TouchableOpacity>
          {/* end menu */}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
