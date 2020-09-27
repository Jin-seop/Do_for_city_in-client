import React from 'react';
import { Image, Text, View } from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import logo from '../assets/logo.png';

function Home(props) {
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
        />
      </View>

      <ScrollView
        style={{ marginTop: 15, flexDirection: 'column', height: '80%' }}
      >
        <TouchableOpacity
          style={{
            height: 150,
            backgroundColor: '#C4C4C4',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 15,
          }}
          onPress={() => props.navigation.navigate('게시글')}
        >
          <Text>사진</Text>
          <Text>설명</Text>
        </TouchableOpacity>

        <View
          style={{
            height: 150,
            backgroundColor: '#C4C4C4',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 15,
          }}
        >
          <Text>사진</Text>
          <Text>설명</Text>
        </View>

        <View
          style={{
            height: 150,
            backgroundColor: '#C4C4C4',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 15,
          }}
        >
          <Text>사진</Text>
          <Text>설명</Text>
        </View>

        <View
          style={{
            height: 150,
            backgroundColor: '#C4C4C4',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 15,
          }}
        >
          <Text>사진</Text>
          <Text>설명</Text>
        </View>

        <View
          style={{
            height: 150,
            backgroundColor: '#C4C4C4',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 15,
          }}
        >
          <Text>사진</Text>
          <Text>설명</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
