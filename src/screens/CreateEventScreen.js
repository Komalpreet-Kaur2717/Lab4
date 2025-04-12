// src/screens/CreateEventScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';


const CreateEventScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');

  const handleCreate = async () => {
    if (!title.trim()) return Alert.alert('Validation', 'Title is required');

    try {
      await firestore().collection('events').add({ title });
      Alert.alert('Success', 'Event created');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Event Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default CreateEventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
