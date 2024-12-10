import AsyncStorage from '@react-native-async-storage/async-storage';
import UserModel from 'src/common/models/user.model';

export const storeObject = async (key: string, obj: object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
    console.warn(`Erro ao salvar objeto ${key}, ${error}`);
  }
};

export const getObject = async (key: string): Promise<UserModel | null> => {
  try {
    const jsonString = await AsyncStorage.getItem(key);
    if (jsonString !== null) {
      return JSON.parse(jsonString);
    }
  } catch (error) {
    console.warn(`Erro ao ler objeto ${key}, ${error}`);
    return null;
  }
  return null;
};

export const deleteEntry = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.warn(`Erro ao deletar entrada ${key}, ${error}`);
    return null;
  }
  return null;
};
