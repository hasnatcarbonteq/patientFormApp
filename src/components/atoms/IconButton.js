import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Icon } from '@ant-design/react-native';

export default IconButton = ({text, icon, onPress, variant}) => {

    const variantStyle = variant === 'primary' ? styles.primary : 
                variant === 'secondary' ? styles.secondary : 
                variant === 'outlined' ? styles.outlined : '';
    return (
        <TouchableHighlight style={[styles.container]} onPress={onPress} >
            <View style={[styles.button, variantStyle]}>
                {icon && <Icon name={icon} size={30} color={variant === 'outlined' ? "#000" : '#fff'} style={styles.icon} />}
                <Text style={[styles.text, (variant === 'outlined') && styles.textVarient]}>{text}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        width: '100%',
    },
    primary: {
        backgroundColor: '#00bcd4',
    },
    secondary: {
        backgroundColor: 'pink',
    },
    outlined: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        color: '#00bcd4',
        borderStyle: 'dashed',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
    },
    textVarient: {
        color: '#000',
    },
    icon: {
        fontSize: 30,
    }
});