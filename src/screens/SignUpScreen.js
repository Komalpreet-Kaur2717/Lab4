import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Account created!');
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Signup Error', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <Button title="Sign Up" onPress={handleSignUp} />

      <Text style={styles.switchText}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;

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
