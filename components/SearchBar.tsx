import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
  placeholder: string;
  onPress: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-4 py-2'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff" />
      <TextInput 
        onPress={() => {}}
        placeholder='Search'
        value=''
        onChange={() => {}}
        placeholderTextColor='#ab85db'
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar