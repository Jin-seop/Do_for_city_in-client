import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../assets/logo.png';

function Mypage(props) {
  const [data, setData] = useState('');
  const getUserInfo = () => {
    Axios.get('http://13.125.205.76:5000/mypage')
      .then((res) => {
        if (res.status === 200) {
          setData(res.data[0]);
        }
      })
      .catch((err) => console.error(err));
  };

  const logout = () => {
    Axios.post('http://13.125.205.76:5000/signout')
      .then((res) => {
        if (res.status === 200) {
          alert('로그아웃되었습니다.');
          setData('');
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (props.route.params) {
      getUserInfo();
    }
  }, []);

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

      {data === '' ? (
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            height: 200,
          }}
        >
          <Text style={{ marginTop: 30, fontSize: 24 }}>회원가입하고</Text>
          <Text style={{ marginTop: 15, marginBottom: 15, fontSize: 24 }}>
            다양한 혜택을 받아보세요!
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#2D3664',
              height: 40,
              width: 230,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}
            onPress={() => props.navigation.navigate('로그인')}
          >
            <Text style={{ color: 'white' }}>로그인/회원가입</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            height: 200,
          }}
        >
          <Text style={{ marginTop: 30, fontSize: 24 }}>
            {data.userId}님 반갑습니다!
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#2D3664',
              height: 40,
              width: 230,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              marginBottom: 15,
              marginTop: 15,
            }}
            onPress={() => props.navigation.navigate('로그인')}
          >
            <Text style={{ color: 'white' }}>회원정보 수정</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2D3664',
              height: 40,
              width: 230,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}
            onPress={() => logout()}
          >
            <Text style={{ color: 'white' }}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      )}

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
          onPress={() => alert('기능 구현 중 입니다.')}
        >
          <Text style={{ fontSize: 24, marginLeft: 20 }}>공지사항</Text>
        </TouchableOpacity>

        {data ? (
          <TouchableOpacity
            style={{
              height: 50,
              borderBottomWidth: 0.2,
              borderTopWidth: 0.2,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 24, marginLeft: 20 }}>게시글 작성</Text>
          </TouchableOpacity>
        ) : null}

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
          onPress={() => alert('기능 구현 중 입니다.')}
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
          onPress={() => alert('기능 구현 중 입니다.')}
        >
          <Text style={{ fontSize: 24, marginLeft: 20 }}>이용안내</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Mypage;
