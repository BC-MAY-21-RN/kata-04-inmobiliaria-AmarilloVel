import React from "react";
import { View, StyleSheet,Text,ImageBackground} from "react-native";
import Card from "../components/Card";

export default function Home(){

    return(

    <View style={styles.container}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </View>
    
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
      },
      

})

