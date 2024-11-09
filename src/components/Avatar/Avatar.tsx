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
        style={{ width: 41, height: 41 }}
        className='rounded-full'
      />
  );
}
