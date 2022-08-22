import React from "react";
import { View, StyleSheet,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Specification from "./Specification";


const DescriptionSection = () => {
    return(
        <View style={styles.descriptionContainer}>
            {/*Title */}
            <Text style={styles.title}>The Willows</Text>
            {/*Ubication*/}
            <View style={styles.rowContainer}>
                <FontAwesome name="map-marker" size={15} style={{paddingTop:3}} color="black"/>
                <Text style={styles.ubicationText}> 3517 W. Gray St. Utica</Text>
            </View>
            {/*Specifications*/}
            <View style={styles.SpecContainer}>
                <Specification/>
                <Specification/>
                <Specification/>
            </View>
            {/* Price */}
            <Text style={styles.priceText}>$400/m</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    descriptionContainer:{
        flexDirection:'column',
        flex:1,
    },
    title:{
        fontSize:20,
        fontWeight:'500',
        paddingTop:15,
        paddingLeft:20,
    },
    rowContainer:{
        flexDirection:'row',
        paddingLeft:20,
        paddingTop:2,
    },
    ubicationText:{
        color:'grey',
        fontWeight:'500',
        paddingLeft:5,
        paddingTop:2,
    },
    SpecContainer:{
        flexDirection:'row',
    },
    priceText:{
        fontSize:20,
        fontWeight:'700',
        paddingLeft:20,
        paddingTop:5,
    }



})
export default DescriptionSection


