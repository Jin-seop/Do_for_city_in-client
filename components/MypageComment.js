import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default MyComment = ({ userId, userComment, fk_contentId, navigation }) => {
  const myCommetHandler = () => {
    navigation.navigate('PostPage', { data: { userId, userComment, fk_contentId } });
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
