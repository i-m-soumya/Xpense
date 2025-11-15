import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("xpense.db");

export const runAsync = (query: string, params: any[] = []) => {
  return db.runAsync(query, params);
};

export const getAllAsync = <T = any>(query: string, params: any[] = []) => {
  return db.getAllAsync<T>(query, params);
};
