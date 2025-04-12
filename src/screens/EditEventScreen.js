// src/screens/EditEventScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const EditEventScreen = ({ route, navigation }) => {
  const { event } = route.params;
  const [title, setTitle] = useState(event.title);

  const handleUpdate = async () => {
    try {
      await firestore().collection('events').doc(event.id).update({ title });
      Alert.alert('Success', 'Event updated!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} />
      <Button title="Update Event" onPress={handleUpdate} />
    </View>
  );
};

export default EditEventScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
