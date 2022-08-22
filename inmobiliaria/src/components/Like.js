import React from "react";
import { View,StyleSheet,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { backgroundHeartColor } from "../constants/colors";

const Like = () =>{
    return(
        <View style={styles.heartContainer}>
            <FontAwesome name="heart" size={15} style={{paddingTop:3}} color="white"/>
        </View>
    )
}
const styles = StyleSheet.create({
    heartContainer:{
        position:'absolute',
        backgroundColor: backgroundHeartColor,
        borderRadius:90,
        paddingVertical:5,
        paddingHorizontal:6,
        right:0,
        bottom:0,
        margin:10,
    }
})

export default Like