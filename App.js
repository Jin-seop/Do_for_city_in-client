import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {
  Home,
  Mypage,
  CookSiIn,
  Login,
  SignUp,
  SetUp,
  Post,
  MyPost,
  Write,
} from './components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={Mypage}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="people" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Cook.Si.In"
        component={CookSiIn}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="alpha-i-circle-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Mypage" component={Mypage} />
        <Stack.Screen name="CookSiIn" component={CookSiIn} />
        <Stack.Screen name="로그인" component={Login} />
        <Stack.Screen name="회원가입" component={SignUp} />
        <Stack.Screen name="회원정보수정" component={SetUp} />
        <Stack.Screen name="게시글" component={Post} />
        <Stack.Screen name="내글" component={MyPost} />
        <Stack.Screen name="글쓰기" component={Write} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
