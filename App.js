import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Home, Kategorie, Mypage, CookSiIn } from './components';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
