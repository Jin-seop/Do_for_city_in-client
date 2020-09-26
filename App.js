import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from '@expo/vector-icons';

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
        name="카테고리"
        component={Kategorie}
        options={{
          tabBarIcon: () => <Entypo name="list" size={24} color="black" />,
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

function Home() {
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Kategorie" component={Kategorie} />
        <Stack.Screen name="Mypage" component={Mypage} />
        <Stack.Screen name="CookSiIn" component={CookSiIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
