import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import logo from '../assets/logo.png';

function Home(props) {
  const [serchPost, setSerchPost] = useState('');
  const [postList, setPostList] = useState();

  const getPostList = () => {
    const list = [];
    Axios.get('http://13.125.205.76:5000/contents')
      .then((res) => res.data)
      .then((dataList) => {
        setPostList(dataList);
      })
      .catch((err) => console.log(err));
  };

  const currentPostListHandler = () => {
    if (!postList) {
      Axios.get('http://13.125.205.76:5000/contents')
        .then((res) => {
          return res.data;
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
        return (
          <TouchableOpacity
            style={{
              height: 150,
              backgroundColor: '#C4C4C4',
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 15,
            }}
            onPress={() => {
              props.navigation.navigate('게시글', { data: post });
            }}
            key={index}
          >
            <Image
              source={logo}
              style={{
                width: 100,
                height: 120,
                backgroundColor: 'white',
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                width: '100%',
                height: 120,
                backgroundColor: 'white',
                paddingTop: 20,
              }}
            >
              <Text>제목 : {post.title}</Text>
              <Text style={{ marginTop: 10, marginBottom: 10 }}>
                작성자 : {post.contents.userId}
              </Text>
              <Text>시간 : {post.createdAt.slice(0, 10)}</Text>
            </View>
          </TouchableOpacity>
        );
      });
    }
  };

  const serchPostListHandler = () => {
    const list = [];

    for (let i = postList.length; i >= 0; i--) {
      if (postList[i] && postList[i].title.includes(serchPost)) {
        list.push(postList[i]);
      }
    }

    return list.map((post, index) => {
      return (
        <TouchableOpacity
          style={{
            height: 150,
            backgroundColor: '#C4C4C4',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 15,
          }}
          onPress={() => {
            props.navigation.navigate('게시글', { data: post });
          }}
          key={index}
        >
          <Image
            source={logo}
            style={{
              width: 100,
              height: 120,
              backgroundColor: 'white',
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              width: '100%',
              height: 120,
              backgroundColor: 'white',
              paddingTop: 20,
            }}
          >
            <Text>제목 : {post.title}</Text>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              작성자 : {post.contents.userId}
            </Text>
            <Text>시간 : {post.createdAt.slice(0, 10)}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      getPostList();
    });
  }, [props.navigation]);

  return (
    <View>
      <View
        style={{
          backgroundColor: '#2D3664',
          width: '100%',
          height: 80,
          alignItems: 'center',
        }}
      >
        <Image source={logo} style={{ width: 80, height: 80 }} />
      </View>

      <View
        style={{
          marginTop: 15,
          backgroundColor: '#C4C4C4',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextInput
          style={{
            width: '90%',
            height: 40,
            backgroundColor: 'white',
            borderRadius: 5,
            paddingLeft: 10,
          }}
          placeholder="검색"
          onChange={(e) => setSerchPost(e.nativeEvent.text)}
        />
      </View>

      <ScrollView
        style={{ marginTop: 15, flexDirection: 'column', height: '80%' }}
      >
        {serchPost === '' ? currentPostListHandler() : serchPostListHandler()}
      </ScrollView>
    </View>
  );
}

export default Home;
