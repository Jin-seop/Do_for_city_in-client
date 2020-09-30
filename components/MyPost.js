import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, SectionList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

function MyPost(props) {
  const [comments, setComments] = useState();
  const [contents, setContents] = useState();

  const getPostInfo = () => {
    Axios.get('http://13.125.205.76:5000/mypage')
      .then((res) => {
        if (res.data[0].comments) {
          const list = [];
          for (let i = res.data[0].comments.length; i >= 0; i--) {
            list.push(res.data[0].comments[i]);
          }
          setComments(list);
        }
        if (res.data[0].contents) {
          const list = [];
          for (let i = res.data[0].contents.length; i >= 0; i--) {
            list.push(res.data[0].contents[i]);
          }
          setContents(list);
        }
      })
      .catch((err) => console.error(err));
  };
  const commentsHandler = () => {
    return comments.map((comment, index) => {
      if (comment) {
        return (
          <TouchableOpacity
            style={{
              paddingLeft: 15,
              paddingTop: 10,
              marginBottom: 30,
              borderTopWidth: 0.8,
              justifyContent: 'center',
            }}
            key={index}
            onPress={() =>
              props.navigation.navigate('게시글', { data: comment })
            }
          >
            <Text style={{ paddingBottom: 10 }}>- 댓글 -</Text>
            <Text>{comment.comment}</Text>
          </TouchableOpacity>
        );
      }
    });
  };

  const contentsHandler = () => {
    return contents.map((content, index) => {
      if (content) {
        return (
          <TouchableOpacity
            style={{
              paddingLeft: 15,
              paddingTop: 10,
              marginBottom: 30,
              borderTopWidth: 0.8,
              justifyContent: 'center',
            }}
            key={index}
            onPress={() =>
              props.navigation.navigate('게시글', { data: content })
            }
          >
            <Text style={{ paddingBottom: 10 }}>- 게시글 -</Text>
            <Text>{content.title}</Text>
          </TouchableOpacity>
        );
      }
    });
  };

  useEffect(getPostInfo, []);

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      <ScrollView
        style={{
          flexDirection: 'column',
          borderRightWidth: 0.8,
          borderTopWidth: 0.8,
          width: '50%',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              paddingLeft: '40%',
              paddingTop: '10%',
              paddingBottom: '10%',
              backgroundColor: '#2D3664',
              color: 'white',
            }}
          >
            내 글
          </Text>
          {contents ? contentsHandler() : null}
        </View>
      </ScrollView>

      <ScrollView
        style={{ flexDirection: 'column', borderTopWidth: 0.8, width: '50%' }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              paddingLeft: '40%',
              paddingTop: '10%',
              paddingBottom: '10%',
              backgroundColor: '#2D3664',
              color: 'white',
            }}
          >
            내 댓글
          </Text>
          <View>
            <View>{comments ? commentsHandler() : null}</View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default MyPost;
