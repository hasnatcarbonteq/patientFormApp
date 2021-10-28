import React from "react";
import { View, Text, StyleSheet } from "react-native";

import IconButton from "../../components/atoms/IconButton";

export default HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <IconButton 
                    variant="primary" 
                    icon="plus"
                    onPress={() => navigation.navigate('Sign Up')} 
                    text="Add Patient"
                />
            </View>
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