import React, {useState} from "react";
import { StyleSheet,TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { backgroundHeartColor } from "../constants/colors";

const Like = () =>{
    const [like,setLike] = useState(true);
    const [likeColor,setLikeColor] = useState('#c6eee4')

    const changeColor = () => {
        setLike(!like);
        (like) ? setLikeColor(backgroundHeartColor) :setLikeColor('#c6eee4')
    }
    return(
        <TouchableOpacity style={[styles.heartContainer, {backgroundColor:likeColor}]} onPress={changeColor}>
            <FontAwesome name="heart" size={15} style={{paddingTop:3}} color="white"/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    heartContainer:{
        position:'absolute',
        borderRadius:90,
        paddingVertical:5,
        paddingHorizontal:6,
        right:0,
        bottom:0,
        margin:10,
    }
})

export default Like