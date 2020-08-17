import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default MyPost = ({ userId, userpost }) => {
  const myPostHandler = () => {};
  return (
    <TouchableOpacity
      style={{ margin: 10 }}
      onPress={() => {
        myPostHandler();
      }}
    >
      <Text>{userpost}</Text>
    </TouchableOpacity>
  );
};
