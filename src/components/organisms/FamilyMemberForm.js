import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import InputField from '../../shared/atoms/InputField';
import IconButton from '../../shared/atoms/IconButton';
import DatePickerInput from '../../shared/molecules/DatePicker';

import Upload from '../../shared/molecules/Upload';
import RadioGroup from '../../shared/molecules/RadioGroup';
import PickerField from '../../shared/molecules/PickerField';
import CheckboxField from '../../shared/molecules/CheckboxField';

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

export default FamilyMemberForm = ({ saveFamilyMember, isInsured, data}) => {

    const [member, setMember] = useState({
        id: data.id,
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
        if ( isValid ) {
            setError({})
            saveFamilyMember(member, isValid);
        } else {
            setError(errors)
        }
    }

    useEffect(()=> {
        if (isInsured) {
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
                        <CheckboxField
                            checked={member.isAttested}
                            onChange={(value) => setMember({...member, isAttested: value})}
                            label="I attest that I am not related to the patient"
                            error={error?.isAttested}
                        />
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