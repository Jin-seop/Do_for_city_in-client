import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

function Write() {
  const [image, setImage] = useState(null);

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
        placeholder="글쓰기"
        style={{
          borderWidth: 0.8,
          width: '100%',
          height: '50%',
          paddingLeft: 30,
        }}
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
          console.log(1);
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
      >
        <Text style={{ color: 'white' }}>글 작성하기</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Write;
