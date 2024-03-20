import React from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";
import { styles } from "./HomeStyles";
import { useNavigation } from "@react-navigation/native";

const Home = () => {

    const navigation = useNavigation();

    //hard-coded navigation to be updated
    const goToRegisterPage = () => {
        navigation.navigate('Register' as never);
    }
    const goToSignInPage = () => {
        navigation.navigate('Profile' as never);
    }

    return (
        <View style={styles.homePage}>

            <TouchableOpacity style={styles.selectionContainer} onPress={goToRegisterPage}>
                <ImageBackground 
                source={require("../../assets/Condo.jpeg")}  
                style={styles.imageContainer}
                blurRadius={4} >
                    <View style={styles.overlay}>  
                        <View style={styles.textContainer}>
                            <Text h1 style={styles.textStyle}>Manage Properties</Text>
                        </View>
                    </View>  
                </ImageBackground>
            </TouchableOpacity>

            <View style={styles.horizontalLine}></View>

            <TouchableOpacity style={styles.selectionContainer} onPress={goToSignInPage}>
                <ImageBackground 
                source={require("../../assets/Employees.jpeg")}  
                style={styles.imageContainer}
                blurRadius={2} >
                    <View style={styles.overlay}>  
                        <View style={styles.textContainer}>
                            <Text h1 style={styles.textStyle}>Manage Employees</Text>
                        </View>
                    </View>  
                </ImageBackground>
            </TouchableOpacity>
            
        </View>
        
    )
}

export default Home;