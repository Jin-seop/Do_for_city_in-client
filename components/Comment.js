import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default Comment = ({ data, commentReviseHandler }) => {
  let createdAt = `${data.createdAt.substring(
    0,
    4
  )}년 ${data.createdAt.substring(5, 7)}월 ${data.createdAt.substring(
    8,
    10
  )}일`;

  return (
    <TouchableOpacity
      onPress={() =>
        commentReviseHandler(data.comment, data.comments.userId, data.createdAt)
      }
      style={{ marginBottom: 15, marginLeft: 10 }}
    >
      <View>
        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
          <Text
            style={{
              width: '30%',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            {data.comments.userId}
          </Text>
          <Text style={{ width: '70%', color: 'grey' }}>{createdAt}</Text>
        </View>
        <Text style={{ fontSize: 18 }}>{data.comment}</Text>
      </View>
    </TouchableOpacity>
  );
};
