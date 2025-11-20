import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../../theme';
import Badge from '../ui/Badge';

export interface TransactionCardProps {
  category: string;
  amount: number;
  note?: string;
  date: string;
  time: string;
  paymentMethod: string;
  type: 'income' | 'expense';
  onPress?: () => void;
}

export default function TransactionCard({
  category,
  amount,
  note,
  date,
  time,
  paymentMethod,
  type,
  onPress,
}: TransactionCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={!onPress}
    >
      <View style={styles.left}>
        <Badge label={category} size="sm" />
        {note && <Text style={styles.note}>{note}</Text>}
        <Text style={styles.meta}>
          {time} {paymentMethod}
        </Text>
      </View>
      
      <Text
        style={[
          styles.amount,
          { color: type === 'income' ? colors.success : colors.error },
        ]}
      >
        ₹ {amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    backgroundColor: colors.dark.surface,
    borderRadius: borderRadius.base,
    marginBottom: spacing[2],
  },
  left: {
    flex: 1,
  },
  note: {
    fontSize: typography.fontSize.base,
    color: colors.dark.text.primary,
    marginTop: spacing[1],
  },
  meta: {
    fontSize: typography.fontSize.xs,
    color: colors.dark.text.tertiary,
    marginTop: spacing[1],
  },
  amount: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    fontFamily: typography.fontFamily.mono,
  },
});
