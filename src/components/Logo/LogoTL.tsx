import { Image } from 'react-native';
import React from 'react';
import { cn } from 'src/common/utils/cn';
import { LogoTLProps } from 'src/components/Logo/LogoTL.types';

export function LogoTl({ color, className }: LogoTLProps) {
  return <Image source={require('assets/logo-tl-white.png')} className={cn('h-16 w-20')} />;
}
