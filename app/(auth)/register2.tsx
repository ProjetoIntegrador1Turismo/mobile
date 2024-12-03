import { useLocalSearchParams } from 'expo-router';
import { RegisterStepTwoView } from 'src/screens/Register/RegisterStepTwo/RegisterStepTwoView';

export default function Register2() {
  const { name, phone, cadastur } = useLocalSearchParams<{
    name: string;
    phone: string;
    cadastur: string;
  }>();

  return <RegisterStepTwoView StepOneData={{ name, phone, cadastur }} />;
}
