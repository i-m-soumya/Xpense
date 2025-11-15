import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("xpense.db");

// Helper to run INSERT/UPDATE/DELETE
export const runAsync = (query: string, params: any[] = []) => {
  return db.runAsync(query, params);
};

// Helper to fetch rows
export const getAllAsync = <T = any>(query: string, params: any[] = []) => {
  return db.getAllAsync<T>(query, params);
};
