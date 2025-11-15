import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import { getExpenses } from "../database/expenses";
import { getIncome } from "../database/income";
import { PieChart } from "react-native-chart-kit";

export default function DashboardScreen() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const screenWidth = Dimensions.get("window").width;

  const load = async () => {
    const income = await getIncome();
    const expenses = await getExpenses();

    const incomeSum = income.reduce((acc, item) => acc + item.amount, 0);
    const expenseSum = expenses.reduce((acc, item) => acc + item.amount, 0);

    setTotalIncome(incomeSum);
    setTotalExpense(expenseSum);
  };

  useEffect(() => {
    load();
  }, []);

  const data = [
    {
      name: "Income",
      amount: totalIncome,
      color: "#4CAF50",
      legendFontColor: "#333",
      legendFontSize: 14,
    },
    {
      name: "Expenses",
      amount: totalExpense,
      color: "#F44336",
      legendFontColor: "#333",
      legendFontSize: 14,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <Text style={styles.summary}>Total Income: ₹{totalIncome}</Text>
      <Text style={styles.summary}>Total Expense: ₹{totalExpense}</Text>

      <PieChart
        data={data}
        width={screenWidth - 20}
        height={220}
        accessor={"amount"}
        backgroundColor={"transparent"}
        paddingLeft={"10"}
        chartConfig={{
          color: () => "#000",
        }}
        absolute
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  summary: { fontSize: 18, marginBottom: 10 },
});
