import { Text, StyleSheet } from 'react-native';
import { CustomTextProps, TextComponentMapData } from 'src/components/Text/CustomText.types';

const TextComponent: Record<string, TextComponentMapData> = {
  regular: ({ size, children, className }) => (
    <Text className={className} style={[styles.regular, { fontSize: size }]}>
      {children}
    </Text>
  ),
  light: ({ size, children, className }) => (
    <Text className={className} style={[styles.light, { fontSize: size }]}>
      {children}
    </Text>
  ),
  bold: ({ size, children, className }) => (
    <Text className={className} style={[styles.bold, { fontSize: size }]}>
      {children}
    </Text>
  ),
};

export function CustomText({
  size = 14,
  weight = 'regular',
  className = '',
  children,
}: CustomTextProps) {
  return TextComponent[weight]({ size, children, className });
}

const styles = StyleSheet.create({
  light: {
    fontFamily: 'Poppins_200ExtraLight',
  },
  regular: {
    fontFamily: 'Poppins_400Regular',
  },
  bold: {
    fontFamily: 'Poppins_600SemiBold',
  },
});
