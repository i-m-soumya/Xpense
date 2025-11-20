import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius } from '../../theme';

export interface HorizontalTabBarProps {
  tabs: string[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export default function HorizontalTabBar({
  tabs,
  activeIndex,
  onChange,
}: HorizontalTabBarProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            index === activeIndex && styles.tabActive,
          ]}
          onPress={() => onChange(index)}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.tabText,
              index === activeIndex && styles.tabTextActive,
            ]}
          >
            {tab}
          </Text>
          {index === activeIndex && <View style={styles.indicator} />}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
  tab: {
    marginRight: spacing[6],
    paddingVertical: spacing[2],
    position: 'relative',
  },
  tabActive: {
    // Active state
  },
  tabText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.dark.text.tertiary,
  },
  tabTextActive: {
    color: colors.dark.text.primary,
    fontWeight: typography.fontWeight.semibold,
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
  },
});
