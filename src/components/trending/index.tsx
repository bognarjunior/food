import { View, Text, FlatList } from 'react-native'
import { useState, useEffect} from 'react'
import Food from '../food';

export default function Trending() {
  const [foods, setFoods]  = useState([]);
  return (
    <FlatList 
      data={foods}
      renderItem={({ item }) => <Food/>}
    />
  )
}