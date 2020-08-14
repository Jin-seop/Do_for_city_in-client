import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import cityDark from '../assets/city_dark.jpg';

export default function SignUp(props) {
  return (
    <ImageBackground style={styles.imageBackground} source={cityDark} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.logo}>DO.SI.IN{'\n'}회원가입</Text>
        <View style={styles.inputContainer}>
          <View style={styles.idView}>
            <TextInput style={styles.idInputBox} placeholder="아이디" />
            <TouchableOpacity style={styles.idCheckButton}>
              <Text style={styles.buttonText}>중복확인</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.inputBox} secureTextEntry placeholder="비밀번호" />
          <TextInput style={styles.inputBox} secureTextEntry placeholder="비밀번호 재확인" />
          <TextInput style={styles.inputBox} placeholder="Email 입력" />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => props.navigation.navigate('Login')}
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
