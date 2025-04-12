// src/screens/ViewEventScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ViewEventScreen = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const snapshot = await firestore().collection('events').get();
      const eventList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventList);
    } catch (error) {
      Alert.alert('Error', 'Failed to load events.');
    } finally {
      setLoading(false);
    }
  };

  const addToFavourites = async (event) => {
    try {
      const userId = auth().currentUser.uid;
      await firestore()
        .collection('favourites')
        .add({ ...event, userId });
      Alert.alert('Success', 'Event added to favourites!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  }

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Button title="⭐ Add to Favourites" onPress={() => addToFavourites(item)} />
        </View>
      )}
    />
  );
};

export default ViewEventScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
});
