import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Icon = ({ label, focus }) => {
  switch (label) {
    case 'Home':
      return focus ? <Ionicons name="home" size={24} color="#00512C" /> : <Ionicons name="home-outline" size={24} color="black" />;
    case 'Favorite':
      //
    case 'Cart':
      //
    case 'Profile':
      //
  }
  return <MaterialIcons name="favorite-border" size={24} color="#00512C" />;
}

const ButtonTabs = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "white", paddingVertical: 15, paddingHorizontal: 50, justifyContent: "space-between"  }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            // style={{ flex: 1 }}
          >
            <Icon label = { label } focus = { isFocused }/>
            {/* <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>{label}</Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtonTabs

const styles = StyleSheet.create({})