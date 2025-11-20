import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export interface HeaderProps {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcons?: React.ReactNode[];
  onLeftPress?: () => void;
}

export default function Header({
  title,
  leftIcon,
  rightIcons,
  onLeftPress,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity onPress={onLeftPress} style={styles.leftIcon}>
          {leftIcon}
        </TouchableOpacity>
      )}
      
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.rightIcons}>
        {rightIcons?.map((icon, index) => (
          <View key={index} style={styles.rightIcon}>
            {icon}
          </View>
        ))}
      </View>
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
    backgroundColor: colors.dark.surface,
  },
  leftIcon: {
    width: 40,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.dark.text.primary,
    flex: 1,
    textAlign: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    width: 40,
    justifyContent: 'flex-end',
  },
  rightIcon: {
    marginLeft: spacing[3],
  },
});
