import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, TextInput, TouchableOpacity, View, Text, Alert, Button, Pressable,FlatList,Keyboard } from 'react-native';
import axios from "axios"
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const [cityName, setCityName] = useState("mumbai")
    const [searchedData, setSearchedData] = useState(null)
    const [forecast, setForecast] = useState(null)
    const[loading,setLoading]=useState(false)
    const Navigation=useNavigation()


    //realtime weather=====================================
    const fetchData = async () => {
        Keyboard.dismiss()
        setLoading(true)
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: { q: cityName },
            headers: {
                'x-rapidapi-key': '3bd54973a0mshd4f4496d456703cp123660jsnc3f12322b690',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            setSearchedData(response.data);
            setLoading(false)
        } catch (error) {
            Alert.alert("Invalid city")
            setCityName("")
        }finally{
            setLoading(false)
        }
    }

    //future weather ==================================
    const forecastSearch = async () => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: {
                q: cityName,
                days: '3'
            },
            headers: {
                'x-rapidapi-key': '3bd54973a0mshd4f4496d456703cp123660jsnc3f12322b690',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            setForecast(response.data.forecast.forecastday)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData().then(()=>{
            forecastSearch()
        })
    }, [])


    if (!searchedData) {
        return (
            <ImageBackground
                source={require('../assets/night-bg1.jpg')}
                style={styles.homeBody}
            >
            </ImageBackground>
        )
    } else {
        return (
            <ImageBackground
                source={require('../assets/night-bg1.jpg')}
                style={styles.homeBody}>
                <View style={styles.homeView}>
                    <View style={styles.resultBody}>
                        <View style={styles.resultLeft}>
                            <Text style={{ fontSize: 40, fontWeight: "600", color: "white" }}>{searchedData.location.name},</Text><Text style={{ fontSize: 25,color:"#CECDCD" }}>{searchedData.location.region}, {searchedData.location.country}</Text>
                            <Text style={{ fontSize: 80, color: "white",marginTop:25 }}>{searchedData.current.feelslike_c}°C,{'\n'}<Text style={{ fontSize: 35, color: "black", height: "auto", }}>{searchedData.current.condition.text}</Text></Text>
                        </View>
                        <Text style={{position:"absolute",top:20,right:10,color:"white",fontSize:15}}>Time_Zone_: {searchedData.location.tz_id}</Text>
                    </View>
                    <TouchableOpacity style={styles.detailBtn} onPress={()=>{
                        Navigation.navigate("Forecast",{
                            forecast
                        })
                    }}>
                        <Text style={styles.detailBtnText}>{loading?"Searching.....":"Next days"}</Text>
                    </TouchableOpacity>

                    <View style={styles.homeSearchBody}>
                        <TextInput onChangeText={(newText)=>{
                            setCityName(newText);
                        }} 
                        value={cityName}
                        style={styles.homeInput} placeholder='enter city name'></TextInput>
                        <TouchableOpacity onPress={() => {
                            fetchData()
                        }} style={styles.homeBtn}><Text>{loading?"S...":"Click"}</Text></TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    homeBody: {
        height: "100%",
        width: "100%",
    },

    homeView: {
        height: "100%",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        gap: 10
    },
    homeSearchBody: {
        width: "100%",
        height: 50,
        position: "absolute",
        top: 60,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        paddingLeft: 5,
        paddingRight: 5,

    },

    homeInput: {
        width: "80%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: 20,
        opacity: "100%",
        paddingLeft: 10,
        textAlign:"center",
        fontSize:15
    },
    homeBtn: {
        height: 50,
        width: 50,
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%"
    },
    resultBody: {
        width: "95%",
        height: "60%",
        borderRadius: 20,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        justifyContent: "center"
    },
    resultLeft: {
        height: "50%",
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
    },
    buttonList:{
        display:"flex",
        flexDirection:"row"
    },
    detailBtn: {

        height: 50,
        width: 200,
        backgroundColor: "#EBD3F8",
        borderRadius: 20,
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
        
    },
    detailBtnText: {
      
        color: "black",
        fontSize:20
    },
    smallBtn: {
        height: 60,
        width: 60,
        backgroundColor: "blue",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    smallBtnText: {
        color: "white",
        fontSize: 20,

    },

})

export default Home;
