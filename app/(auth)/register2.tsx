import { useLocalSearchParams } from 'expo-router';
import { RegisterStepTwoView } from 'src/screens/Register/RegisterStepTwo/RegisterStepTwoView';

export default function Register2() {
  const { email, phone } = useLocalSearchParams();

  return <RegisterStepTwoView />;
}
