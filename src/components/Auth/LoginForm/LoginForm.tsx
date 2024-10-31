import { View, Text } from 'react-native';
import { ControlledInput } from '../ControlledInput/ControlledInput';

export function LoginForm() {
  return (
    <View>
      <ControlledInput label='E-mail' placeholder='Digite seu e-mail' />
      <ControlledInput label='Password' placeholder='Digite sua senha' />
    </View>
  );
}
