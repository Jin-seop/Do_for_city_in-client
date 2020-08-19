import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default MyPost = ({ userId, userpost, navigation }) => {
  const myPostHandler = () => {
    navigation.navigate('PostPage', { data: { userId, userpost } });
  };
  return (
    <TouchableOpacity
      style={{ margin: 10 }}
      onPress={() => {
        myPostHandler();
      }}
    >
      <Text>-{userpost}</Text>
    </TouchableOpacity>
  );
};
