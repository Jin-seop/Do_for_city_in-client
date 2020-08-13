import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import cityDark from './assets/city_dark.jpg';

export default function ErrorPage() {
  return (
    <View>
      <ImageBackground
        source={cityDark}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              position: 'absolute',
              top: 120,
              left: 70,
              backgroundColor: '#F3ECA5',
              width: 280,
              height: 400,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ top: -80, fontSize: 30 }}>DO.SI.IN</Text>
            <Text style={{ top: -30 }}>도시락 공유 플랫폼</Text>
            <Text style={{ top: 70, fontSize: 20, fontWeight: 'bold' }}>잘못된 페이지 입니다</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
