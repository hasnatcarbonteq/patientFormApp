import React from  'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

export default SwitchInput = ({value, onValueChange, text, error}) => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                <Switch
                    value={value}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={value ? "#81a5ff" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => onValueChange(!value)}
                />
            </View>
            {error && <Text style={styles.errorTextStyle}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
    errorTextStyle: {
        color: 'red',
        fontSize: 18,
        justifyContent: 'flex-start',
        textAlign: 'left',
    },
});