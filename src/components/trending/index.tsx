import { View, Text, FlatList } from 'react-native'
import { useState, useEffect} from 'react'
import CardHorizontalFood from '../food';
import { FoodProps } from './../../interfaces/food';

export default function Trending() {
  const [foods, setFoods]  = useState<FoodProps[]>([]);
  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.49:3333/foods");
      const data = await response.json();
      setFoods(data);
    }
    getFoods();
  }, [])
  return (
    <FlatList 
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item}/>}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
      showsHorizontalScrollIndicator={false}
    />
  )
}