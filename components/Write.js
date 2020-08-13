import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import cityDark from '../assets/city_dark.jpg';

export default function Write(props) {
  return (
    <ImageBackground style={styles.imageBackground} source={cityDark} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.logo}>DO.SI.IN{'\n'}내 도시락 올리기</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="제목" style={styles.titleInput} />
          <TextInput placeholder="본문" style={styles.bodyInput} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.buttonText}>사진첨부</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => props.navigation.navigate('PostPage')}
          >
            <Text style={styles.buttonText}>글올리기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: '#F3ECA5',
    width: 220,
    height: 100,
    borderRadius: 5,
    top: 80,
    position: 'absolute',
  },
  inputContainer: {
    position: 'absolute',
    top: 210,
  },
  titleInput: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  bodyInput: {
    width: 250,
    height: 220,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    top: 510,
    position: 'absolute',
    width: 240,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    width: 80,
    backgroundColor: '#F3ECA5',
    borderRadius: 5,
  },
  buttonText: {
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
