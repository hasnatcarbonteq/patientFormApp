import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

export default TextArea = ({
        label, 
        value, 
        onChangeText, 
        placeholder, 
        maxLines,
        error,
    }) => {
    const {mainContainer,inputStyle, labelStyle, containerStyle, errorStyle, errorTextStyle} = styles;
    
    return (
        <View style={mainContainer}>
            <View style={[containerStyle, error && errorStyle]}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                    placeholder={placeholder}
                    autoCorrect={false}
                    style={inputStyle}
                    value={value}
                    multiline={true}
                    numberOfLines={maxLines}
                    onChangeText={onChangeText}
                />
            </View>
            { error && <Text style={errorTextStyle} >{error}</Text> }
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        marginBottom: 10,
    },
    containerStyle: {
        borderWidth: 1,
        flex: 1,
        alignItems: 'flex-start',
        paddingBottom: 5,
        minHeight: 100,
        borderRadius: 5,
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
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