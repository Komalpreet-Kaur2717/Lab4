// src/screens/FavouritesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const FavouritesScreen = () => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavourites = async () => {
    try {
      const userId = auth().currentUser.uid;

      const snapshot = await firestore()
        .collection('favourites')
        .where('userId', '==', userId)
        .get();

      const favList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFavourites(favList);
    } catch (error) {
      Alert.alert('Error', 'Failed to load favourite events.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  }

  return (
    <FlatList
      data={favourites}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
      ListEmptyComponent={<Text style={styles.empty}>No favourites yet.</Text>}
    />
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#e6f7ff',
  },
  title: {
    fontSize: 18,
  },
  empty: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});
