import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../../theme';

export interface MonthYearPickerProps {
  currentMonth: number; // 0-11
  currentYear: number;
  onChange: (month: number, year: number) => void;
}

export default function MonthYearPicker({
  currentMonth,
  currentYear,
  onChange,
}: MonthYearPickerProps) {
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const handlePrevious = () => {
    if (currentMonth === 0) {
      onChange(11, currentYear - 1);
    } else {
      onChange(currentMonth - 1, currentYear);
    }
  };

  const handleNext = () => {
    if (currentMonth === 11) {
      onChange(0, currentYear + 1);
    } else {
      onChange(currentMonth + 1, currentYear);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrevious} style={styles.arrow}>
        <Ionicons name="chevron-back" size={24} color={colors.dark.text.primary} />
      </TouchableOpacity>

      <Text style={styles.text}>
        {monthNames[currentMonth]} {currentYear}
      </Text>

      <TouchableOpacity onPress={handleNext} style={styles.arrow}>
        <Ionicons name="chevron-forward" size={24} color={colors.dark.text.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
  },
  arrow: {
    padding: spacing[2],
  },
  text: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.dark.text.primary,
  },
});
