import React from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function SignUp() {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}
    >
      <View style={{ marginLeft: 30 }}>
        <Text style={{ fontSize: 18 }}>아이디</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
          }}
        >
          <TextInput
            placeholder="아이디"
            style={{
              borderWidth: 1,
              width: 200,
              borderRadius: 5,
              height: 40,
            }}
          />
          <TouchableOpacity
            style={{
              borderRadius: 5,
              borderWidth: 1,
              width: 80,
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              marginLeft: 15,
            }}
          >
            <Text style={{ fontSize: 15 }}>중복확인</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 18, marginTop: 15 }}>비밀번호</Text>
        <TextInput
          placeholder="비밀번호"
          style={{
            borderWidth: 1,
            width: '80%',
            borderRadius: 5,
            height: 40,
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

export default SignUp;
