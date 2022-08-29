import React from "react";
import { View,StyleSheet,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Specification = ({number,icon}) => {
    return(
        <View style={styles.individualSpec}>
            <FontAwesome name={icon} size={15} style={{paddingTop:3}} color="grey"/>
            
            <Text style={styles.specNumber}> {number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    individualSpec:{
        flexDirection:'row',
        paddingLeft:20, 
        paddingTop:5,
    },
    specNumber:{
        fontSize:14,
        color:'black',
        fontWeight:'700',
        paddingLeft:4,
    }
})

export default Specification