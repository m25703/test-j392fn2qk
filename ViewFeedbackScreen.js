import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ViewFeedbackScreen = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchedFeedback = [
        {
            id: '1',
            name: 'Username_1',
            feedbackText: 'This is amazing!',
            imageUri: null,
            timestamp: '2023-08-21T10:30:00Z',
          },
          {
            id: '2',
            name: 'Username_2',
            feedbackText: 'Great work! Keep it up.',
            imageUri: require('./lbi.jpg'),
            timestamp: '2023-08-20T15:45:00Z',
          },
          {
            id: '3',
            name: 'Username_3',
            feedbackText: 'I love the new features.',
            imageUri: null,
            timestamp: '2023-08-19T08:15:00Z',
          },
          {
            id: '4',
            name: 'Username_4',
            feedbackText: 'The app is really user-friendly.',
            imageUri: require('./lbi.jpg'),
            timestamp: '2023-08-18T12:00:00Z',
          },
          {
            id: '5',
            name: 'Username_5',
            feedbackText: 'I encountered a minor bug in the settings page.',
            imageUri: null,
            timestamp: '2023-08-17T16:30:00Z',
          },
    ];

    setFeedbackList(fetchedFeedback);
  }, []);

  const renderFeedbackItem = ({ item }) => (
    <View style={styles.feedbackItem}>
      <View style={styles.feedbackHeader}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
      <Text style={styles.feedbackText}>{item.feedbackText}</Text>
      {item.imageUri && <Image source={{ uri: item.imageUri }} style={styles.feedbackImage} />}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={feedbackList}
        renderItem={renderFeedbackItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  listContainer: {
    padding: 20,
  },
  feedbackItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  feedbackHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#888',
  },
  feedbackText: {
    fontSize: 16,
    marginBottom: 10,
  },
  feedbackImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default ViewFeedbackScreen;
