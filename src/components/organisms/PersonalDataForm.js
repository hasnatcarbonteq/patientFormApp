import React, { useState } from "react";
import { 
    View,
    ScrollView, 
    Text, 
    StyleSheet,
} from "react-native";

import InputField from '../../shared/atoms/InputField';
import TextArea from '../../shared/atoms/TextArea';

import DatePickerInput from '../../shared/molecules/DatePicker';
import RadioGroup from '../../shared/molecules/RadioGroup';

import Upload from '../../shared/molecules/Upload';

export default PersonalDataForm = ({userData, setUserData, personalDataError}) => {

    const gender = [
        {
            text: 'Male',
        },
        {
            text: 'Female'
        },
        {
            text: 'Other'
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add Patient Data</Text>
            <View style={styles.formContainer}>
                <InputField 
                    label="First Name"
                    placeholder="Adam"
                    value={userData.firstName}
                    error={personalDataError.firstName}
                    onChangeText={(value) => setUserData({...userData, firstName: value})}
                    secureTextEntry={false}
                />
                <InputField 
                    label="Last Name"
                    placeholder="James"
                    value={userData.lastName}
                    error={personalDataError.lastName}
                    onChangeText={(value) => setUserData({...userData, lastName: value})}
                    secureTextEntry={false}
                />
                <InputField 
                    placeholder="Email"
                    label="Email"
                    type="email"
                    value={userData.email}
                    error={personalDataError.email}
                    onChangeText={(value) => setUserData({...userData, email: value})}
                />
                <InputField 
                    placeholder="+923000000023"
                    label="Phone#"
                    type="phone"
                    value={userData.phone}
                    error={personalDataError.phone}
                    onChangeText={(value) => setUserData({...userData, phone: value})}
                />
                <DatePickerInput 
                    mode="date"
                    date={userData.dob}
                    labelText="Date of Birth"
                    format="YYYY-MM-DD"
                    error={personalDataError.dob}
                    onDateChange={(value) => setUserData({...userData, dob: value})}
                />
                {/* gender radio group */}
                <RadioGroup 
                    values={gender} 
                    onPress={(itemIdx) => setUserData({...userData, gender: gender[itemIdx]?.text})} 
                    label="Gender"
                    error={personalDataError.gender}
                />
                <TextArea 
                    maxLines={4} 
                    label="Enter your address" 
                    placeholder="Home" 
                    onChangeText={(value) => setUserData({...userData, address: value})}
                    value={userData.address}
                    error={personalDataError.address}
                />
                <InputField
                    label="City" 
                    placeholder="Lahore"
                    value={userData.city}
                    error={personalDataError.city}
                    onChangeText={(value) => setUserData({...userData, city: value})}
                />
                <InputField 
                    placeholder="Punjab"
                    label="State"
                    value={userData.state}
                    error={personalDataError.state}
                    onChangeText={(value) => setUserData({...userData, state: value})}
                />
                <InputField 
                    placeholder="12345"
                    label="ZIP"
                    type="number"
                    maxLength={5}
                    value={userData.zip}
                    error={personalDataError.zip}
                    onChangeText={(value) => setUserData({...userData, zip: value})}
                />

                <Upload 
                    onChange={(value) => setUserData({...userData, idSnapShots: value})}
                    maxItems={2}
                    label="Upload ID Snapshots"
                    error={personalDataError.idSnapShots}
                    name="idSnapShots"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    text: {
        fontSize: 30,
        marginBottom: '10%',
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});
