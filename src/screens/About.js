import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const About = () => {
  const {container, text, img} = styles
  return (
    <View style={container}>
      <Image source={require('../../assets/banner.png')} style={img} />
      <Text style={text}>
        Quizzle is a trivial game in which players are asked questions about different topics and they have to
        get as many correct answers as possible.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#57CC99',
    padding: 18
  },
  text: {
    color: 'white',
    fontSize: 26,
    fontStyle: 'italic'
  },
  img: {
    width: 300,
    height: 300
  }
})


export default About;
