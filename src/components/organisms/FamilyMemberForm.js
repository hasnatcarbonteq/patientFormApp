import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Checkbox } from '@ant-design/react-native';

import InputField from '../atoms/InputField';
import DatePickerInput from '../molecules/DatePicker';
import Upload from '../molecules/Upload';
import RadioGroup from '../molecules/RadioGroup';
import IconButton from '../atoms/IconButton';
import PickerField from '../molecules/PickerField';

import InsuranceCompanies from '../../utils/constant/InsuranceCompanies';
import validateFamilyMember from '../../utils/validation/familyMemberValidation';

const status = [
    {
        text: 'Same',
    },
    {
        text: 'Other'
    },
    {
        text: 'None'
    }
]

export default FamilyMemberForm = ({ saveFamilyMember, insuranceStatusPatient}) => {

    const [member, setMember] = useState({
        id: uuidv4(),
        firstName: '',
        lastName: '',
        dob: '',
        insuranceStatus: '',
        insuranceDocument: null,
        insuranceCompany: '',
        insuranceNumber: '',
        isAttested: false,
    });

    const [error, setError] = useState({});

    const handleSubmit = () => {
        const {errors, isValid} = validateFamilyMember(member)
        console.log(errors, isValid)
        if ( isValid ) {
            setError({})
            saveFamilyMember(member, isValid);
        } else {
            setError(errors)
        }
    }

    useEffect(()=> {
        if (insuranceStatusPatient === 'Same') {
            setMember({
                ...member,
                insuranceStatus: 'Same',
                insuranceCompany: '',
                insuranceNumber: '',
                insuranceDocument: null,
            })
        }
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Family Member Details</Text>
            <View style={styles.form}>
                <InputField 
                    label="First Name" 
                    placeholder="James"
                    value={member?.firstName}
                    onChangeText={(value) => setMember({...member, firstName: value})}
                    error={error?.firstName}
                />
                <InputField
                    label="Last Name" 
                    placeholder="Bond"
                    value={member?.lastName}
                    onChangeText={(text) => setMember({...member, lastName: text})}
                    error={error?.lastName}
                />
                <DatePickerInput 
                    label="Date of Birth" 
                    labelText="Date of Birth"
                    format="YYYY-MM-DD"
                    date={member?.dob}
                    onDateChange={(date) => setMember({...member, dob: date})}
                    error={error?.dob}
                />
                <RadioGroup 
                    label="Insurance Status"
                    values={status}
                    onPress={(itemIdx) => setMember({...member, insuranceStatus: status[itemIdx]?.text})}
                    error={error?.insuranceStatus}
                />
                {
                    member.insuranceStatus === 'Other' ? 
                    <View>
                        <Upload 
                            label="Upload Photo" 
                            name="idSnapShots"
                            maxItems={2}
                            onChange={(value) => setMember({...member, insuranceDocument: value})}
                            error={error?.insuranceDocument}
                        />
                        <PickerField 
                            label="Insurance Company"
                            value={member.insuranceCompany}
                            onChange={(value) => setMember({...member, insuranceCompany: value})}
                            options={InsuranceCompanies}
                            error={error?.insuranceCompany}
                        />
                        <InputField 
                            placeholder="123123123123"
                            label="Insurance Number"
                            type="phone"
                            value={member.insuranceNumber}
                            error={error.insuranceNumber}
                            onChangeText={(value) => setMember({...member, insuranceNumber: value})}
                        />
                    </View> : member.insuranceStatus === 'None' ? <View>
                        <Checkbox>Is your Insurance Attesated?</Checkbox>
                    </View> : null
                }
                <IconButton 
                    icon="save"
                    text="Save Member"
                    onPress={handleSubmit}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
    }
});