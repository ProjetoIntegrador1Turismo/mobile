import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from 'src/common/utils/colors';
import { TabBarItem } from 'src/components/TabBar/TabBarItem/TabBarItem';
import { useTabBarViewModel } from 'src/components/TabBar/TabBarViewModel';

export function TabBar({ state, navigation, descriptors, insets }: BottomTabBarProps) {
  const { Dimensions, animatedTabPositionStyle, buttonWidth, onTabBarLayout, tabs } =
    useTabBarViewModel({
      state,
      navigation,
      descriptors,
      insets,
    });

  const dynamicAnimatedTabBgStyle = {
    height: Dimensions.height - 20,
    width: buttonWidth - 24,
  };

  return (
    <View onLayout={onTabBarLayout} style={styles.TabBar}>
      <Animated.View
        style={[dynamicAnimatedTabBgStyle, animatedTabPositionStyle, styles.AnimatedBg]}
      />
      {tabs.map(({ label, onPress, onLongPress, isFocused, routeName }) => (
        <TabBarItem
          key={routeName}
          isFocused={isFocused}
          onLongPress={onLongPress}
          onPress={onPress}
          routeName={routeName}
          label={label}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  TabBar: {
    backgroundColor: colors.BgTabBar,
    position: 'absolute',
    bottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 35,
  },
  AnimatedBg: {
    position: 'absolute',
    borderRadius: 30,
    marginHorizontal: 12,
    backgroundColor: colors.TabActive,
  },
});
