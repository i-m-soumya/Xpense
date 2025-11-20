export const getDayOfWeek = (dateString: string): string => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const date = new Date(dateString);
  return days[date.getDay()];
};

export const getDayNumber = (dateString: string): number => {
  const date = new Date(dateString);
  return date.getDate();
};

export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

export const groupTransactionsByDate = (
  transactions: any[]
): any[] => {
  const grouped = transactions.reduce((acc, transaction) => {
    const date = transaction.date.split('T')[0]; // Get YYYY-MM-DD
    
    if (!acc[date]) {
      acc[date] = {
        date,
        dayOfWeek: getDayOfWeek(transaction.date),
        dayNumber: getDayNumber(transaction.date),
        transactions: [],
        totalIncome: 0,
        totalExpense: 0,
      };
    }
    
    acc[date].transactions.push(transaction);
    
    // Assuming amount > 0 is expense, < 0 is income (adjust based on your schema)
    if (transaction.amount > 0) {
      acc[date].totalExpense += transaction.amount;
    } else {
      acc[date].totalIncome += Math.abs(transaction.amount);
    }
    
    return acc;
  }, {} as Record<string, any>);
  
  return Object.values(grouped).sort((a: any, b: any) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getMonthSummary = (transactions: any[]): any => {
  return transactions.reduce(
    (acc, transaction) => {
      if (transaction.amount > 0) {
        acc.totalExpense += transaction.amount;
      } else {
        acc.totalIncome += Math.abs(transaction.amount);
      }
      acc.transactionCount++;
      return acc;
    },
    { totalIncome: 0, totalExpense: 0, transactionCount: 0 }
  );
};
