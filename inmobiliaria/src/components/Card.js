import React from "react";
import { View,StyleSheet } from "react-native";
import { backgroundCardColor} from "../constants/colors";
import DescriptionSection from "./DescriptionSection";
import Like from "./Like";
import RatingSection from "./RatingSection";

export default function Card({item}){
   
    return(
        <View style={styles.card}>
            <RatingSection img={item.img} rating={item.rating}/>
            <DescriptionSection title={item.title} location={item.location} price={item.price} specifications={item.specifications}/>
            <Like/>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        backgroundColor:backgroundCardColor,
        width:350,
        height:135,
        borderRadius:15,
        margin:10
        
      },
      
})