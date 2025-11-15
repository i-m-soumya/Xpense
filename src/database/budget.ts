import { runAsync, getAllAsync } from "./db";

export const addBudget = async (
  name: string,
  amount: number,
  type: "income" | "expense"
) => {
  try {
    await runAsync(
      `INSERT INTO budgets (name, amount, type) VALUES (?, ?, ?)`,
      [name, amount, type]
    );
    return true;
  } catch (e) {
    console.log("Add Budget Error:", e);
    return false;
  }
};

export const getBudgets = async () => {
  try {
    return await getAllAsync("SELECT * FROM budgets ORDER BY id DESC");
  } catch (e) {
    console.log("Get Budgets Error:", e);
    return [];
  }
};
