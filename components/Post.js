import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, Text, View, Alert } from 'react-native';
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
  const [createdAt, setCreatedAt] = useState('');
  const [commentToPost, setCommentToPost] = useState('');
  const [comments, setComments] = useState('');
  const [image, setImage] = useState(null);
  const [currentUser, setCurrentUser] = useState('');
  const [isReviseMode, setIsReviseMode] = useState(false);
  const [commentCreatedAt, setCommentCreatedAt] = useState('');
  const [commentUserId, setCommentUserId] = useState('');
  const getPostInfo = () => {
    if (props.route.params.data) {
      return Axios.post('http://13.125.205.76:5000/contentDetail', {
        title: props.route.params.data.title,
        createdAt: props.route.params.data.createdAt,
      })
        .then((res) => {
          setCurrentUser(res.data[0]);
          setContent(res.data[1][0].content);
          setWriter(res.data[1][0].contents.userId);
          setTitle(res.data[1][0].title);
          setCreatedAt(res.data[1][0].createdAt);
          setComments(res.data[1][0].commentsContent);
          setImage(res.data[1][0].referenceFile);
        })
        .catch((err) => {
          alert('로그인 회원만 볼 수 있습니다.');
          props.navigation.goBack();
        });
    }
  };

  const getMyPostInfo = () => {
    if (props.route.params.mydata.comment) {
      Axios.post('http://13.125.205.76:5000/mypage/toComment', {
        fk_contentId: props.route.params.mydata.fk_contentId,
      })
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            setContent(res.data[0].content);
            setWriter(res.data[0].contents.userId);
            setTitle(res.data[0].title);
            setCreatedAt(res.data[0].createdAt);
            setComments(res.data[0].commentsContent);
            setImage(res.data[0].referenceFile);
          }
        })
        .catch((err) => console.error(err));
    }
    if (props.route.params.mydata.title) {
      Axios.post('http://13.125.205.76:5000/mypage/toContent', {
        title: props.route.params.mydata.title,
        createdAt: props.route.params.mydata.createdAt,
      })
        .then((res) => {
          if (res.status === 201) {
            setContent(res.data[0].content);
            setWriter(res.data[0].contents.userId);
            setTitle(res.data[0].title);
            setCreatedAt(res.data[0].createdAt);
            setComments(res.data[0].commentsContent);
            setImage(res.data[0].referenceFile);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const postCommentHandler = () => {
    if (commentToPost.length >= 50) {
      return alert('글자수를 50자 미만으로 해주세요');
    }
    if (commentToPost.length === 0) {
      return alert('내용이 없습니다');
    }
    if (!isReviseMode) {
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
        .then((res) => {
          alert('댓글 등록완료');
          getPostInfo();
          setCommentToPost('');
        })
        .catch((err) => {
          alert(err);
        });
    }
    if (isReviseMode) {
      Axios.put('http://13.125.205.76:5000/contents/comment/update', {
        createdAt: commentCreatedAt,
        comment: commentToPost,
        userId: commentUserId,
      })
        .then((res) => {
          if (res.status === 200) {
            alert('댓글 수정완료');
            getPostInfo();
            setCommentToPost('');
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const commentHandler = () => {
    return comments.map((comment, index) => {
      return (
        <Comment
          data={comment}
          currentUser={currentUser}
          commentReviseHandler={commentReviseHandler}
          key={index}
        ></Comment>
      );
    });
  };

  const commentReviseHandler = (comment, userId, createdAt) => {
    if (userId === currentUser) {
      Alert.alert('댓글 수정', '수정하시겠습니까?', [
        {
          text: '취소',
          onPress: () => setIsReviseMode(false),
          style: 'cancel',
        },
        {
          text: '수정하기',
          onPress: () => {
            setIsReviseMode(true);
            setCommentToPost(comment);
            setCommentCreatedAt(createdAt);
            setCommentUserId(userId);
          },
        },
      ]);
    }
  };

  useEffect(() => {
    if (props.route.params.mydata) {
      getMyPostInfo();
    }
  }, [props]);
  useEffect(() => {
    if (props.route.params.data) {
      getPostInfo();
    }
  }, [props]);

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
          <Image
            source={{ uri: image, width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>

        <View style={{ borderWidth: 0.4, marginTop: 15, height: 250 }}>
          <View
            style={{ marginLeft: 20, marginTop: 10, flexDirection: 'column' }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {props.route.params.data ? props.route.params.data.title : null}
              </Text>
              <Text
                style={{ fontSize: 16, color: 'grey', paddingLeft: 20 }}
              >{`${createdAt.substring(0, 4)}년 ${createdAt.substring(
                5,
                7
              )}월 ${createdAt.substring(8, 10)}일`}</Text>
            </View>
            <Text style={{ marginTop: 5, marginBottom: 5, fontSize: 18 }}>
              {`writer : ${writer}`}
            </Text>
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
          borderWidth: 0.8,
          height: 50,
        }}
      >
        <TextInput
          placeholder="댓글"
          value={commentToPost}
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
