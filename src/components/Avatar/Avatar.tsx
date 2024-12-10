import React from 'react';
import { Image } from 'react-native';
import { BASE_URL } from '~/src/common/repositories/client';

interface AvatarProps {
  imageUrl: string;
  size?: number;
}

export function Avatar({ imageUrl, size = 40 }: AvatarProps) {
  return (
    <Image
      source={{ uri: BASE_URL + imageUrl }}
      style={{ width: size, height: size }}
      className='rounded-full'
    />
  );
}
