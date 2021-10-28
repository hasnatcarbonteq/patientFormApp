import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import InputField from '../../shared/atoms/InputField';

import SwitchInput from '../../shared/molecules/SwitchInput';
import Upload from '../../shared/molecules/Upload';
import PickerField from '../../shared/molecules/PickerField';
import CheckboxField from '../../shared/molecules/CheckboxField';

import InsuranceCompanies from '../../utils/constant/InsuranceCompanies';

export default InsuranceDataForm = ({insuranceData, setInsuranceData, insuranceDataError}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add Insurance Data</Text>
            <View style={styles.formContainer}>
                <SwitchInput 
                    text="Are you Insured?"
                    value={insuranceData.isInsured}
                    onValueChange={(value) => setInsuranceData({...insuranceData, isInsured: value})}
                />
                {
                    insuranceData.isInsured ? (
                        <View >
                            <Upload 
                                label="Upload Insurance"
                                maxItems={2}
                                name="incurance_docs"
                                value={insuranceData.insuranceDocument}
                                onChange={(value) => setInsuranceData({...insuranceData, insuranceDocument: value})}
                                error={insuranceDataError.insuranceDocument}
                            />
                            <PickerField 
                                label="Insurance Company"
                                value={insuranceData.insuranceCompany}
                                onChange={(value) => setInsuranceData({...insuranceData, insuranceCompany: value})}
                                options={InsuranceCompanies}
                                error={insuranceDataError.insuranceCompany}
                            />
                            <InputField 
                                placeholder="123123123123"
                                label="Insurance Number"
                                type="phone"
                                value={insuranceData.insuranceNumber}
                                error={insuranceDataError.insuranceNumber}
                                onChangeText={(value) => setInsuranceData({...insuranceData, insuranceNumber: value})}
                            />
                        </View>
                    ) : <View style={styles.subContainer}>
                            <CheckboxField
                                label="Is your Insurance Attesated?"
                                checked={insuranceData.isAttested}
                                onChange={(value) => setInsuranceData({...insuranceData, isAttested: value})}
                                error={insuranceDataError.isAttested}
                            />
                        </View>
                }
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        width: '100%',
    },
    subContainer: {
        marginRight: 10,
    },
    text: {
        fontSize: 30,
        marginBottom: '10%',
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },
})
