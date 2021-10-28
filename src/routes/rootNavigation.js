import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@ant-design/react-native';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';

const Tabs = createBottomTabNavigator();

const TabsNavigation = () => (
    <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = 'home';
                } else if (route.name === 'Sign Up') {
                    iconName = 'user';
                }

                return <Icon name={iconName} size={size} color={color} />;
            }
        })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Sign Up" component={SignUpScreen} />
    </Tabs.Navigator>
);

export default RootNavigation = () => {
    return (
      <NavigationContainer>
        <TabsNavigation/>
      </NavigationContainer>
    );
}