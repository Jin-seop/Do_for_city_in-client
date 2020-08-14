import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import cityDark from '../assets/city_dark.jpg';

export default function EditUserInfo(props) {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setUserPasswordCheck] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const editUserInfoHandler = () => {
    console.log('a');
    // console.log(userId, userPassword, userPasswordCheck, userEmail);
    // To do : put요청을 통해 회원정보를 수정하는 로직을 추가해야 합니다.
  };
  return (
    <ImageBackground style={styles.imageBackground} source={cityDark} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.logo}>DO.SI.IN{'\n'}회원정보 수정</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder="아이디"
            onChange={(e) => {
              e.preventDefault();
              setUserId(e.nativeEvent.text);
            }}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="비밀번호"
            onChange={(e) => {
              e.preventDefault();
              setUserPassword(e.nativeEvent.text);
            }}
          />
          <TextInput
            style={styles.inputBox}
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
  buttonView: {
    position: 'absolute',
    width: 220,
    height: 35,
    top: 450,
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
