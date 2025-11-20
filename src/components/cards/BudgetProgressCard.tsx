import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';
import ProgressBar from '../ui/ProgressBar';

export interface BudgetProgressCardProps {
  category: string;
  budget: number;
  spent: number;
  color: string;
}

export default function BudgetProgressCard({
  category,
  budget,
  spent,
  color,
}: BudgetProgressCardProps) {
  const remaining = budget - spent;
  const progress = (spent / budget) * 100;
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.remaining}>
          {remaining.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </Text>
      </View>
      
      <ProgressBar progress={progress} color={color} showPercentage />
      
      <View style={styles.footer}>
        <Text style={styles.budget}>
          ₹ {budget.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </Text>
        <Text style={styles.spent}>
          {spent.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.dark.borderLight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[2],
  },
  category: {
    fontSize: typography.fontSize.base,
    color: colors.dark.text.secondary,
  },
  remaining: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    fontFamily: typography.fontFamily.mono,
    color: colors.dark.text.primary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing[2],
  },
  budget: {
    fontSize: typography.fontSize.sm,
    color: colors.dark.text.tertiary,
  },
  spent: {
    fontSize: typography.fontSize.sm,
    color: colors.chart.blue,
  },
});
