import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../../theme';

export interface ContainerProps {
  children: React.ReactNode;
  padding?: keyof typeof spacing;
  safeArea?: boolean;
  style?: ViewStyle;
}

export default function Container({
  children,
  padding = 4,
  safeArea = true,
  style,
}: ContainerProps) {
  const containerStyle = [
    styles.container,
    { padding: spacing[padding] },
    style,
  ];
  
  if (safeArea) {
    return (
      <SafeAreaView style={containerStyle} edges={['top', 'bottom']}>
        {children}
      </SafeAreaView>
    );
  }
  
  return <View style={containerStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.background,
  },
});
