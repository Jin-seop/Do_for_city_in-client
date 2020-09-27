import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

function Post(props) {
  const getPostInfo = () => {
    if (props.route.params.data.createdAt) {
      Axios.post('http://13.125.205.76:5000/contentDetail', {
        title: props.route.params.data.title,
        createdAt: props.route.params.data.createdAt,
      })
        .then((res) => console.log(res))
        .catch((err) => {
          alert('로그인 회원만 볼 수 있습니다.');
          props.navigation.goBack();
        });
    }
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
            <Text>제목 : {}</Text>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>작성자 : {}</Text>
            <Text>시간 : {}</Text>
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

      <TextInput
        placeholder="댓글"
        style={{
          borderWidth: 0.8,
          height: 40,
          width: '100%',
          marginTop: 50,
          paddingLeft: 10,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
        }}
      />
    </View>
  );
}

export default Post;
