import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import DashboardScreen from "../screens/DashboardScreen";
import BudgetScreen from "../screens/BudgetScreen";
import ExpenseScreen from "../screens/ExpenseScreen";
import IncomeScreen from "../screens/IncomeScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#888",

          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopColor: "#ddd",
            height: 60,
            paddingBottom: 6,
          },

          tabBarIcon: ({ color, size }) => {
            const icons: any = {
              Dashboard: "view-dashboard-outline",
              Budget: "wallet-outline",
              Expenses: "cash-minus",
              Income: "cash-plus",
            };
            return (
              <MaterialCommunityIcons
                name={icons[route.name]}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Budget" component={BudgetScreen} />
        <Tab.Screen name="Expenses" component={ExpenseScreen} />
        <Tab.Screen name="Income" component={IncomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
