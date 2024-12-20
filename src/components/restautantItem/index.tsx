import { Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Restaurant } from '@/src/interfaces/restaurant'

export default function RestaurantItem({ restaurant } : { restaurant: Restaurant}) {
  return (
    <Pressable className="flex flex-col items-center justify-center">
      <Image
        source={{ uri: restaurant.image}} 
        className="w-20 h-20 rounded-full"
      />
      <Text 
        className="text-sm mt-2 w-20 text-center leading-4 text-black"
        numberOfLines={2}
      >
        {restaurant.name}
      </Text>
    </Pressable>
  )
}