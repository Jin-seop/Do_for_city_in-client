import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default postList = ({ data, navigation }) => {
  const postHandler = () => {
    // 게시글 클릭시 get요청 후 페이지 라우팅과 해당 받아온 데이터를 props로 보내야 합니다.
    navigation.navigate('PostPage', { data });
  };

  return (
    <TouchableOpacity
      style={styles.contantContainer}
      onPress={() => {
        postHandler();
      }}
    >
      <View style={styles.contantTextContainer}>
        <Text>{data.title}</Text>
      </View>
      <View style={styles.contantWritter}>
        <Text>작성자 : {data.contents === null ? '' : data.contents.userId}</Text>
        <Text>{data.createdAt}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contantContainer: {
    width: 220,
    height: 150,
    backgroundColor: '#F3ECA5',
    borderRadius: 5,
    marginBottom: 10,
  },
  contantTextContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contantWritter: { marginLeft: 20 },
});
