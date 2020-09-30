import Axios from 'axios';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { step0 } from 'react-native/Libraries/Animated/src/Easing';

function SetUp(props) {
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setUserPasswordCheck] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const editUserInfoHandler = () => {
    const checkEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (
      userPassword.length === 0 ||
      userPasswordCheck.length === 0 ||
      userEmail.length === 0 ||
      userPassword !== userPasswordCheck
    ) {
      return alert('입력이 잘 못 되었습니다. 다시입력해 주세요');
    }

    if (userPassword.length < 8) {
      return alert('비밀번호를 8자 이상으로 해주세요');
    }

    if (!checkEmail.test(userEmail)) {
      return alert('이메일이 잘 못 되었습니다');
    }

    Axios.put('http://13.125.205.76:5000/mypage/setup', {
      userId: props.route.params.userId,
      password: userPassword,
      email: userEmail,
    }).then((res) => {
      if (res.status === 201) {
        props.navigation.goBack();
        return alert('변경이 완료되었습니다');
      }
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <View style={{ marginLeft: 30, marginBottom: 150 }}>
        <Text style={{ fontSize: 18 }}>
          아이디 : {props.route.params.userId}
        </Text>

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
          onChange={(e) => setUserPassword(e.nativeEvent.text)}
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
          onChange={(e) => setUserPasswordCheck(e.nativeEvent.text)}
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
          onChange={(e) => setUserEmail(e.nativeEvent.text)}
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
          onPress={editUserInfoHandler}
        >
          <Text style={{ color: 'white' }}>수정하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SetUp;
