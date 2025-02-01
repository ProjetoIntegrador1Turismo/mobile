import { View, TouchableOpacity, Modal } from 'react-native';
import { CustomText } from '../Text/CustomText';
import { AntDesign } from '@expo/vector-icons';

interface PopupMenuProps {
  visible: boolean;
  onClose: () => void;
  onDelete: () => void;
  position: {
    x: number;
    y: number;
  };
}

export function PopupMenu({ visible, onClose, onDelete, position }: PopupMenuProps) {
  return (
    <Modal transparent visible={visible} onRequestClose={onClose} animationType="fade">
      <TouchableOpacity 
        className="flex-1" 
        activeOpacity={1} 
        onPress={onClose}
      >
        <View 
          className="absolute bg-[#1C1C1E] rounded-xl border border-gray-700 overflow-hidden"
          style={{
            top: position.y,
            left: position.x,
            transform: [{ translateX: -100 }]
          }}
        >
          <TouchableOpacity 
            className="flex-row items-center px-4 py-3 space-x-2"
            onPress={onDelete}
          >
            <AntDesign name="delete" size={20} color="#EF4444" />
            <CustomText size={14} weight="regular" className="text-red-500">
              Deletar
            </CustomText>
          </TouchableOpacity>

          <View className="h-[1px] bg-gray-700" />

          <TouchableOpacity 
            className="flex-row items-center px-4 py-3 space-x-2"
            onPress={onClose}
          >
            <AntDesign name="close" size={20} color="white" />
            <CustomText size={14} weight="regular" className="text-white">
              Fechar
            </CustomText>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
