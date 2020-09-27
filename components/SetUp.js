import React from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function SetUp() {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}
    >
      <View style={{ marginLeft: 30 }}>
        <Text style={{ fontSize: 18 }}>아이디</Text>

        <Text style={{ fontSize: 18, marginTop: 15 }}>비밀번호</Text>
        <TextInput
          placeholder="비밀번호"
          style={{
            borderWidth: 1,
            width: '80%',
            borderRadius: 5,
            height: 40,
            paddingLeft: 10,
          }}
        />

        <Text style={{ fontSize: 18, marginTop: 15 }}>비밀번호 확인</Text>
        <TextInput
          placeholder="비밀번호 확인"
          style={{
            borderWidth: 1,
            width: '80%',
            borderRadius: 5,
            height: 40,
            paddingLeft: 10,
          }}
        />

        <Text style={{ fontSize: 18, marginTop: 15 }}>이메일</Text>
        <TextInput
          placeholder="이메일"
          style={{
            borderWidth: 1,
            width: '80%',
            borderRadius: 5,
            height: 40,
            paddingLeft: 10,
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#2D3664',
            height: 40,
            width: 250,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            marginTop: 40,
            marginLeft: 40,
          }}
        >
          <Text style={{ color: 'white' }}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SetUp;
