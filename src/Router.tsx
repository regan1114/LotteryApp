import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import SettingsScreen from './screen/SettingsScreen';

const Tab = createBottomTabNavigator();
function Router() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route, navigation }) => ({
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="抽獎頁面" component={HomeScreen} 
            options={{
              tabBarLabel: '抽獎',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-list" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen name="設定頁" component={SettingsScreen} 
            options={{
              tabBarLabel: '設定',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
export default Router;
