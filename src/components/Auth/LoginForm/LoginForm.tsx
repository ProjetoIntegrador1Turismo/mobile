import { View, Text } from 'react-native';

import { ControlledInput } from '../ControlledInput/ControlledInput';

export function LoginForm() {
  return (
    <View className='flex gap-1'>
      <ControlledInput label='E-mail' placeholder='Digite seu e-mail' />
      <ControlledInput label='Password' placeholder='Digite sua senha' />
    </View>
  );
}
