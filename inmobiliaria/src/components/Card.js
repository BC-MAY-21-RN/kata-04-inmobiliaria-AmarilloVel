import React from "react";
import { View,StyleSheet } from "react-native";
import { backgroundCardColor} from "../constants/colors";
import DescriptionSection from "./DescriptionSection";
import Like from "./Like";
import RatingSection from "./RatingSection";

export default function Card({/*img,nombre,location,numBath,numBedrooms,feets,price*/}){
   
    return(
        <View style={styles.card}>
            <RatingSection/>
            <DescriptionSection/>
            <Like/>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        backgroundColor:backgroundCardColor,
        width:"88%",
        height:135,
        borderRadius:15,
        margin:10
        
      },
      
})