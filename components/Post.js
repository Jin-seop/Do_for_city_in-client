import React from 'react';
import { Text, View } from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

function Post() {
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
          <Text style={{ marginLeft: 20, marginTop: 20 }}>글 설명</Text>
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

        <TextInput
          placeholder="댓글"
          style={{
            borderWidth: 0.8,
            height: 40,
            marginTop: 50,
            paddingLeft: 10,
          }}
        />
      </ScrollView>
    </View>
  );
}

export default Post;
