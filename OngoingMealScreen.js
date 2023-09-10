import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OngoingMealScreen = () => {
  const days = {
    "Monday": {
      "Breakfast": ["Poha", "Sev / Namkeen", "Boiled Sweet Corn", "Omelette", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Lemon Rice", "Plain Rice", "Moong Dal", "Rasam", "Torai Chana Dry", "Chole Masala", "Plain Roti / Fulka Roti", "Buttermilk", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Vada Pav", "Green Chutney & Dry Red Chutney", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Plain Rice", "Mix Dal", "Black Channa Masala Dry", "Aloo Rasewalla", "Poori", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Kheer"]
    },
    "Tuesday": {
      "Breakfast": ["Upma / Sheera", "Coconut Chutney", "Boiled Peanuts", "Boiled Egg", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Onion Fried Rice", "Plain Rice", "Arhar Dal", "Sambhar", "Moong Masala Dry", "Gobi Mutter Rasewalla", "Plain Roti / Butter Roti", "Buttermilk", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Dahi Wada", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Corn Rice", "Plain Rice", "Moong Dal", "Paneer Kohlapuri", "Plain Roti / Fulka Roti", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Gulab Jamun"]
    },
    "Wednesday": {
      "Breakfast": ["Methi Paratha", "Veg Korma", "Channa Masala", "Egg Bhurji", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Curd Rice", "Plain Rice", "Masoor Dal", "Rasam", "Cabbage Capsicum Dry", "Manchurian Gravy", "Plain Roti / Butter Roti", "Lassi", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Veg Cutlet", "Red Chutney", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Plain Rice", "Dal Tadka", "Kashmiri Dum Aloo", "Chawali Masala", "Plain Roti / Fulka Roti", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Ice Cream / Kulfi"]
    },
    "Thursday": {
      "Breakfast": ["Idli Vada", "Sambar / Chutney", "Black Channa Sprouts", "Boiled Egg", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Lemon Rice", "Plain Rice", "Dal Palak", "Sambhar", "Bhindi Fry", "Soya Chunks Masala Dry", "Plain Roti / Butter Roti", "Curd", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Pav Bhaji", "Chopped Onion & Lemon", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Plain Rice", "Jeera Rice", "Dal Tadka", "Paneer Chilli", "Plain Roti / Fulka Roti", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Moong Dal Halwa"]
    },
    "Friday": {
      "Breakfast": ["Poori", "Chole", "Green Moong Sprouts", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Veg Biryani", "Egg Biryani", "Veg Raita", "Mix Veg Curry", "Plain Roti / Fulka Roti", "Rasna", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Veg Maggi", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Tomato Rice", "Plain Rice", "Mix Dal", "Mushroom Masala", "Rajma Masala", "Plain Roti / Fulka Roti", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Fruit Custard"]
    },
    "Saturday": {
      "Breakfast": ["Masala Dosa", "Sambar / Chutney", "Matki Sprouts", "Boiled Egg", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Jeera Rice", "Dal Tadka", "Sambhar", "Gawar Masala Dry", "Aloo Mutter", "Plain Roti / Butter Roti", "Buttermilk", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Samosa", "Green Chilli & Red Chutney", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Onion Masala Rice", "Plain Rice", "Dal Panchratna", "Matki Masala Dry", "Veg Kadhai Gravy", "Plain Roti / Fulka Roti", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Ice Cream"]
    },
    "Sunday": {
      "Breakfast": ["Aloo Paratha", "Curd", "Green Moong Sprouts", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Plain Rice", "Toor Dal", "Egg Curry", "Paneer Tawa Masala", "Plain Roti / Butter Roti", "Mango Rasna", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Pakoda", "Green Chutney", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Veg Pulao", "Raita", "Green Chawli Subzi", "Mix Veg Curry", "Plain Roti / Fulka Roti", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Kala Jamun"]
    }
  };

  const getCurrentMeal = () => {
    const currentDayIndex = new Date().getDay();
    const currentDayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDayIndex];
    const currentDayMenu = days[currentDayName];

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let currentMeal;

    if (currentHour >= 7 && currentHour < 11) {
      currentMeal = 'Breakfast';
    } else if (currentHour >= 11 && currentHour < 15) {
      currentMeal = 'Lunch';
    } else if (currentHour >= 15 && currentHour < 18) {
      currentMeal = 'Snacks';
    } else {
      currentMeal = 'Dinner';
    }

    return currentDayMenu[currentMeal];
  };

  const [ongoingMeal, setOngoingMeal] = useState(getCurrentMeal());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentMeal = getCurrentMeal();
      setOngoingMeal(currentMeal);
    }, 1000 * 60); // Update every minute

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Ongoing Meal</Text>
      <View style={styles.mealContainer}>
        <Text style={styles.mealText}>Current Meal:</Text>
        <View style={styles.mealItemsContainer}>
          {ongoingMeal.map((item, index) => (
            <View key={index} style={styles.mealItem}>
              <Text style={styles.mealItemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mealContainer: {
    alignItems: 'center',
  },
  mealText: {
    fontSize: 18,
    marginBottom: 10,
  },
  mealItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  mealItem: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },
  mealItemText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default OngoingMealScreen;