import React from "react";
import { View, Text, StyleSheet } from "react-native";


import HomeTemplate from "../../components/template/HomeTemplate";

export default HomeScreen = (props) => {

    return (
        <View style={styles.container}>
            <HomeTemplate {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
    },
    buttonContainer: {
        marginTop: 20,
        width: '50%',
    },
});