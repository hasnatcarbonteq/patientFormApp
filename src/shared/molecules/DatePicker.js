import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import DatePicker from 'react-native-datepicker'

const width = Dimensions.get('window').width;

export default DatePickerInput = ({
        date,
        mode,
        format,
        onDateChange,
        labelText,
        error,
    }) => {

    const { container, input, label } = styles;

    return (
        <View style={container}>
            <Text style={label}>{labelText}</Text>
            <DatePicker
                style={input}
                date={date}
                mode={mode}
                format={format}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                maxDate={new Date()}
                onDateChange={onDateChange}
            />
            {error && <Text style={styles.errorTextStyle}>{error}</Text>}
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        minHeight: 50,
        flex: 1,
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    label:{
        fontSize: 18,
        paddingLeft: 5,
        flex: 1,
        justifyContent: 'flex-start',
        textAlign: 'left',
    },
    input: {
        width: '100%',
        borderWidth: 0,
        marginBottom: 10,
        marginTop: 10,
    },
    errorTextStyle: {
        color: 'red',
        fontSize: 18,
        paddingLeft: 5,
        justifyContent: 'flex-start',
        textAlign: 'left',
    },
});