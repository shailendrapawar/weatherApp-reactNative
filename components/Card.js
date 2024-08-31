import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Card = ({ data }) => {
    return (
        <View style={styles.detailCard}>

            <Text style={styles.cardTitle}>{data.day.condition.text}</Text>
            <View style={styles.cardDesc}>
                <View style={styles.rain_body}>
                    <Image
                        source={require("../assets/snow-icon1.png")}
                        style={{ height: "70%", width: "40%", backgroundColor: "transparent" }}
                    />
                    <Text style={{ color: "white", fontSize: 20 }}>{data.day.daily_chance_of_snow} %</Text>
                </View>
                <Text style={{ fontSize: 40, marginBottom: 10 }}>{data.day.avgtemp_c} °C</Text>
                <View style={styles.rain_body}>
                    <Image
                        source={require("../assets/rain-icon1.png")}
                        style={{ height: "70%", width: "40%", backgroundColor: "transparent" }}
                    />
                    <Text style={{ color: "white", fontSize: 20 }}>{data.day.daily_chance_of_rain} %</Text>
                </View>
            </View>
            <Text style={{textAlign:"center",fontSize:15,color:"#2E073F"}}>{data.date}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    detailCard: {
        width: "95%",
        height: 150,
        backgroundColor: "#EBD3F8",
        borderRadius: 10,
        gap: 10,
        overflow: "hidden",
        
        display:"flex",
        alignItems:"center"
    },
    cardTitle: {
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize:20
    },
    cardDesc: {
        height: "50%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    rain_body: {
        height: 60,
        width: 100,
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#7A1CAC",
        borderRadius: 10,
    }
})

export default Card;
