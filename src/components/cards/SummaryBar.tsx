import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export interface SummaryBarProps {
  income: number;
  expense: number;
  currency?: string;
}

export default function SummaryBar({
  income,
  expense,
  currency = '₹',
}: SummaryBarProps) {
  const total = income - expense;
  
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>Income</Text>
        <Text style={[styles.amount, { color: colors.chart.blue }]}>
          {currency} {income.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Exp.</Text>
        <Text style={[styles.amount, { color: colors.error }]}>
          {currency} {expense.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Total</Text>
        <Text style={[styles.amount, { color: total >= 0 ? colors.success : colors.error }]}>
          {currency} {total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: colors.dark.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.dark.border,
  },
  item: {
    alignItems: 'center',
  },
  label: {
    fontSize: typography.fontSize.sm,
    color: colors.dark.text.secondary,
    marginBottom: spacing[1],
  },
  amount: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    fontFamily: typography.fontFamily.mono,
  },
});
