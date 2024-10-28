import { Text, StyleSheet } from 'react-native';
import { CustomTextProps, TextComponentMapData } from 'src/components/Text/CustomText.types';

const TextComponent: Record<string, TextComponentMapData> = {
  regular: ({ size, color, children }) => (
    <Text style={[styles.regular, { fontSize: size, color }]}>{children}</Text>
  ),
  light: ({ size, color, children }) => (
    <Text style={[styles.light, { fontSize: size, color }]}>{children}</Text>
  ),
  bold: ({ size, color, children }) => (
    <Text style={[styles.bold, { fontSize: size, color }]}>{children}</Text>
  ),
};

export function CustomText({
  size = 14,
  weight = 'regular',
  color = '#000',
  children,
}: CustomTextProps) {
  return TextComponent[weight]({ size, color, children });
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
