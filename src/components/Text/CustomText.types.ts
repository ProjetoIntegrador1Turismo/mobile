export interface CustomTextProps {
  size?: 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 36;
  weight?: 'regular' | 'light' | 'bold';
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

interface TextComponentProps {
  size: number;
  children: React.ReactNode;
  className: string;
}

export type TextComponentMapData = ({
  size,
  children,
  className,
}: TextComponentProps) => JSX.Element;
