import React from 'react';
import { Image } from 'react-native';

interface AvatarProps {
  imageUrl: string;
  size?: number;
}

export function Avatar({ imageUrl, size = 40 }: AvatarProps) {
  return (
    <Image
        source={{ uri: imageUrl }}
        style={{ width: size, height: size }}
        className='rounded-full'
      />
  );
}
