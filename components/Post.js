import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Comment from './Comment';

function Post(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const [photo, setPhoto] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [commentToPost, setCommentToPost] = useState('');
  const [comments, setComments] = useState('');

  const getPostInfo = () => {
    if (props.route.params.data.createdAt) {
      Axios.post('http://13.125.205.76:5000/contentDetail', {
        title: props.route.params.data.title,
        createdAt: props.route.params.data.createdAt,
      })
        .then((res) => {
          setContent(res.data[0].content);
          setWriter(res.data[0].contents.userId);
          setTitle(res.data[0].title);
          setCreatedAt(res.data[0].createdAt);
          setComments(res.data[0].commentsContent);
          // 이미지를 state로 지정해야 합니다.
        })
        .catch((err) => {
          alert('로그인 회원만 볼 수 있습니다.');
          props.navigation.goBack();
        });
    }
  };

  const postCommentHandler = () => {
    Axios.post(
      'http://13.125.205.76:5000/comments',
      {
        title: title,
        createdAt: createdAt,
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
    getPostInfo();
  };

  const commentHandler = () => {
    return comments.map((comment, index) => {
      return <Comment data={comment} key={index}></Comment>;
    });
  };

  useEffect(() => {
    if (props.route.params.data.createdAt) {
      getPostInfo();
    }
  }, []);
  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#C4C4C4',
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>사진</Text>
        </View>

        <View style={{ borderWidth: 0.4, marginTop: 15, height: 250 }}>
          <View
            style={{ marginLeft: 20, marginTop: 10, flexDirection: 'column' }}
          >
            <Text style={{ fontSize: 18 }}>
              제목 : {props.route.params.data.title}
            </Text>
            <Text style={{ marginTop: 5, marginBottom: 5, fontSize: 18 }}>
              작성자 : {writer}
            </Text>
            <Text style={{ fontSize: 18 }}>시간 : {createdAt}</Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>{content}</Text>
          </View>
        </View>
        <View style={{ marginLeft: 10, marginTop: 10 }}>
          {comments ? commentHandler() : <Text>{''}</Text>}
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          // // justifyContent: 'center',
          borderWidth: 0.8,
          height: 50,
          // width: '100%',
          // marginTop: 50,
          // paddingLeft: 10,
          // position: 'absolute',
          // bottom: 0,
          // backgroundColor: 'white',
        }}
      >
        <TextInput
          placeholder="댓글"
          style={{
            margin: 5,
            paddingLeft: 10,
            borderRadius: 5,
            borderWidth: 0.8,
            width: 325,
          }}
          onChange={(e) => {
            e.preventDefault();
            setCommentToPost(e.nativeEvent.text);
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: 5,
            marginRight: 5,
            marginBottom: 5,
            borderWidth: 0.8,
            borderRadius: 5,
            height: 40,
            width: 70,
            justifyContent: 'center',
          }}
          onPress={() => {
            if (commentToPost.length >= 50) {
              alert('글자수를 50자 미만으로 해주세요');
            } else if (commentToPost.length === 0) {
              alert('내용이 없습니다');
            } else {
              postCommentHandler();
            }
          }}
        >
          <Text
            style={{
              textAlign: 'center',
            }}
          >
            등록
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Post;
