import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Axios from 'axios';

function Write(props) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      alert('첨부완료');
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'android') {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const requestPermisison = async () => {
    const response = await Permissions.askAsync(Permissions.CAMERA);
  };
  useEffect(() => {
    requestPermisison();
  }, []);
  const handleSubmit = () => {
    if (title === '' || content === '') {
      Alert.alert('게시물 정보를 입력해주세요.');
    } else if (!image) {
      alert('사진을 첨부해주세요');
    } else {
      const FormData = require('form-data');
      const formData = new FormData();
      formData.append('imgFile', {
        name: 'referenceFile',
        type: 'image/jpg',
        uri: image,
      });
      formData.append('title', title);
      formData.append('content', content);
      Axios.post('http://13.125.205.76:5000/contents/post', formData, {
        header: {
          'content-type': 'multipart/form-data',
        },
      })
        .then((res) => {
          if (res.status === 200) {
            alert('게시글 작성완료');
            props.navigation.navigate('Navigation', { 1: 1 });
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        height: '100%',
        paddingTop: 30,
      }}
    >
      <TextInput
        placeholder="제목"
        style={{
          borderWidth: 0.8,
          width: '100%',
          height: '10%',
          paddingLeft: 30,
        }}
        onChange={(e) => setTitle(e.nativeEvent.text)}
      />
      <TextInput
        placeholder="글쓰기"
        style={{
          borderWidth: 0.8,
          width: '100%',
          height: '50%',
          paddingLeft: 30,
        }}
        onChange={(e) => setContent(e.nativeEvent.text)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#2D3664',
          height: 40,
          width: 230,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          marginTop: 50,
        }}
        onPress={() => {
          pickImage();
        }}
      >
        <Text style={{ color: 'white' }}>사진 첨부</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#2D3664',
          height: 40,
          width: 230,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          marginTop: 50,
        }}
        onPress={handleSubmit}
      >
        <Text style={{ color: 'white' }}>글 작성하기</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Write;
