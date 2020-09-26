import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Kategorie() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Kategorie!</Text>
    </View>
  );
}

function Mypage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>마이페이지!</Text>
    </View>
  );
}

function CookSiIn() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CookSiIn!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="카테고리" component={Kategorie} />
        <Tab.Screen name="마이페이지" component={Mypage} />
        <Tab.Screen name="Cook.Si.In" component={CookSiIn} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
