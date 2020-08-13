import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import cityDark from '../assets/city_dark.jpg';

export default function mypage(props) {
  return (
    <ImageBackground style={styles.imageBackground} source={cityDark} resizeMode="cover">
      <View style={styles.body}>
        <View style={styles.userNameBox}>
          <Text style={styles.userName}>유저명</Text>
          <Text style={styles.mypageText}>마이페이지</Text>
        </View>

        <View style={styles.contantsListContainer}>
          <Text style={styles.contantsListText}>내가 쓴 글</Text>
          <ScrollView style={{ width: 180, height: 150 }}>
            <TouchableOpacity style={{ margin: 10 }}>
              <Text>-게시글</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 10 }}>
              <Text>-게시글</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 10 }}>
              <Text>-게시글</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 10 }}>
              <Text>-게시글</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.comentsListContainer}>
          <Text style={styles.contantsListText}>내가 쓴 글</Text>
          <ScrollView style={{ width: 180, height: 150 }}>
            <TouchableOpacity style={{ margin: 10 }}>
              <Text>-댓글</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 10 }}>
              <Text>-댓글</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 10 }}>
              <Text>-댓글</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 10 }}>
              <Text>-댓글</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.reviseButton}>
          <TouchableOpacity>
            <Text>내 정보 수정하기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.secessionButton}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text>회원 탈퇴</Text>
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
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameBox: {
    position: 'absolute',
    top: 40,
    left: 100,
    width: 220,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3ECA5',
    borderRadius: 5,
  },
  userName: { fontSize: 20 },
  mypageText: { fontSize: 25, fontWeight: 'bold' },
  contantsListContainer: {
    position: 'absolute',
    top: 160,
    left: 110,
    width: 200,
    height: 180,
    backgroundColor: '#F3ECA5',
    alignItems: 'center',
    borderRadius: 5,
  },
  contantsListText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  comentsListContainer: {
    position: 'absolute',
    top: 370,
    left: 110,
    width: 200,
    height: 180,
    backgroundColor: '#F3ECA5',
    alignItems: 'center',
    borderRadius: 5,
  },
  reviseButton: {
    position: 'absolute',
    top: 580,
    width: 200,
    height: 35,
    left: 110,
    backgroundColor: '#F3ECA5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  secessionButton: {
    position: 'absolute',
    top: 620,
    width: 200,
    height: 35,
    left: 110,
    backgroundColor: '#F3ECA5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
