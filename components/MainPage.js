import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import cityDark from './assets/city_dark.jpg';

export default function MainPage() {
  return (
    <ImageBackground source={cityDark} resizeMode="cover" style={styles.bodyBackgroundImg}>
      <View style={styles.body}>
        <View>
          <TouchableOpacity style={styles.menuContainer}>
            <Text>메뉴</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mypageButton}>
            <Text style={styles.menuText}>마이페이지</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.menuText}>로그아웃</Text>
          </TouchableOpacity>
          <TextInput placeholder="검색" style={styles.serchBar} />
        </View>
        <View style={styles.mainScrollContainer}>
          <ScrollView>
            <TouchableOpacity style={styles.contantContainer}>
              <View style={styles.contantTextContainer}>
                <Text>게시글</Text>
              </View>
              <View style={styles.contantWritter}>
                <Text>작성자</Text>
                <Text>작성 시간</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contantContainer}>
              <View style={styles.contantTextContainer}>
                <Text>게시글</Text>
              </View>
              <View style={styles.contantWritter}>
                <Text>작성자</Text>
                <Text>작성 시간</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contantContainer}>
              <View style={styles.contantTextContainer}>
                <Text>게시글</Text>
              </View>
              <View style={styles.contantWritter}>
                <Text>작성자</Text>
                <Text>작성 시간</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contantContainer}>
              <View style={styles.contantTextContainer}>
                <Text>게시글</Text>
              </View>
              <View style={styles.contantWritter}>
                <Text>작성자</Text>
                <Text>작성 시간</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contantContainer}>
              <View style={styles.contantTextContainer}>
                <Text>게시글</Text>
              </View>
              <View style={styles.contantWritter}>
                <Text>작성자</Text>
                <Text>작성 시간</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.writterButton}>
            <TouchableOpacity>
              <Text>작성</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bodyBackgroundImg: { width: '100%', height: '100%' },
  body: { position: 'absolute', top: 25, left: 15 },
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
  serchBar: {
    position: 'absolute',
    top: 20,
    left: 90,
    alignItems: 'center',
    borderWidth: 1,
    width: 220,
    height: 40,
    paddingLeft: 20,
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 5,
  },
  mainScrollContainer: { position: 'absolute', top: 100, left: 90, width: 220, height: 500 },
  contantContainer: {
    width: 220,
    height: 150,
    backgroundColor: '#F3ECA5',
    borderRadius: 5,
    marginBottom: 10,
  },
  contantTextContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contantWritter: { marginLeft: 20 },
  writterButton: {
    position: 'absolute',
    width: 50,
    height: 40,
    top: 500,
    left: 230,
    backgroundColor: '#F3ECA5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
