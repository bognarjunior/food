import { View, ScrollView } from "react-native";
import Header from "../components/header";
import Constants from 'expo-constants';
import Banner from "../components/banner";
import Search from "../components/search";
import Section from "../components/section";
import Trending from "../components/trending";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView  style={{flex: 1}} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
        
      </View>
      <Section 
        name="Comidas em alta"
        label="Veja mais"
        action={() => console.log("Clicou no botão")}
        size="text-2xl"
      />
      <Trending />
      <Section 
        name="Famosos no MyFood"
        label="Veja todas"
        action={() => console.log("Clicou no botão")}
        size="text-lg"
      />
      
    </ScrollView>
  );
}
