import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../../theme';

export interface FABProps {
  icon: React.ReactNode;
  onPress: () => void;
}

export default function FAB({ icon, onPress }: FABProps) {
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: spacing[6],
    right: spacing[4],
    width: 56,
    height: 56,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.lg,
  },
});
