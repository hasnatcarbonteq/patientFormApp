import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Checkbox } from '@ant-design/react-native';

export default CheckboxField = ({checked, label, onChange, disabled, error}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {label && <Text style={styles.label}>{label}</Text>}
                <Checkbox 
                    style={styles.checkbox} 
                    checked={checked}
                    disabled={disabled}
                    onChange={(event) => onChange(event.target.checked)}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 5,
    },
    label: {
        fontSize: 16,
        color: '#000',    
    },
    error: {
        color: 'red',
        fontSize: 18,
        justifyContent: 'flex-start',
        textAlign: 'left',
    },
})