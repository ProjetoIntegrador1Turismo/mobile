import { Image, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CustomText } from '~/src/components/Text/CustomText';
import { BasicPointCardProps } from '~/src/components/Point/BasicPoint/BasicPointCard.types'
import Entypo from '@expo/vector-icons/Entypo';
import { truncatedPointName } from '~/src/components/Point/BasicPoint/BasicPointCardViewModel'
import { AverageValue } from '~/src/components/Price/AverageValue/AverageValue';
import { cn } from '~/src/common/utils/cn';

export function BasicPointCard({ data, className }: { data: BasicPointCardProps, className?: string }) {

    const {pointName, maxPointNameLength = 20, averageRating, averageValue, imageCover, onPress } = data;

    return (        
        <TouchableOpacity onPress={onPress}>
            <View className={cn('relative border-2 h-[85px] w-[100%] rounded-2xl flex-row', className)}>
                <Image
                    source={{ uri: imageCover }}
                    className='w-full h-full rounded-2xl opacity-60'
                    resizeMode='cover'
                />
                <View className='absolute flex-row items-center justify-between w-full h-full px-4'>
                    <View className='flex-col'>
                        <CustomText
                            className='text-white mt-[5px]'
                            weight='bold'
                            size={20}
                        >
                            {truncatedPointName(pointName, maxPointNameLength)}
                        </CustomText>
                        <View className='flex-row mt-1'>
                            <Entypo name='star' size={16} color='#FF007F' />
                            <CustomText
                                className='text-white ml-[2px] mt-[-4px]'
                                size={16}
                                weight='bold'
                            >
                                {averageRating}
                            </CustomText>
                            <View className='flex-row ml-[20px] items-center mb-[8px]'>
                                <AntDesign name='right' size={12} color='white' />
                                <AverageValue value={averageValue} />
                            </View>
                        </View>
                    </View>
                    <View>
                        <AntDesign name='arrowright' size={30} color='white' />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
