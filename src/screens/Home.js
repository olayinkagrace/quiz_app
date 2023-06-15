import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import Title from "../components/Title";

export default function Home({ navigation }) {
  const { container, bannerContainer, button, text, banner, plainText } = styles;
  return (
    <View style={container}>
      <View style={bannerContainer}>
        <Image
          source={require("../../assets/bulb.png")}
          style={banner}
          resizeMode='contain'
        />
         <Title titleText={'Quizzles'} />
      </View>
     
      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz")}
        style={button}
      >
        <Text style={text}>Play Now</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("About")}
        style={button}
      >
        <Text style={text}>About</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 300,
  },
  bannerContainer: {
    justifycontent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: '#1B1E65',
  },
  button: {
    width: "100%",
    backgroundColor: "#5938A6",
    padding: 16,
    borderRadius: 16,
    marginBottom: 30,
    textAlign: 'center',
    
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  alignItems: 'center'
  },
});
