import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Card from '../components/Card';

const Detail = ({ route }) => {
    const { forecast } = route.params;
    return (
        <View style={styles.detailBody}>
            <Card data={forecast[0]}></Card> 
            <Card data={forecast[1]}></Card> 
            <Card data={forecast[2]}></Card> 
        </View>
    );
}

const styles = StyleSheet.create({
    detailBody: {
        backgroundColor: "black",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap:20
    },
   
})

export default Detail;
