import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { createTables } from "./src/database/tables";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setup = async () => {
      try {
        await createTables();
        console.log("📦 Database Ready");
      } catch (e) {
        console.log("DB Error:", e);
      } finally {
        setLoading(false); // ✅ STOP LOADING
      }
    };

    setup();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Setting up database...</Text>
      </View>
    );
  }

  // ✅ Now show your app UI
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>Database Ready 🎉</Text>
    </View>
  );
}
