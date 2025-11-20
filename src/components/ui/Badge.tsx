import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../../theme';

export interface BadgeProps {
  label: string;
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Badge({
  label,
  variant = 'default',
  size = 'md',
  style,
  textStyle,
}: BadgeProps) {
  return (
    <View
      style={[
        styles.base,
        styles[variant],
        styles[`size_${size}`],
        style,
      ]}
    >
      <Text style={[styles.text, styles[`text_${size}`], textStyle]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
  },
  
  // Variants
  default: {
    backgroundColor: colors.dark.surfaceElevated,
  },
  success: {
    backgroundColor: colors.successBg,
  },
  error: {
    backgroundColor: colors.errorBg,
  },
  warning: {
    backgroundColor: colors.warningBg,
  },
  info: {
    backgroundColor: colors.infoBg,
  },
  
  // Sizes
  size_sm: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1] / 2,
  },
  size_md: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
  },
  
  // Text
  text: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.dark.text.primary,
  },
  text_sm: {
    fontSize: 10,
  },
  text_md: {
    fontSize: typography.fontSize.xs,
  },
});
