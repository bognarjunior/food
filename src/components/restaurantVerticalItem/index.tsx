import { Image, Text, Pressable, View } from 'react-native'
import React from 'react'
import { Restaurant } from '@/src/interfaces/restaurant'
import { Ionicons } from '@expo/vector-icons'

export default function RestaurantVerticalItem({ restaurant } : { restaurant: Restaurant}) {
  return (
    <Pressable className="flexm flex-row items-center justify-start gap-2">
      <Image 
        source={{uri: restaurant.image}}
        className="w-20 h-20 rounded-full"
      />
      <View className="flex gap-2">
        <Text 
          className="text-base text-black leading-4 font-bold"
          numberOfLines={2}
        >
          {restaurant.name}
        </Text>

        <View className="flex-row items-center gap-1">
          <Ionicons name="star" size={14} color="#ca8a04"/>
          <Text className="text-sm">{restaurant.rating}</Text>
        </View>
      </View>
    </Pressable>
  )
}