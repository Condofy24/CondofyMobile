import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    homePage: {
        flex: 1,
        height: "100%"
    },
    selectionContainer: {
        height: "50%",
        textAlign: "center"
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)', // Semi-transparent overlay
    },
    horizontalLine: {
        height:2,
        backgroundColor: "black",
        width: "100%"
    }
});