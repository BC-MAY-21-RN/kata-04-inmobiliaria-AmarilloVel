import React from "react";
import { View,FlatList,Text,StyleSheet } from "react-native";
import Card from "./Card";

const CardList = ({data}) => {
    const renderItem = ({ item }) => (
            <Card img={item.img} rating={item.rating} title={item.title} location={item.location}
                    price={item.price} specifications={item.specifications}/>
    )

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Inmobiliaria</Text>
            <FlatList 
                data={data}
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