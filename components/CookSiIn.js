import React from 'react';
import { Image, Text, View, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import cooksiin from '../assets/cooksiin.png';

function CookSiIn() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Image source={cooksiin} style={{ height: 230 }} />
      <Text style={{ fontSize: 25 }}>레시피 검색 어플 CookSiIn!</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#F6B352',
          borderRadius: 5,
          width: 200,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
        }}
        onPress={() =>
          Linking.openURL(
            'https://play.google.com/store/apps/details?id=com.cooksiin.cooksiinnana'
          )
        }
      >
        <Text style={{ color: 'white', fontSize: 18 }}>CookSiIn으로 이동</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CookSiIn;
