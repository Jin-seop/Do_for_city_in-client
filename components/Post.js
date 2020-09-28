import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

function Post(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const [photo, setPhoto] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [commentToPost, setCommentToPost] = useState('');

  const getPostInfo = () => {
    if (props.route.params.data.createdAt) {
      Axios.post('http://13.125.205.76:5000/contentDetail', {
        title: props.route.params.data.title,
        createdAt: props.route.params.data.createdAt,
      })
        .then((res) => {
          console.log('res:', res.data[0])
        setContent(res.data[0].content)
        setWriter(res.data[0].contents.userId)
        setTitle(res.data[0].title)
        setCreatedAt(res.data[0].createdAt)
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
        title:title,
        createdAt:createdAt,
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
            style={{ marginLeft: 20, marginTop: 20, flexDirection: 'column' }}
          >
            <Text>제목 : {props.route.params.data.title}</Text>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>작성자 : {writer}</Text>
            <Text>시간 : {createdAt}</Text>
            <Text>{content}</Text>
          </View>
        </View>

        <TouchableOpacity style={{ marginTop: 20, borderWidth: 0.4 }}>
          <View style={{ marginLeft: 20, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ width: '30%' }}>이름</Text>
              <Text style={{ width: '30%' }}>시간</Text>
            </View>
            <Text>댓글</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View
          style={{  
          justifyContent: 'center',
          borderWidth: 0.8,
          height: 40,
          width: '100%',
          marginTop: 50,
          paddingLeft: 10,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
        }}>
        <TextInput
          placeholder="댓글"
          onChange={(e)=>{
            e.preventDefault();
            setCommentToPost(e.nativeEvent.text);
          }}
        />
        <TouchableOpacity
          onPress={()=>{postCommentHandler();}}
        >
          <Text>등록</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Post;
