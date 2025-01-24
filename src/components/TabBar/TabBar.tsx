import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from 'src/common/utils/colors';
import { TabBarItem } from 'src/components/TabBar/TabBarItem/TabBarItem';
import { useTabBarViewModel } from 'src/components/TabBar/TabBarViewModel';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

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
      <View style={styles.BackgroundContainer}>
        <AnimatedLinearGradient
          style={[dynamicAnimatedTabBgStyle, animatedTabPositionStyle, styles.AnimatedBg]}
          colors={[colors.TlRed, colors.TlPurple]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        />
      </View>
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
    borderRadius: 50,
  },
  AnimatedBg: {
    borderRadius: 50,
    position: 'absolute',
  },
  BackgroundContainer: {
    position: 'absolute',
    top: 10,
    left: 12,
    right: 12,
    bottom: 10,
    overflow: 'hidden',
    borderRadius: 50,
  },
});
