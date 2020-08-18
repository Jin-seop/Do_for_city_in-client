import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';
import Axios from 'axios';
import cityDark from '../assets/city_dark.jpg';

export default function PostPage(props) {
  const logoutHandler = () => {
    Axios.post('http://13.125.205.76:5000/signout')
      .then((res) => props.navigation.navigate('Login'))
      .catch((err) => console.log(err));
  };

  return (
    <ImageBackground source={cityDark} resizeMode="cover" style={styles.bodyBackgroundImg}>
      <ScrollView>
        <View style={styles.body}>
          <TouchableOpacity style={styles.menuContainer}>
            <Text>메뉴</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mypageButton}
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <Text style={styles.menuText}>메인페이지</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mypageButton}
            onPress={() => props.navigation.navigate('Mypage')}
          >
            <Text style={styles.menuText}>마이페이지</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={logoutHandler}>
            <Text style={styles.menuText}>로그아웃</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.text}>
            <Text>게시글</Text>
          </View>
          <View style={styles.writterContainer}>
            <Text>작성자</Text>
            <Text>작성 시간</Text>
          </View>
          <View style={styles.textButton}>
            <TouchableOpacity>
              <Text>수정</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.commetWriteContainer}>
          <TextInput style={styles.commetInput} placeholder="댓글 입력창" />
          <View style={styles.commetInputButton}>
            <TouchableOpacity>
              <Text>등록</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ScrollView style={styles.commetList}>
            <View style={styles.commetContainer}>
              <View style={styles.commetWritter}>
                <Text>작성자</Text>
                <Text>작성 시간</Text>
              </View>
              <View style={styles.commet}>
                <Text>댓글</Text>
              </View>
              <TouchableOpacity style={styles.commetButton}>
                <Text>수정</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.commetContainer}>
              <View style={styles.commetWritter}>
                <Text>작성자</Text>
                <Text>작성 시간</Text>
              </View>
              <View style={styles.commet}>
                <Text>댓글</Text>
              </View>
              <TouchableOpacity style={styles.commetButton}>
                <Text>수정</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bodyBackgroundImg: { width: '100%', height: '100%' },
  body: { position: 'relative', top: 25, left: 15 },
  menuContainer: {
    width: 50,
    height: 40,
    backgroundColor: '#F3ECA5',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mypageButton: {
    width: 50,
    height: 40,
    backgroundColor: '#F3ECA5',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    width: 50,
    height: 40,
    backgroundColor: '#F3ECA5',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: { fontSize: 10 },
  textContainer: {
    position: 'relative',
    width: 220,
    height: 360,
    backgroundColor: '#F3ECA5',
    left: 100,
    top: -130,
  },
  text: {
    alignItems: 'flex-start',
    marginLeft: 15,
    marginTop: 20,
  },
  writterContainer: {
    position: 'absolute',
    top: 290,
    left: 10,
  },
  textButton: {
    position: 'absolute',
    top: 300,
    right: 10,
    width: 40,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  commetWriteContainer: {
    position: 'relative',
    top: -110,
    left: 100,
    width: 220,
    height: 45,
    backgroundColor: '#F3ECA5',
    justifyContent: 'center',
  },
  commetInputButton: {
    position: 'absolute',
    right: 10,
    width: 40,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commetInput: {
    marginLeft: 10,
    fontSize: 12,
    backgroundColor: 'white',
    width: 150,
  },
  commetList: {
    position: 'relative',
    width: 220,
    height: '100%',
    top: -90,
    left: 100,
  },
  commetContainer: {
    height: '45%',
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#F3ECA5',
  },
  commetWritter: {
    marginTop: 10,
    marginLeft: 10,
    width: 60,
  },
  commet: {
    height: 50,
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commetButton: {
    backgroundColor: 'white',
    width: 40,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    left: 170,
    top: -20,
    borderRadius: 5,
  },
});
