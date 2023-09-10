import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';
import MenuScreen from './MenuScreen';
import FeedbackScreen from './FeedbackScreen';
import ViewFeedbackScreen from './ViewFeedbackScreen';
import NotificationScreen from './NotificationScreen';
import ComplaintsScreen from './ComplaintsScreen';
import RatingsScreen from './RatingsScreen'
import OngoingMealScreen from './OngoingMealScreen'
import CreateAnnouncementScreen from './CreateAnnouncementScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Create Announcement" component={CreateAnnouncementScreen} />
        <Stack.Screen name="Ratings" component={RatingsScreen} />
        <Stack.Screen name="Complaints" component={ComplaintsScreen} />
        <Stack.Screen name="Ongoing Meal" component={OngoingMealScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="View Feedback" component={ViewFeedbackScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
