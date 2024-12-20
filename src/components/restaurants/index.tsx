import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Restaurant } from '@/src/interfaces/restaurant';
import RestaurantItem from '../restautantItem';

export default function Restaurants() {
  const [restaurants, setRestaurants]  = useState<Restaurant[]>([]);
  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.49:3333/restaurants");
      const data = await response.json();
      console.log(data);
      setRestaurants(data);
    }
    getFoods();
  }, [])
  return (
    <FlatList 
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurant={item}/>}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
      showsHorizontalScrollIndicator={false}
    />
  )
}