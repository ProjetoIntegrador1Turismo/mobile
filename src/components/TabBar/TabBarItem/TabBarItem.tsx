import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { useAuthStore } from 'src/common/stores/AuthStore';
import { colors } from 'src/common/utils/colors';
import { TabBarItemProps } from 'src/components/TabBar/TabBarItem/TabBarItem.types';
import { useTabBarItemViewModel } from 'src/components/TabBar/TabBarItem/TabBarItemViewModel';

const DefaultTabBarIcon: Record<string, (props: { color: string }) => JSX.Element> = {
  '(home)': (props: { color: string }) => <Feather name='home' size={24} {...props} />,
  '(search)': (props: { color: string }) => <Feather name='search' size={24} {...props} />,
  '(dynamic)': (props: { color: string }) => <Feather name='heart' size={24} {...props} />,
  '(profile)': (props: { color: string }) => <Feather name='user' size={24} {...props} />,
  index: (props: { color: string }) => <Feather name='user' size={24} {...props} />,
};

const GuideTabBarIcon: Record<string, (props: { color: string }) => JSX.Element> = {
  '(home)': (props: { color: string }) => <Feather name='home' size={24} {...props} />,
  '(search)': (props: { color: string }) => <Feather name='search' size={24} {...props} />,
  '(dynamic)': (props: { color: string }) => <Feather name='compass' size={24} {...props} />,
  '(profile)': (props: { color: string }) => <Feather name='user' size={24} {...props} />,
  index: (props: { color: string }) => <Feather name='user' size={24} {...props} />,
};

export function TabBarItem({ routeName, onPress, onLongPress, isFocused, label }: TabBarItemProps) {
  const { animatedTextStyle, animatedIconStyle } = useTabBarItemViewModel(isFocused);
  const user = useAuthStore((state) => state.user);
  const isGuide = user?.userType === 'Guide';

  // Use Guide icons only if user is authenticated and is a Guide, otherwise use default (Tourist) icons
  const TabBarIcon = isGuide ? GuideTabBarIcon : DefaultTabBarIcon;

  return (
    <Pressable
      key={routeName}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.TabBarItem}>
      <Animated.View style={animatedIconStyle}>
        {TabBarIcon[routeName]({ color: colors.white })}
      </Animated.View>
      <Animated.Text
        style={[
          animatedTextStyle,
          { fontSize: 12, color: colors.white, fontFamily: 'Poppins_400Regular' },
        ]}>
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
