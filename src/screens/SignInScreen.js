// src/screens/SignInScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Signed in!');
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Sign In Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <Button title="Sign In" onPress={handleSignIn} />

      <Text style={styles.switchText}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  switchText: {
    marginTop: 20,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
  },
});
