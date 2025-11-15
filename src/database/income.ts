import { runAsync, getAllAsync } from "./db";

// Add Income
export const addIncome = async (
  source: string,
  amount: number,
  date: string
) => {
  try {
    await runAsync(
      `INSERT INTO income (source, amount, date) 
       VALUES (?, ?, ?)`,
      [source, amount, date]
    );

    return true;
  } catch (e) {
    console.log("Add Income Error:", e);
    return false;
  }
};

// Get Income
export const getIncome = async () => {
  try {
    return await getAllAsync(
      "SELECT * FROM income ORDER BY date DESC"
    );
  } catch (e) {
    console.log("Get Income Error:", e);
    return [];
  }
};
