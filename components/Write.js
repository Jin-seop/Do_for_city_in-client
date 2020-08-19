import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import cityDark from '../assets/city_dark.jpg';

export default function Write(props) {
  const [contentTitle, setContentTitle] = useState('');
  const [contentBody, setContentBody] = useState('');

  const postContentHandler = () => {
    axios
      .post(
        'http://13.125.205.76:5000/contents/post',
        {
          title: contentTitle,
          contentBody,
        },
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then(function (res) {
        if (res.status === 200) {
          props.navigation.navigate('PostPage', {
            title: contentTitle,
            content: contentBody,
            userId: props.navigation.state.params.userId,
            createdAt: res.data.createdAt,
            id: res.data.id,
          });
        }
      })
      .catch(function (err) {
        alert(err);
      });
  };

  return (
    <ImageBackground style={styles.imageBackground} source={cityDark} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.logo}>DO.SI.IN{'\n'}내 도시락 올리기</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="제목"
            style={styles.titleInput}
            onChange={(e) => {
              e.preventDefault();
              setContentTitle(e.nativeEvent.text);
            }}
          />
          <TextInput
            placeholder="본문"
            style={styles.bodyInput}
            onChange={(e) => {
              e.preventDefault();
              setContentBody(e.nativeEvent.text);
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.buttonText}>사진첨부</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              props.navigation.navigate('PostPage', {
                userId: props.navigation.state.params.userId,
              });
              postContentHandler();
            }}
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
    top: -40,
    position: 'relative',
  },
  inputContainer: {
    position: 'relative',
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
    position: 'relative',
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
