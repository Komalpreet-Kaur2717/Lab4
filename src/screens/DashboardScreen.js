// src/screens/DashboardScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const DashboardScreen = ({ navigation }) => {
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => navigation.replace('SignIn'))
      .catch((error) => Alert.alert('Sign Out Error', error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Event Organizer</Text>

      <View style={styles.buttonGroup}>
        <Button title="View Events" onPress={() => navigation.navigate('ViewEvent')} />
        <Button title="Create Event" onPress={() => navigation.navigate('CreateEvent')} />
        <Button title="Favourites" onPress={() => navigation.navigate('Favourites')} />
      </View>

      <Button title="Sign Out" onPress={handleSignOut} color="red" />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonGroup: {
    marginBottom: 40,
    gap: 15,
  },
});
