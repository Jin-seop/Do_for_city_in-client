/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';
import Axios from 'axios';
import cityDark from '../assets/city_dark.jpg';
/*
이 페이지가 렌더되는 경우는 두 가지, (1) write페이지에서 '글올리기'를 클릭했을 때, (2) mainPage에서 게시글 하나를 클릭했을 때
(1)의 경우 화면에 보여지는 내용(제목, 본문, 작성자, 작성시간)은 write 페이지에서 params로 넘겨 받은 것이다.
(1)의 경우에서 현재는 수정 버튼을 클릭했다가 완료 버튼을 클릭하면 화면에 보여지는 내용들은 params로 넘겨 받은 것에서 사용자가 수정한 내용이다.
(1)의 경우 댓글 등록 기능이 작동되고 있는데, 가능한 이유는 write 페이지에서 params로 받아온 title과 createdAt을(사용자가 수정했을 경우 reviseTitle) 보내주기 때문.
하지만 (2)의 경우 

*/

export default function PostPage(props) {
  const [reviseMode, setReviseMode] = useState(false); // 수정버튼 클릭하면 true
  const [reviseTitle, setReviseTitle] = useState(undefined);
  const [reviseBody, setReviseBody] = useState(undefined);
  const [isRevised, setIsRevised] = useState(false); // 수정모드에서 완료버튼 한번이라도 클릭하면 그 뒤론 사용자가 수정한 내용을 렌더해줌.
  const [commentToPost, setCommentToPost] = useState('');
  const [getComment, setGetComment] = useState();

  const logoutHandler = () => {
    Axios.post('http://13.125.205.76:5000/signout')
      .then((res) => props.navigation.navigate('Login'))
      .catch((err) => console.log(err));
  };
  // postpage가 렌더링될 때 /contentDetail로 get요청을 보내서 데이터를 받아온다.
  // 이때 보내야할 내용은 mainpage에서 postpage로 전환할 경우는 클릭한 게시글의 title, createdAt
  // write 페이지에서 글 작성 후 postpage로 전환할 경우는 작성한 게시글의 title, createdAt
  const getCommentHandler = () => {
    // console.log('getCommentHandler excute');
    Axios.get('http://13.125.205.76:5000/contentDetail', {
      data: {
        title: reviseTitle || props.navigation.state.params.title,
        createdAt: props.navigation.state.params.createdAt,
      },
    })
      .then((res) => {
        console.log(res);
        // setGetComment(res.data.comment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const contentUpdataHandler = () => {
    Axios.put(
      'http://13.125.205.76:5000/contents/update',
      { id: props.navigation.state.params.id, title: reviseTitle, content: reviseBody },
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
      .then(function (res) {
        alert('성공적으로 수정 되었습니다');
      })
      .catch(function (err) {
        alert(err);
      });
  };
  const postCommentHandler = () => {
    Axios.post(
      'http://13.125.205.76:5000/comments',
      {
        title: reviseTitle || props.navigation.state.params.title,
        createdAt: props.navigation.state.params.createdAt,
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
            <View style={styles.content_titleContainer}>
              {reviseMode === false ? (
                isRevised === false ? (
                  // reviseMode가 true일 때는 Text컴포넌트, false일 때는 TextInput컴포넌트가 렌더되야 한다.
                  // 처음 postpage가 렌더될 때는 isRevised가 false다.
                  // 처음 postpage가 렌더될 때는 props에서 title을 받아와서 Text컴포넌트를 렌더해야 한다.
                  // 수정버튼을 클릭하고 수정 후 완료버튼을 클릭했을 땐 isRevised가 true로 바뀐다.
                  // 이때는 사용자가 수정한 텍스트를 가지고 Text컴포넌트를 렌더해야 한다.
                  <Text>
                    제목 :{' '}
                    {props.navigation.state.params ? props.navigation.state.params.title : ''}
                  </Text>
                ) : (
                  <Text>{reviseTitle}</Text>
                )
              ) : (
                <TextInput
                  value={
                    reviseTitle === undefined ? props.navigation.state.params.title : reviseTitle
                  }
                  onChange={(e) => {
                    setReviseTitle(e.nativeEvent.text);
                  }}
                />
              )}
            </View>
            {reviseMode === false ? (
              isRevised === false ? (
                <Text>
                  본문 :{'\n'}
                  {'  '}
                  {props.navigation.state.params ? props.navigation.state.params.content : ''}
                </Text>
              ) : (
                <Text>{reviseBody}</Text>
              )
            ) : (
              <TextInput
                value={
                  reviseBody === undefined ? props.navigation.state.params.content : reviseBody
                }
                onChange={(e) => {
                  setReviseBody(e.nativeEvent.text);
                }}
              />
            )}
          </View>
          <View style={styles.writterContainer}>
            <Text>
              작성자 : {props.navigation.state.params ? props.navigation.state.params.userId : ''}
            </Text>
            <Text>
              작성 시간 :{' '}
              {props.navigation.state.params ? props.navigation.state.params.createdAt : ''}
            </Text>
          </View>
          <View style={styles.textButton}>
            <TouchableOpacity
              onPress={() => {
                setReviseMode(!reviseMode);
                if (reviseMode === true) {
                  setIsRevised(true);
                  contentUpdataHandler();
                }
                // reviseMode가 true라면 이때 reviseTitle과 reviseBody를 가지고 서버로 put요청을 보내야 한다.
                // put요청을 보내는 함수를 여기서 실행시킴(바디에 )
                // 그리고 화면상에 reviseTitle과 reviseBody를 렌더해야한다.
              }}
            >
              <Text>{reviseMode === false ? '수정' : '완료'}</Text>
            </TouchableOpacity>
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
                postCommentHandler();
              }}
            >
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
  content_titleContainer: {
    width: 180,
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    borderRadius: 5,
    paddingBottom: 5,
    marginBottom: 5,
  },
});
