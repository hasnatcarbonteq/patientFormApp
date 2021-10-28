import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import RadioButton from '../atoms/RadioButton';

export default RadioGroup = ({values, onPress, label, error}) => {
    const [currentSelectedItem, setCurrentSelectedItem] = useState(null);

    const { container, labelStyle, errorStyle, errorTextStyle } = styles;

    const onPressButton = (idx) => {
        onPress(idx);
        setCurrentSelectedItem(idx);
    }

    const renderRadioButtons = () => {
        return (values || []).map((listItem, index) => {
            let isChecked = currentSelectedItem === index;
            return (
                <RadioButton 
                    key={index}
                    isChecked={isChecked}
                    label={listItem.text}
                    onPress={() => onPressButton(index)}
                />
            )
        })
    }

    useEffect(()=> {
        
    }, [])

    return (
        <View style={[container, error && errorStyle]}>
            <Text style={labelStyle} >{label}</Text>
            {renderRadioButtons()}
            {error && <Text style={errorTextStyle} >{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        marginBottom: 10,
        paddingBottom: 5,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 5,
        flex: 1,
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