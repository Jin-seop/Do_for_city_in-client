import React from 'react';
import { Image, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function Login(props) {
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
        }}
      />
      <TextInput
        placeholder="비밀번호"
        style={{
          borderWidth: 0.5,
          width: 230,
          height: 40,
          borderRadius: 5,
          marginTop: 15,
          marginBottom: 30,
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
          marginBottom: 15,
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
