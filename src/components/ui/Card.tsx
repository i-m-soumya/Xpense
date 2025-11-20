import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../../theme';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: keyof typeof spacing;
  style?: ViewStyle;
}

export default function Card({
  children,
  variant = 'default',
  padding = 4,
  style,
}: CardProps) {
  return (
    <View
      style={[
        styles.base,
        styles[variant],
        { padding: spacing[padding] },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius.md,
    backgroundColor: colors.dark.surface,
  },
  default: {
    borderWidth: 1,
    borderColor: colors.dark.borderLight,
  },
  elevated: {
    ...shadows.md,
    borderWidth: 0,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.dark.border,
  },
});
