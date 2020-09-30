import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function Login(props) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    Axios.post('http://13.125.205.76:5000/signin', {
      userId,
      password,
    })
      .then((res) => {
        if (res.status === 201) {
          alert('로그인 성공');
          props.navigation.navigate('마이페이지', { userId });
        }
      })
      .catch((err) => alert('유저정보가 잘 못 되었습니다.'));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <TextInput
        placeholder="아이디"
        style={{
          borderWidth: 0.5,
          width: 230,
          height: 40,
          borderRadius: 5,
          marginTop: 150,
          paddingLeft: 10,
        }}
        onChange={(e) => setUserId(e.nativeEvent.text)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="비밀번호"
        style={{
          borderWidth: 0.5,
          width: 230,
          height: 40,
          borderRadius: 5,
          marginTop: 15,
          marginBottom: 30,
          paddingLeft: 10,
        }}
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#2D3664',
          height: 40,
          width: 230,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          marginBottom: 15,
        }}
        onPress={() => {
          loginHandler();
        }}
      >
        <Text style={{ color: 'white' }}>로그인</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          height: 40,
          width: 230,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          borderWidth: 1,
        }}
        onPress={() => props.navigation.navigate('회원가입')}
      >
        <Text style={{ color: 'black' }}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
