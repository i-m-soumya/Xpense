import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../../theme';

export interface DayBadgeProps {
  day: number;
  dayOfWeek: string; // 'Mon', 'Tue', etc.
  variant?: 'default' | 'today' | 'weekend';
}

export default function DayBadge({
  day,
  dayOfWeek,
  variant = 'default',
}: DayBadgeProps) {
  const getBadgeColor = () => {
    switch (variant) {
      case 'today':
        return colors.primary;
      case 'weekend':
        return colors.error;
      default:
        return colors.dark.text.tertiary;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.day, { color: getBadgeColor() }]}>{day}</Text>
      <View style={[styles.badge, { backgroundColor: getBadgeColor() }]}>
        <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: spacing[3],
  },
  day: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing[1],
  },
  badge: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1] / 2,
    borderRadius: borderRadius.sm,
  },
  dayOfWeek: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.white,
  },
});
