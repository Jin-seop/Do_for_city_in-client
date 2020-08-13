import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import LoginPage from './components/Login';

export default function App() {
  return (
    <View>
      <LoginPage />
      <StatusBar style="auto" />
    </View>
  );
}
