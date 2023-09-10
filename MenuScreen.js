import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const MenuScreen = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
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
  const getCurrentDayMenu = () => {
    const currentDayIndex = new Date().getDay();
    const currentDayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDayIndex];
    return days[currentDayName];
  };


  const currentDayMenu = getCurrentDayMenu();

  const toggleCategory = (category) => {
    setExpandedCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(currentDayMenu).map((mealType, index) => (
        <View key={index} style={styles.dayContainer}>
          <TouchableOpacity
            onPress={() => toggleCategory(mealType)}
            style={styles.dayHeader}
          >
            <Text style={styles.dayHeaderText}>{mealType}</Text>
            <Icon
              name={expandedCategories[mealType] ? 'ios-arrow-up' : 'ios-arrow-down'}
              size={20}
              color="#333"
            />
          </TouchableOpacity>
          {expandedCategories[mealType] && (
            <View>
              {currentDayMenu[mealType].map((meal, mealIndex) => (
                <MealItem key={mealIndex} item={meal} />
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const MealItem = ({ item }) => (
  <View style={styles.mealContainer}>
    <Text style={styles.mealText}>{item}</Text>
  </View>
);

const MenuDay = ({ day, meals }) => (
  <View style={styles.dayContainer}>
    <Text style={styles.dayText}>{day}:</Text>
    {meals.map((meal, index) => (
      <MealItem key={index} item={meal} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mealContainer: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
  },
  mealText: {
    fontSize: 16,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  dayHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
export default MenuScreen;
