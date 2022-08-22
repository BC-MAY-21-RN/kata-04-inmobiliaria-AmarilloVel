import React from "react";
import { View,StyleSheet,ImageBackground,Text } from "react-native";
import { backgroundStarColor,starColor,ratingTextColor } from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";


export default function RatingSection(){
    let image = {uri:'https://img10.naventcdn.com/avisos/9/00/54/42/30/71/1200x1200/102280108.jpg' } 
    return (
    <>
        <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{borderRadius:12}}>
                <View style={styles.ratingArea}>
                    <FontAwesome name="star" size={15} style={{paddingTop:3}} color={starColor}/>
                    <Text style={styles.ratingText}>4.7</Text>
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

