import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';
import Card from '../ui/Card';

export interface SummaryCardProps {
  label: string;
  amount: number;
  currency?: string;
  variant?: 'neutral' | 'positive' | 'negative';
}

export default function SummaryCard({
  label,
  amount,
  currency = '₹',
  variant = 'neutral',
}: SummaryCardProps) {
  const getColor = () => {
    switch (variant) {
      case 'positive':
        return colors.success;
      case 'negative':
        return colors.error;
      default:
        return colors.dark.text.primary;
    }
  };
  
  return (
    <Card padding={3} style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.amount, { color: getColor() }]}>
        {currency} {amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: typography.fontSize.xs,
    color: colors.dark.text.secondary,
    marginBottom: spacing[1],
    textTransform: 'uppercase',
  },
  amount: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    fontFamily: typography.fontFamily.mono,
  },
});
