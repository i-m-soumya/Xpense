import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import BlackButton from "../components/BlackButton";
import { addBudget, getBudgets } from "../database/budget";

export default function BudgetScreen() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [items, setItems] = useState<any[]>([]);

  const load = async () => {
    setItems(await getBudgets());
  };

  const save = async () => {
    if (!name || !amount) return;
    await addBudget(name, Number(amount), type);
    setName("");
    setAmount("");
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Budget</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Amount"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
        style={styles.input}
      />

      <View style={styles.row}>
        <BlackButton label="Expense" onPress={() => setType("expense")} />
        <BlackButton label="Income" onPress={() => setType("income")} />
      </View>

      <BlackButton label="Save" onPress={save} />

      <FlatList
        style={{ marginTop: 20 }}
        data={items}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text>₹{item.amount}</Text>
            <Text>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: "#fff" },
  title: { fontSize: 22, marginBottom: 14, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    padding: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: { fontWeight: "bold", fontSize: 16 },
});
