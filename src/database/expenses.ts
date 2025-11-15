import { runAsync, getAllAsync } from "./db";

// Add Expense
export const addExpense = async (
  category: string,
  amount: number,
  note: string,
  date: string,
  budget_id?: number
) => {
  try {
    await runAsync(
      `INSERT INTO expenses (category, amount, note, date, budget_id)
       VALUES (?, ?, ?, ?, ?)`,
      [category, amount, note, date, budget_id || null]
    );

    return true;
  } catch (e) {
    console.log("Add Expense Error:", e);
    return false;
  }
};

// Get Expenses
export const getExpenses = async () => {
  try {
    return await getAllAsync(
      "SELECT * FROM expenses ORDER BY date DESC, id DESC"
    );
  } catch (e) {
    console.log("Get Expenses Error:", e);
    return [];
  }
};
