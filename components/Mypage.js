import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Axios from 'axios';
import MyComment from './MypageComment';
import MyPost from './MypagePost';
import cityDark from '../assets/city_dark.jpg';

export default function mypage(props) {
  // 게시물 뿌려줄 때 해당 함수를 클릭하면 서버에 요청해서 해당 게시물로 가도록 만들면 됩니다.
  const [post, setPost] = useState();
  const [comment, setComment] = useState();
  const [user, setUser] = useState();

  const postCommnetGetHandler = () => {
    Axios.get('http://13.125.205.76:5000/mypage')
      .then((list) => {
        return list.data;
      })
      .then((data) => {
        if (data[0].contents) {
          setPost(data[0].contents);
        }
        if (data[0].comments) {
          setComment(data[0].comments);
        }
        setUser(data[0].userId);
      })
      .catch((err) => console.log(err));
  };

  const myPostListHandler = () => {
    const result = [];
    for (let i = post.length - 1; i >= 0; i--) {
      result.push(post[i]);
    }

    return result.map((post, index) => {
      return (
        <MyPost userId={user} key={index} userpost={post.title} navigation={props.navigation} />
      );
    });
  };

  const myCommetListHandler = () => {
    const result = [];
    for (let i = comment.length - 1; i >= 0; i--) {
      result.push(comment[i]);
    }
    // 이부분 콘솔로그로 확인 후 댓글 표시해주기
    return result.map((post, index) => (
      <MyComment
        key={index}
        userId={user}
        userComment={post.comment}
        fk_contentId={post.fk_contentId}
        navigation={props.navigation}
      />
    ));
  };

  const logoutHandler = () => {
    Axios.post('http://13.125.205.76:5000/signout')
      .then((res) => props.navigation.navigate('Login'))
      .catch((err) => console.log(err));
  };

  const signOutHandler = () => {
    Alert.alert('회원탈퇴', 'DO.SI.IN 회원을 탈퇴하시겠습니까?', [
      { text: 'Cancle', onPress: () => props.navigation.navigate('Mypage') },
      {
        text: 'OK',
        onPress: () => {
          Axios.patch('http://13.125.205.76:5000/mypage/leave');
          props.navigation.navigate('Login');
        },
      },
    ]);
  };
  useEffect(() => postCommnetGetHandler(), []);

  return (
    <ImageBackground style={styles.imageBackground} source={cityDark} resizeMode="cover">
      <View style={styles.body}>
        <View style={styles.sideButton}>
          <TouchableOpacity style={styles.menuContainer}>
            <Text>메뉴</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mypageButton}
            onPress={() => props.navigation.navigate('MainPage')}
          >
            <Text style={styles.menuText}>메인페이지</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={logoutHandler}>
            <Text style={styles.menuText}>로그아웃</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userNameBox}>
          <Text style={styles.userName}>{user}</Text>
          <Text style={styles.mypageText}>마이페이지</Text>
        </View>
        <View style={styles.contantsListContainer}>
          <Text style={styles.contantsListText}>내가 쓴 글</Text>
          <ScrollView style={{ width: 180, height: 150 }}>
            {post ? myPostListHandler() : <Text>게시글이 없습니다.</Text>}
          </ScrollView>
        </View>
        <View style={styles.comentsListContainer}>
          <Text style={styles.contantsListText}>내가 쓴 댓글</Text>
          <ScrollView style={{ width: 180, height: 150 }}>
            {comment ? myCommetListHandler() : <Text>댓글이 없습니다.</Text>}
          </ScrollView>
        </View>
        <View style={styles.reviseButton}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('EditUserInfo', { userId: user })}
          >
            <Text>내 정보 수정하기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.secessionButton}>
          <TouchableOpacity onPress={signOutHandler}>
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
  sideButton: {
    position: 'absolute',
    left: 15,
    top: 25,
  },
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
