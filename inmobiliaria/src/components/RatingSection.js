import React from "react";
import { View,StyleSheet,ImageBackground,Text } from "react-native";
import { backgroundStarColor,starColor,ratingTextColor } from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";


export default function RatingSection({img,rating}){

    return (
    <>
        <ImageBackground source={{uri: img}} resizeMode="cover" style={styles.image} imageStyle={{borderRadius:12}}>
                <View style={styles.ratingArea}>
                    <FontAwesome name="star" size={15} style={{paddingTop:3}} color={starColor}/>
                    <Text style={styles.ratingText}>{rating}</Text>
                </View>
        </ImageBackground>
    </>
    )
}
const styles = StyleSheet.create({

      image:{
        height:"85%",
        width:100,
        marginTop:20,
        marginLeft:15
      },
      ratingArea:{
        backgroundColor: backgroundStarColor,
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal:22,
        borderRadius:40,
        paddingHorizontal:3,
        paddingVertical:2,
        marginTop:80,
      },
      ratingText:{
        marginLeft:4,
        fontSize:15,
        color:ratingTextColor,
        fontWeight:'600',
      },
})

