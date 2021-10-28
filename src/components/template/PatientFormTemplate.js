import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import validatePersonalData from '../../utils/validation/personalDataValidation';
import validateInsuranceData from '../../utils/validation/insuranceDataValidation';

import PersonalDataForm from '../organisms/PersonalDataForm';
import InsuranceDataForm from '../organisms/InsuranceDataForm';
import FamilyDetailsForm from '../organisms/FamilyDetailsForm';

export default PatientFormTemplate = (props) => {

    const [personalData, setPersonalData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        zip: null,
        idSnapShots: null,
    });
    const [personalDataError, setPersonalDataError] = useState({})
    const [isPersnalDataValid, setIsPersnalDataValid] = useState(true);

    const [insuranceDataError, setInsuranceDataError] = useState({})
    const [isInsuranceDataValid, setIsInsuranceDataValid] = useState(true);

    const [insuranceData, setInsuranceData] = useState({
        insuranceDocument: null,
        insuranceCompany: '',
        insuranceNumber: '',
        isAttested: false,
        isInsured: false,
    });

    const personalDataVarification = async () => {
        const {errors, isValid} = await validatePersonalData(personalData);
        setPersonalDataError(errors);
        setIsPersnalDataValid(isValid);
    }

    const insuranceDataVerification = async () => {
        const {errors, isValid} = await validateInsuranceData(insuranceData);
        setInsuranceDataError(errors);
        setIsInsuranceDataValid(isValid);
    }

    const submitForm = (props) => {
        console.log(props)
    }

    const buttonTextStyle = {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        backgroundColor: '#00bcd4'
    }


    return (
        <View style={styles.container}>
            <ProgressSteps >
                <ProgressStep 
                    label="Personal Data" 
                    onNext={personalDataVarification} 
                    errors={!isPersnalDataValid} 
                    // nextBtnTextStyle={buttonTextStyle} 
                    // previousBtnTextStyle={buttonTextStyle} 
                >
                    <View style={{ alignItems: 'center' }}>
                        <PersonalDataForm 
                            userData={personalData}
                            setUserData={setPersonalData}
                            personalDataError={personalDataError}
                            {...props} 
                        />
                    </View>
                </ProgressStep>
                <ProgressStep 
                    label="Insurance Data"
                    onNext={insuranceDataVerification}
                    errors={!isInsuranceDataValid}
                >
                    <View style={{ alignItems: 'center' }}>
                        <InsuranceDataForm 
                            insuranceData={insuranceData}
                            setInsuranceData={setInsuranceData}
                            insuranceDataError={insuranceDataError}
                            {...props}
                        />
                    </View>
                </ProgressStep>
                <ProgressStep 
                    label="Family Data"
                    onNext={submitForm}
                >
                    <View style={{ alignItems: 'center' }}>
                        <FamilyDetailsForm 
                            isInsurred={insuranceData.isInsured}
                            {...props}
                        />
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});