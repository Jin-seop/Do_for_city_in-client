/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';
import Axios from 'axios';
import cityDark from '../assets/city_dark.jpg';
import PostpageComment from './PostpageComment';

export default function PostPage(props) {
  const [commentToPost, setCommentToPost] = useState('');

  const [userId, setUserId] = useState();
  const [contents, setContents] = useState();
  const [title, setTitle] = useState();
  const [createdAt, setCreatedAt] = useState();
  const [comments, setComments] = useState('');

  const logoutHandler = () => {
    Axios.post('http://13.125.205.76:5000/signout')
      .then((res) => props.navigation.navigate('Login'))
      .catch((err) => console.log(err));
  };

  const commentHandler = () => {
    const result = [];
    for (let i = comments.length - 1; i >= 0; i--) {
      result.push(comments[i]);
    }
    return result.map((comment, key) => <PostpageComment key={key} data={comment} />);
  };

  const getCommentHandler = () => {
    if (props.navigation.state.params.data.fk_contentId) {
      return Axios.post('http://13.125.205.76:5000/mypage/toComment', {
        fk_contentId: props.navigation.state.params.data.fk_contentId,
      })
        .then((res) => {
          setUserId(res.data[0].contents.userId);
          setContents(res.data[0].content);
          setTitle(res.data[0].title);
          setCreatedAt(res.data[0].createdAt);
          setComments(res.data[0].commentsContent);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (props.navigation.state.params.data.userpost) {
      return Axios.post('http://13.125.205.76:5000/mypage/toContent', {
        title: props.navigation.state.params.data.userpost,
      })
        .then((res) => {
          setUserId(res.data[0].contents.userId);
          setContents(res.data[0].content);
          setTitle(res.data[0].title);
          setCreatedAt(res.data[0].createdAt);
          setComments(res.data[0].commentsContent);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (props.navigation.state.params.data.createdAt) {
      return Axios.post('http://13.125.205.76:5000/contentDetail', {
        title: props.navigation.state.params.data.title,
        createdAt: props.navigation.state.params.data.createdAt,
      })
        .then((res) => {
          setUserId(res.data[0].contents.userId);
          setContents(res.data[0].content);
          setTitle(res.data[0].title);
          setCreatedAt(res.data[0].createdAt);
          setComments(res.data[0].commentsContent);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const postCommentHandler = () => {
    Axios.post(
      'http://13.125.205.76:5000/comments',
      {
        title,
        createdAt,
        comment: commentToPost,
      },
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
      .then(function (res) {
        alert('댓글 등록완료');
      })
      .catch(function (err) {
        alert(err);
      });
    getCommentHandler();
  };

  useEffect(() => {
    if (props.navigation.state.params.data) {
      if (props.navigation.state.params.data.write) {
        setUserId(props.navigation.state.params.data.userId);
        setContents(props.navigation.state.params.data.content);
        setTitle(props.navigation.state.params.data.title);
        setCreatedAt(props.navigation.state.params.data.createdAt);
        setComments(props.navigation.state.params.data.commentsContent);
      } else {
        getCommentHandler();
      }
    }
  }, [props.navigation.state.params.data]);

  useEffect(() => {
    commentHandler();
  }, []);

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
          <View style={styles.refreshContainer}>
            <TouchableOpacity style={styles.refreshButton} onPress={() => getCommentHandler()}>
              <Text style={styles.menuText}>새로고침</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.text}>
            <View style={styles.contentTitleContainer}>
              <Text>제목 : {title}</Text>
            </View>

            <Text>
              본문 :{'\n'}
              {'  '}
              {contents}
            </Text>
          </View>
          <View style={styles.writterContainer}>
            <Text>작성자 : {userId}</Text>
            <Text>작성 시간 : {createdAt}</Text>
          </View>
        </View>
        <View style={styles.commetWriteContainer}>
          <TextInput
            style={styles.commetInput}
            placeholder="댓글 입력창"
            onChange={(e) => {
              e.preventDefault();
              setCommentToPost(e.nativeEvent.text);
            }}
          />
          <View style={styles.commetInputButton}>
            <TouchableOpacity
              onPress={(e) => {
                if (commentToPost.length >= 50) {
                  alert('글자수를 50자 미만으로 해주세요');
                } else if (commentToPost.length === 0) {
                  alert('내용이 없습니다');
                } else {
                  postCommentHandler();
                }
              }}
            >
              <Text>등록</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.commetListContainer}>
          <ScrollView style={styles.commetList}>
            {comments ? commentHandler() : <Text />}
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
  refreshContainer: {
    position: 'absolute',
    left: 330,
  },
  refreshButton: {
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
  commetListContainer: {
    position: 'relative',
    width: 220,
    height: 500,
    top: -90,
    left: 100,
  },
  commetList: {
    position: 'absolute',
    width: 220,
    height: '100%',
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
  contentTitleContainer: {
    width: 180,
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    borderRadius: 5,
    paddingBottom: 5,
    marginBottom: 5,
  },
});
