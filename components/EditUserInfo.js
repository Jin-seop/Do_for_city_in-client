import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import cityDark from '../assets/city_dark.jpg';

export default function EditUserInfo(props) {
  return (
    <ImageBackground style={styles.imageBackground} source={cityDark} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.logo}>DO.SI.IN{'\n'}회원정보 수정</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputBox} placeholder="아이디" />
          <TextInput style={styles.inputBox} placeholder="비밀번호" />
          <TextInput style={styles.inputBox} placeholder="비밀번호 재확인" />
          <TextInput style={styles.inputBox} placeholder="Email 입력" />
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => props.navigation.navigate('Mypage')}
          >
            <Text>수정하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => props.navigation.navigate('Mypage')}
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
