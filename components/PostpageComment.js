import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PostpageComment(props) {
  return (
    <View style={styles.commetContainer}>
      <View style={styles.commetWritter}>
        <Text>작성자 : {props.data.comments.userId}</Text>
        <Text style={styles.createdAt}>작성시간 : {props.data.createdAt}</Text>
      </View>
      <View style={styles.commet}>
        <Text>{props.data.comment}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commetContainer: {
    height: 150,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#F3ECA5',
  },
  commetWritter: {
    marginTop: 10,
    marginLeft: 10,
    width: '100%',
  },
  commet: {
    height: 40,
    top: -10,
    marginLeft: 10,
  },
  createdAt: {
    marginTop: 10,
    marginBottom: 20,
  },
});
