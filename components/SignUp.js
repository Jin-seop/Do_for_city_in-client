import Axios from 'axios';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function SignUp(props) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [email, setEmail] = useState('');

  const idCheckHandler = () => {
    if (userId.length === 0) {
      return alert('아이디를 입력해주세요');
    }
    if (userId.length < 5) {
      return alert('아이디를 5자 이상으로 해주세요');
    }
    Axios.post(
      'http://13.125.205.76:5000/signup/checkid',
      {
        userId,
      },
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
      .then((res) => {
        if (res.status === 200) {
          return alert('사용가능한 아이디입니다');
        }
      })
      .catch((err) => {
        alert('이미 존재하는 유저아이디 입니다.');
      });
  };

  const signUpHandler = () => {
    const checkEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (
      userId.length === 0 ||
      password.length === 0 ||
      checkPassword.length === 0 ||
      email.length === 0 ||
      password !== checkPassword
    ) {
      return alert('입력이 잘 못 되었습니다. 다시입력해 주세요');
    }
    if (userId.length < 5) {
      return alert('아이디를 5자 이상으로 해주세요');
    }
    if (password.length < 8) {
      return alert('비밀번호를 8자 이상으로 해주세요');
    }

    if (!checkEmail.test(email)) {
      return alert('이메일이 잘 못 되었습니다');
    }

    Axios.post('http://13.125.205.76:5000/signup', {
      userId,
      password,
      email,
    })
      .then((res) => {
        if (res.status === 201) {
          props.navigation.goBack();
          return alert('가입이 완료 되었습니다.');
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}
    >
      <View style={{ marginLeft: 30 }}>
        <Text style={{ fontSize: 18 }}>아이디</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
          }}
        >
          <TextInput
            placeholder="아이디"
            style={{
              borderWidth: 1,
              width: 200,
              borderRadius: 5,
              height: 40,
              paddingLeft: 10,
            }}
            onChange={(e) => setUserId(e.nativeEvent.text)}
          />
          <TouchableOpacity
            style={{
              borderRadius: 5,
              borderWidth: 1,
              width: 80,
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              marginLeft: 15,
            }}
            onPress={idCheckHandler}
          >
            <Text style={{ fontSize: 15 }}>중복확인</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 18, marginTop: 15 }}>비밀번호</Text>
        <TextInput
          placeholder="비밀번호"
          secureTextEntry={true}
          style={{
            borderWidth: 1,
            width: '80%',
            borderRadius: 5,
            height: 40,
            paddingLeft: 10,
          }}
          onChange={(e) => setPassword(e.nativeEvent.text)}
        />

        <Text style={{ fontSize: 18, marginTop: 15 }}>비밀번호 확인</Text>
        <TextInput
          placeholder="비밀번호 확인"
          secureTextEntry={true}
          style={{
            borderWidth: 1,
            width: '80%',
            borderRadius: 5,
            height: 40,
            paddingLeft: 10,
          }}
          onChange={(e) => setCheckPassword(e.nativeEvent.text)}
        />

        <Text style={{ fontSize: 18, marginTop: 15 }}>이메일</Text>
        <TextInput
          placeholder="이메일"
          style={{
            borderWidth: 1,
            width: '80%',
            borderRadius: 5,
            height: 40,
            paddingLeft: 10,
          }}
          onChange={(e) => setEmail(e.nativeEvent.text)}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#2D3664',
            height: 40,
            width: 250,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            marginTop: 40,
            marginLeft: 40,
          }}
          onPress={signUpHandler}
        >
          <Text style={{ color: 'white' }}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;
