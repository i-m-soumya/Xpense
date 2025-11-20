export interface Transaction {
  id: number;
  category: string;
  amount: number;
  note?: string;
  date: string; // ISO format
  budget_id?: number;
}

export interface GroupedTransaction {
  date: string; // YYYY-MM-DD
  dayOfWeek: string;
  dayNumber: number;
  transactions: Transaction[];
  totalIncome: number;
  totalExpense: number;
}

export interface MonthSummary {
  totalIncome: number;
  totalExpense: number;
  transactionCount: number;
}
