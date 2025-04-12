// src/navigation/AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ViewEventScreen from '../screens/ViewEventScreen';
import DashboardScreen from '../screens/DashboardScreen';
import CreateEventScreen from '../screens/CreateEventScreen';
import EditEventScreen from '../screens/EditEventScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="ViewEvent" component={ViewEventScreen} options={{ title: 'View Event' }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
        <Stack.Screen name="CreateEvent" component={CreateEventScreen} options={{ title: 'Create Event' }} />
        <Stack.Screen name="EditEvent" component={EditEventScreen} options={{ title: 'Edit Event' }} />
        <Stack.Screen name="Favourites" component={FavouritesScreen} options={{ title: 'Favourite Events' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
