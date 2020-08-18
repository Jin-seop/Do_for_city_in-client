import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Axios from 'axios';
import cityDark from '../assets/city_dark.jpg';
import PostList from './PostList';

export default function MainPage(props) {
  const [serchPost, setSerchPost] = useState('');
  const [postList, setPostList] = useState();

  const serchPostListHandler = () => {
    console.log(serchPost);
  };

  // 최신 게시글을 받아오는 함수
  const currentPostListHandler = () => {
    if (!postList) {
      Axios.get('http://13.125.205.76:5000/contents')
        .then((data) => {
          return data.data;
        })
        .then((dataList) => {
          setPostList(dataList);
        })
        .catch((err) => console.log(err));
    } else if (serchPost === '') {
      const result = [];
      for (let i = postList.length - 1; i >= 0; i--) {
        result.push(postList[i]);
      }
      return result.map((post, index) => {
        return <PostList data={post} key={index} navigation={props.navigation} />;
      });
    }
  };

  const setPostListHandler = () => {
    Axios.get('http://13.125.205.76:5000/contents')
      .then((data) => data.data)
      .then((dataList) => {
        setPostList(dataList);
      })
      .catch((err) => console.log(err));
  };

  const logoutHandler = () => {
    Axios.post('http://13.125.205.76:5000/signout')
      .then((res) => props.navigation.navigate('Login'))
      .catch((err) => console.log(err));
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
          <TouchableOpacity style={styles.logoutButton} onPress={logoutHandler}>
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
        <View style={styles.refreshContainer}>
          <TouchableOpacity style={styles.refreshButton} onPress={() => setPostListHandler()}>
            <Text style={styles.menuText}>새로고침</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainScrollContainer}>
          <ScrollView>
            {serchPost === '' ? currentPostListHandler() : serchPostListHandler()}
          </ScrollView>
          <View style={styles.writterButton}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('WritePage', {
                  userId: props.navigation.state.params.userId,
                })
              }
            >
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
  refreshButton: {
    width: 50,
    height: 40,
    backgroundColor: '#F3ECA5',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  refreshContainer: {
    position: 'absolute',
    left: 330,
  },
});
