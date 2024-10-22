import { ReactNode } from 'react';

export interface TabBarItemProps {
  routeName: string;
  label:
    | string
    | ((props: { focused: boolean; color: string; position: any; children: string }) => ReactNode);
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
}
