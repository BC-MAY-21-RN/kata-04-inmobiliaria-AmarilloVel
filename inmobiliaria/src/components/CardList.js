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
            <Text style={styles.text}>Inmobiliaria</Text>
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
      marginTop:10,
      marginBottom:10,
     
    
      },
      text:{
        paddingTop:40,
        fontSize:25,
        fontWeight:'800',
        paddingLeft:120,
        paddingBottom:10,
    }
})
export default CardList;