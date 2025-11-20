import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import FAB from '../components/layout/FAB';
import MonthYearPicker from '../components/navigation/MonthYearPicker';
import HorizontalTabBar from '../components/navigation/HorizontalTabBar';
import SummaryBar from '../components/cards/SummaryBar';
import TransactionCard from '../components/cards/TransactionCard';
import DayBadge from '../components/ui/DayBadge';
import { getExpenses } from '../database/expenses';
import { colors, spacing, typography } from '../theme';
import {
  groupTransactionsByDate,
  getMonthSummary,
  formatTime,
} from '../utils/dateHelpers';

export default function TransactionsScreen() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [activeTab, setActiveTab] = useState(0);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [groupedData, setGroupedData] = useState<any[]>([]);
  const [summary, setSummary] = useState({ totalIncome: 0, totalExpense: 0 });

  const tabs = ['Daily', 'Calendar', 'Monthly', 'Summary', 'Description'];

  useEffect(() => {
    loadTransactions();
  }, [currentMonth, currentYear]);

  const loadTransactions = async () => {
    const data = await getExpenses();
    
    // Filter by current month/year
    const filtered = data.filter((transaction: any) => {
      const date = new Date(transaction.date);
      return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      );
    });

    setTransactions(filtered);
    
    // Group by date
    const grouped = groupTransactionsByDate(filtered);
    setGroupedData(grouped);
    
    // Calculate summary
    const monthSummary = getMonthSummary(filtered);
    setSummary({
      totalIncome: monthSummary.totalIncome,
      totalExpense: monthSummary.totalExpense,
    });
  };

  const handleMonthChange = (month: number, year: number) => {
    setCurrentMonth(month);
    setCurrentYear(year);
  };

  const handleAddTransaction = () => {
    // Navigate to add transaction screen
    console.log('Add transaction');
  };

  const handleSearch = () => {
    console.log('Search');
  };

  const handleFilter = () => {
    console.log('Filter');
  };

  const renderDaySection = ({ section }: any) => (
    <View style={styles.sectionHeader}>
      <DayBadge
        day={section.dayNumber}
        dayOfWeek={section.dayOfWeek}
        variant={section.dayOfWeek === 'Sun' ? 'weekend' : 'default'}
      />
      
      <View style={styles.daySummary}>
        <Text style={[styles.dayAmount, { color: colors.chart.blue }]}>
          ₹ {section.totalIncome.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </Text>
        <Text style={[styles.dayAmount, { color: colors.error }]}>
          ₹ {section.totalExpense.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </Text>
      </View>
    </View>
  );

  const renderTransaction = ({ item }: any) => (
    <TransactionCard
      category={item.category}
      amount={item.amount}
      note={item.note}
      date={item.date}
      time={formatTime(item.date)}
      paymentMethod="Cash"
      type={item.amount > 0 ? 'expense' : 'income'}
      onPress={() => console.log('Transaction pressed', item.id)}
    />
  );

  return (
    <Container padding={0} safeArea>
      <Header
        title="Trans."
        leftIcon={
          <TouchableOpacity onPress={handleSearch}>
            <Ionicons name="search" size={24} color={colors.dark.text.primary} />
          </TouchableOpacity>
        }
        rightIcons={[
          <TouchableOpacity key="star" onPress={() => console.log('Star')}>
            <Ionicons name="star-outline" size={24} color={colors.dark.text.primary} />
          </TouchableOpacity>,
          <TouchableOpacity key="filter" onPress={handleFilter}>
            <Ionicons name="options-outline" size={24} color={colors.dark.text.primary} />
          </TouchableOpacity>,
        ]}
      />

      <MonthYearPicker
        currentMonth={currentMonth}
        currentYear={currentYear}
        onChange={handleMonthChange}
      />

      <HorizontalTabBar
        tabs={tabs}
        activeIndex={activeTab}
        onChange={setActiveTab}
      />

      <SummaryBar
        income={summary.totalIncome}
        expense={summary.totalExpense}
      />

      <SectionList
        sections={groupedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTransaction}
        renderSectionHeader={renderDaySection}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No transactions this month</Text>
          </View>
        }
      />

      <FAB
        icon={<Ionicons name="add" size={24} color={colors.white} />}
        onPress={handleAddTransaction}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  listContent: {
    padding: spacing[4],
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[3],
    marginTop: spacing[4],
  },
  daySummary: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing[4],
  },
  dayAmount: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    fontFamily: typography.fontFamily.mono,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing[12],
  },
  emptyText: {
    fontSize: typography.fontSize.base,
    color: colors.dark.text.tertiary,
  },
});
