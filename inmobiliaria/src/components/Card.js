import React from "react";
import { View,StyleSheet,ImageBackground,Text } from "react-native";
import { backgroundCardColor,starColor,ratingText } from "../constants/colors";
import RatingSection from "./RatingSection";

export default function Card(){
   
    return(
        <View style={styles.card}>
            <RatingSection/>
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