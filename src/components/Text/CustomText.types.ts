export interface CustomTextProps {
  size?: 14 | 24 | 36;
  weight?: 'regular' | 'light' | 'bold';
  color?: string;
  children?: React.ReactNode;
}

interface TextComponentProps {
  size: number;
  color: string;
  children: React.ReactNode;
}

export type TextComponentMapData = ({ size, color, children }: TextComponentProps) => JSX.Element;
