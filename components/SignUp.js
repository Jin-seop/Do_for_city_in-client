// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SignUp() {
  // const [userId, setUserId] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DO.SI.IN{"\n"}회원가입</Text>
      <View style={styles.idView}>
        <TextInput
          style={styles.idInputBox}
          placeholder="아이디"
          // onChangeText={(userId) => setUserId(text)}
          // defaultValue={userId}
        ></TextInput>
        <TouchableOpacity style={styles.idCheckButton}>
          <Text style={styles.buttonText}>중복확인</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.inputBox} placeholder="비밀번호"></TextInput>
      <TextInput
        style={styles.inputBox}
        placeholder="비밀번호 재확인"
      ></TextInput>
      <TextInput style={styles.inputBox} placeholder="Email 입력"></TextInput>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.buttonText}>가입하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.buttonText}>뒤로가기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 20,
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: "#F3ECA5",
    width: 220,
    height: 144,
    borderRadius: 5,
    marginTop: 50,
  },
  idView: {
    marginTop: 40,
    width: 220,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  idInputBox: {
    width: 110,
    height: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#888",
    borderRadius: 5,
  },
  idCheckButton: {
    width: 90,
    backgroundColor: "#F3ECA5",
    borderRadius: 5,
  },
  inputBox: {
    marginTop: 20,
    width: 220,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#888",
    borderRadius: 5,
  },
  signUpButton: {
    marginTop: 60,
    width: 220,
    backgroundColor: "#F3ECA5",
    borderRadius: 5,
  },
  backButton: {
    marginTop: 25,
    width: 220,
    backgroundColor: "#F3ECA5",
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    height: 30,
    textAlignVertical: "center",
  },
});
