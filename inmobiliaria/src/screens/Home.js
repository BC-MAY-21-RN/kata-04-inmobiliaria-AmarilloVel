import React from "react";
import { View, StyleSheet,Text,ImageBackground} from "react-native";
import Card from "../components/Card";
import CardList from "../components/CardList";
import * as data from "../constants/data.json"

export default function Home(){


    return(
    <View style={styles.container}>
       <CardList data={data.houses}/>
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

