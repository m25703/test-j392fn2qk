import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/Ionicons';

const RatingsScreen = () => {
  // Sample data for the charts
  const averageRatingsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data: [4.5, 4.7, 4.8, 4.6, 4.9],
      },
    ],
  };

  const foodwiseRatingsData = {
    labels: ['Breakfast', 'Lunch', 'Snacks', 'Dinner'],
    datasets: [
      {
        data: [4.5, 4.7, 4.8, 4.6],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>Average Ratings</Text>
        <LineChart data={averageRatingsData} width={400} height={200} chartConfig={chartConfig} />
      </View>

      <View style={[styles.section, styles.lightBackground]}>
        <Text style={styles.heading}>Weekly Ratings</Text>
        <View style={styles.weeklyTable}>
          {/* Render weekly ratings table */}
        </View>
      </View>

      <View style={[styles.section, styles.lightBackground]}>
        <Text style={styles.heading}>Foodwise Ratings</Text>
        <BarChart data={foodwiseRatingsData} width={400} height={200} chartConfig={chartConfig} />
        <View style={styles.legendContainer}>
          {/* Render food category icons and labels */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  lightBackground: {
    backgroundColor: '#F9F9F9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  weeklyTable: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    overflow: 'hidden',
  },
  weeklyTableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  weeklyTableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  weeklyTableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#CCC',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  weeklyTableCell: {
    flex: 1,
  },
  foodwiseRatingsContainer: {
    marginBottom: 20,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

const chartConfig = {
  backgroundGradientFrom: '#F5F5F5',
  backgroundGradientTo: '#F5F5F5',
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
};

export default RatingsScreen;
