import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../assets/logo.png';

function Mypage() {
  return (
    <View style={{ backgroundColor: '#C4C4C4', width: '100%', height: '100%' }}>
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
        style={{ alignItems: 'center', backgroundColor: 'white', height: 200 }}
      >
        <Text style={{ marginTop: 30, fontSize: 24 }}>회원가입하고</Text>
        <Text style={{ marginTop: 15, marginBottom: 15, fontSize: 24 }}>
          다양한 혜택을 받아보세요!
        </Text>
        <Button title="로그인/회원가입" color="#2D3664" />
      </View>

      <View
        style={{
          marginTop: 50,
          height: 330,
          backgroundColor: 'white',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            borderBottomWidth: 0.2,
            borderTopWidth: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 24, marginLeft: 20 }}>공지사항</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 50,
            borderBottomWidth: 0.2,
            borderTopWidth: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 24, marginLeft: 20 }}>고객센터</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 50,
            borderBottomWidth: 0.2,
            borderTopWidth: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 24, marginLeft: 20 }}>이용안내</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Mypage;
