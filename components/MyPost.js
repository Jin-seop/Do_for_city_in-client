import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

function MyPost() {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      <ScrollView
        style={{
          flexDirection: 'column',
          borderRightWidth: 0.8,
          borderTopWidth: 0.8,
          width: '50%',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              paddingLeft: '40%',
              paddingTop: '10%',
              paddingBottom: '10%',
              backgroundColor: '#2D3664',
              color: 'white',
            }}
          >
            내 글
          </Text>
          <View>
            <TouchableOpacity
              style={{ paddingLeft: 10, marginBottom: 30, borderTopWidth: 0.8 }}
            >
              <Text>글 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingLeft: 10, marginBottom: 30, borderTopWidth: 0.8 }}
            >
              <Text>글 1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <ScrollView
        style={{ flexDirection: 'column', borderTopWidth: 0.8, width: '50%' }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              paddingLeft: '40%',
              paddingTop: '10%',
              paddingBottom: '10%',
              backgroundColor: '#2D3664',
              color: 'white',
            }}
          >
            내 댓글
          </Text>
          <View>
            <TouchableOpacity
              style={{
                paddingLeft: 10,
                paddingBottom: 30,
                borderTopWidth: 0.8,
              }}
            >
              <Text>댓글 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ paddingLeft: 10, marginBottom: 30, borderTopWidth: 0.8 }}
            >
              <Text>댓글 1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default MyPost;
