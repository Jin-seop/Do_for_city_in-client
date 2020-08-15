import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import cityDark from '../assets/city_dark.jpg';

export default function MainPage(props) {
  const [serchPost, setSerchPost] = useState('');

  const postHandler = () => {
    // 게시글 클릭시 get요청 후 페이지 라우팅과 해당 받아온 데이터를 props로 보내야 합니다.
    props.navigation.navigate('PostPage');
  };

  // 서버요청을 받아서 게시글 목록을 뿌려주는 함수
  const postListHandler = () => {
    // serchPost 값을 이용해서 서버에서 받아오기
  };
  // 최신 게시글을 받아오는 함수
  const currentPostListHandler = () => {
    // 그냥 get요청으로 최신 게시글 받아오기
  };

  return (
    <ImageBackground source={cityDark} resizeMode="cover" style={styles.bodyBackgroundImg}>
      <View style={styles.body}>
        <View>
          <TouchableOpacity style={styles.menuContainer}>
            <Text>메뉴</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mypageButton}
            onPress={() => props.navigation.navigate('Mypage')}
          >
            <Text style={styles.menuText}>마이페이지</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => props.navigation.navigate('Login')}
          >
            <Text style={styles.menuText}>로그아웃</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="검색"
            style={styles.serchBar}
            onChange={(e) => {
              e.preventDefault();
              setSerchPost(e.nativeEvent.text);
            }}
          />
        </View>
        <View style={styles.mainScrollContainer}>
          {/* 이부분에서 게시글 검색이 없으면 최신으로 보여주고 아니면 게시글 검색으로 보여주기(serchPost 이용해서) */}
          {/* serchPost ? postListHandler() : currentPostListHandler() */}
          <ScrollView>
            <TouchableOpacity
              style={styles.contantContainer}
              onPress={() => {
                postHandler();
              }}
            >
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
            <TouchableOpacity onPress={() => props.navigation.navigate('WritePage')}>
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
  mainScrollContainer: {
    position: 'absolute',
    top: 100,
    left: 90,
    width: 220,
    height: 500,
  },
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
