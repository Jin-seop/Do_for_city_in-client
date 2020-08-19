import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PostpageComment(props) {
  return (
    <View style={styles.commetContainer}>
      <View style={styles.commetWritter}>
        <Text>작성자</Text>
        <Text>작성 시간</Text>
      </View>
      <View style={styles.commet}>
        <Text>댓글</Text>
      </View>
      {/* <TouchableOpacity style={styles.commetButton}>
      <Text>수정</Text>
    </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  commetContainer: {
    height: '45%',
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#F3ECA5',
  },
  commetWritter: {
    marginTop: 10,
    marginLeft: 10,
    width: 60,
  },
  commet: {
    height: 50,
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
