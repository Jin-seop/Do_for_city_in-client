import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Axios from 'axios';
import cityDark from '../assets/city_dark.jpg';

export default function EditUserInfo(props) {
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
      userId: props.navigation.state.params.userId,
      password: userPassword,
      email: userEmail,
    }).then((res) => {
      if (res.status === 201) {
        return alert('변경이 완료되었습니다');
      }
    });
  };
  return (
    <ImageBackground style={styles.imageBackground} source={cityDark} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.logo}>DO.SI.IN{'\n'}회원정보 수정</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputBox} placeholder="아이디">
            {props.navigation.state.params.userId}
          </Text>
          <TextInput
            style={styles.inputBox}
            secureTextEntry
            placeholder="비밀번호 8자 이상"
            onChange={(e) => {
              e.preventDefault();
              setUserPassword(e.nativeEvent.text);
            }}
          />
          <TextInput
            style={styles.inputBox}
            secureTextEntry
            placeholder="비밀번호 재확인"
            onChange={(e) => {
              e.preventDefault();
              setUserPasswordCheck(e.nativeEvent.text);
            }}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Email 입력"
            onChange={(e) => {
              e.preventDefault();
              setUserEmail(e.nativeEvent.text);
            }}
          />
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              props.navigation.navigate('Mypage');
              editUserInfoHandler();
            }}
          >
            <Text>수정하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              props.navigation.navigate('Mypage');
            }}
          >
            <Text>뒤로가기</Text>
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
  inputContainer: {
    position: 'relative',
    top: -40,
  },
  logo: {
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: '#F3ECA5',
    width: 220,
    height: 144,
    borderRadius: 5,
    top: -80,
    position: 'relative',
  },
  buttonView: {
    position: 'relative',
    width: 220,
    height: 35,
  },
  inputBox: {
    marginTop: 10,
    width: 220,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#888',
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    backgroundColor: '#F3ECA5',
    width: 220,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.1,
    marginTop: 20,
  },
});
