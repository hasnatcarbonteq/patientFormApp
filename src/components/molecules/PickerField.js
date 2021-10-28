import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default PickerField = ({label, value, onChange, options, error}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.container, error && styles.errorStyle]}>
                <Text style={styles.label}>{label}</Text>
                {options?.length ? 
                    <Picker
                        selectedValue={value}
                        style={styles.picker}
                        onValueChange={onChange}
                    >
                        {options && options.map((item, index) => (
                            <Picker.Item label={item} value={item} key={index} style={styles.pickerItem} />
                        ))}
                    </Picker>
                : null}
            </View>
            {error && <Text style={styles.errorTextStyle}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 10,
        
    },
    container: {
        flex: 1,
        borderWidth: 1,
        minHeight: 50,
        alignItems: 'flex-start',
        paddingBottom: 5,
        borderRadius: 5,
    },
    label: {
        fontSize: 18,
        justifyContent: 'flex-start',
        textAlign: 'left',
        paddingLeft: 5,
    },
    picker: {
        width: '100%',
        backgroundColor: '#f5f5f5',
    },
    pickerItem: {
        color: '#000',
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