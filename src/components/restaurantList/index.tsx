import { Restaurant } from '@/src/interfaces/restaurant';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import RestaurantVerticalItem from '../restaurantVerticalItem';

export default function RestaurantVerticalList() {

  const [restaurants, setRestaurants]  = useState<Restaurant[]>([]);
  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.49:3333/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }
    getFoods();
  }, [])
  
  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map( item => (
        <RestaurantVerticalItem restaurant={item} key={item.id}/>
      ))}
    </View>
  )
}