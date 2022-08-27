import React from "react";
import { View,FlatList,Text,StyleSheet } from "react-native";
import Card from "./Card";
import * as data from "../constants/data.json"


const CardList = () => {
    const renderItem = ({ item }) => (
            <Card item={item}/>
    )

    return(
        <View style={styles.container}>
            <FlatList 
                data={data.houses}
                renderItem={renderItem}
                keyExtractor={item=> item.id}   
            
            
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      marginTop:40,
    
      },
})
export default CardList;