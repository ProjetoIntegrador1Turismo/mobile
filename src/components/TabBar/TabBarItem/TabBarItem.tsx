import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from 'src/common/utils/colors';
import { TabBarItemProps } from 'src/components/TabBar/TabBarItem/TabBarItem.types';
import { useTabBarItemViewModel } from 'src/components/TabBar/TabBarItem/TabBarItemViewModel';

const TabBarIcon: Record<string, (props: { color: string }) => JSX.Element> = {
  index: (props: { color: string }) => <Feather name='home' size={24} {...props} />,
  search: (props: { color: string }) => <Feather name='search' size={24} {...props} />,
  dynamic: (props: { color: string }) => <Feather name='heart' size={24} {...props} />,
  profile: (props: { color: string }) => <Feather name='user' size={24} {...props} />,
};

export function TabBarItem({ routeName, onPress, onLongPress, isFocused, label }: TabBarItemProps) {
  const { animatedTextStyle, animatedIconStyle } = useTabBarItemViewModel(isFocused);

  return (
    <Pressable
      key={routeName}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.TabBarItem}>
      <Animated.View style={animatedIconStyle}>
        {TabBarIcon[routeName]({ color: colors.white })}
      </Animated.View>
      <Animated.Text style={[animatedTextStyle, { fontSize: 12, color: colors.white }]}>
        {typeof label === 'string' ? label : ' '}
      </Animated.Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  TabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
