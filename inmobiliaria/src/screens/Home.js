import React from "react";
import { View, StyleSheet,Text,ImageBackground} from "react-native";
import Card from "../components/Card";
import CardList from "../components/CardList";
import * as data from "../constants/data.json"

export default function Home(){

    const getInfo = () => {
        let info = []
        data.houses.forEach((house) =>{
            info.push(house)
        })
        
        return info
    }
    const info = getInfo();
    console.log(info)

    return(
        
    <View style={styles.container}>
       <CardList
       
       />
    </View>
    
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
      },
})

