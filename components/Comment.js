import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default Comment = ({ data }) => {
  return (
    <TouchableOpacity>
    <View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
  <Text style={{ width: '30%' }}>{data.comments.userId}</Text>
  <Text style={{ width: '30%' }}>{data.createdAt}</Text>
      </View>
  <Text>{data.comment}</Text>
    </View>
  </TouchableOpacity>
  )
}