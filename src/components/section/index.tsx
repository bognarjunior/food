import { View, Text, Pressable } from 'react-native';
import { Promotion } from './../../interfaces/promotion';
export default function Section({name, size, label, action}: Promotion) {
  return (
    <View className="w-full flex flex-row items-center justify-between px-4">
      <Text className={`${size} font-semibold my-4 self-start`}>
        {name}
      </Text>
      <Pressable onPress={action}>
        <Text>{ label }</Text>
      </Pressable>
    </View>
  )
}