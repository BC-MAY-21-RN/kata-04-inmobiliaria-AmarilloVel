import React from "react";
import { View,StyleSheet } from "react-native";
import { backgroundCardColor} from "../constants/colors";
import DescriptionSection from "./DescriptionSection";
import Like from "./Like";
import RatingSection from "./RatingSection";

export default function Card({img,rating,title,location,price,specifications}){
   
    return(
        <View style={styles.card}>
            <RatingSection img={img} rating={rating}/>
            <DescriptionSection title={title} location={location} price={price} specifications={specifications}/>
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