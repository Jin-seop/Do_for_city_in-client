import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default MyComment = ({ userId, userComment, navigation }) => {
  const myCommetHandler = () => {
    navigation.navigate('PostPage', { data: { userId, userComment } });
  };
  return (
    <TouchableOpacity
      style={{ margin: 10 }}
      onPress={() => {
        myCommetHandler();
      }}
    >
      <Text>-{userComment}</Text>
    </TouchableOpacity>
  );
};
