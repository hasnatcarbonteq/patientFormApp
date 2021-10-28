import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

export default InputField = ({
        label, 
        value, 
        onChangeText, 
        placeholder, 
        secureTextEntry,
        type,
        maxLength,
        error,
    }) => {

    const {
        mainContainer,
        inputStyle, 
        labelStyle, 
        containerStyle, 
        errorStyle, 
        errorTextStyle,
    } = styles;

    const keyboardType = type === 'number' ? 'numeric' : 
                type === 'phone' ? 'phone-pad' : 
                type === 'email' ? 'email-address' : 
                'default';
    
    return (
        <View style={mainContainer}>
            <View style={[containerStyle, error && errorStyle]} >
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    // autoCorrect={false}
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                />
            </View>
            {error && <Text style={errorTextStyle}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 10,
    },
    containerStyle: {
        borderWidth: 1,
        minHeight: 50,
        flex: 1,
        alignItems: 'flex-start',
        paddingBottom: 5,
        borderRadius: 5,
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        width: '100%',
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 5,
        justifyContent: 'flex-start',
        textAlign: 'left',
    },
    errorStyle: {
        borderColor: 'red',
    },
    errorTextStyle: {
        color: 'red',
        fontSize: 18,
        paddingLeft: 5,
        justifyContent: 'flex-start',
        textAlign: 'left',
    },
});