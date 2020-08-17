import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import cityDark from '../assets/city_dark.jpg';

export default function SignUp(props) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [email, setEmail] = useState('');

  // id 체크하는 함수
  const idCheckHandler = () => {
    if (userId.length === 0) {
      alert('아이디를 입력해주세요');
    }
    axios
      .post(
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

  // 가입하기 버튼 함수
  const signUpHandler = () => {
    // 이메일 유효성 검사 정규식
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
    if (userId.length < 4) {
      return alert('아이디를 5자 이상으로 해주세요');
    }
    if (password.length < 8) {
      return alert('비밀번호를 8자 이상으로 해주세요');
    }

    if (!checkEmail.test(email)) {
      return alert('이메일이 잘 못 되었습니다');
    }

    axios
      .post(
        // 로컬테스트 이후에 ec2 주소로 변경할것
        'http://13.125.205.76:5000/signup',
        {
          userId,
          password,
          email,
        },
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((res) => {
        // 입력이 완료되었을 때 로그인 창으로 보내는 라우터
        if (res.status === 201) {
          props.navigation.navigate('Login');
          return alert('가입이 완료 되었습니다.');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <ImageBackground style={styles.imageBackground} source={cityDark} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.logo}>DO.SI.IN{'\n'}회원가입</Text>
        <View style={styles.inputContainer}>
          <View style={styles.idView}>
            <TextInput
              style={styles.idInputBox}
              placeholder="아이디"
              onChange={(e) => {
                e.preventDefault();
                setUserId(e.nativeEvent.text);
              }}
            />
            <TouchableOpacity
              style={styles.idCheckButton}
              onPress={() => {
                idCheckHandler();
              }}
            >
              <Text style={styles.buttonText}>중복확인</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.inputBox}
            placeholder="비밀번호"
            secureTextEntry
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.nativeEvent.text);
            }}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="비밀번호 재확인"
            secureTextEntry
            onChange={(e) => {
              e.preventDefault();
              setCheckPassword(e.nativeEvent.text);
            }}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Email 입력"
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.nativeEvent.text);
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => {
              signUpHandler();
            }}
          >
            <Text style={styles.buttonText}>가입하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => props.navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>뒤로가기</Text>
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
    top: 280,
    position: 'absolute',
  },
  logo: {
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: '#F3ECA5',
    width: 220,
    height: 144,
    borderRadius: 5,
    top: 100,
    position: 'absolute',
  },
  buttonContainer: {
    top: 420,
    position: 'absolute',
  },
  idView: {
    width: 220,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  idInputBox: {
    width: 110,
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#888',
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  idCheckButton: {
    width: 90,
    backgroundColor: '#F3ECA5',
    borderRadius: 5,
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
  signUpButton: {
    marginTop: 60,
    width: 220,
    backgroundColor: '#F3ECA5',
    borderRadius: 5,
  },
  backButton: {
    marginTop: 15,
    width: 220,
    backgroundColor: '#F3ECA5',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    height: 30,
    textAlignVertical: 'center',
  },
});
