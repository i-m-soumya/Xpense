import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { createTables } from "./src/database/tables";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await createTables();
      setLoading(false);
    };
    init();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator size="large" color="black" />
        <Text style={{ marginTop: 10 }}>Setting up database...</Text>
      </View>
    );
  }

  return <AppNavigator />;
}
