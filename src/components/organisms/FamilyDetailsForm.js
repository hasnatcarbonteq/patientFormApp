import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


import IconButton from '../../shared/atoms/IconButton';

import FamilyMemberForm from './FamilyMemberForm';

export default FamilyDetailsForm = ({isInsured}) => {

    const [familyMemebers, setFamilyMemebers] = useState([]);
    const [addMoreVisible, setAddMoreVisible] = useState(true);

    const addFamilyMember = () => {
        setFamilyMemebers([...familyMemebers, {
            id: uuidv4(),
            firstName: '',
            lastName: '',
            dob: '',
            insuranceStatus: '',
            insuranceDocument: null,
            insuranceCompany: '',
            insuranceNumber: '',
            isAttested: false,
        }])
        setAddMoreVisible(false);
    };

    const saveFamilyMember = (familyMember, isValid) => {
        let copy = [...familyMemebers];
        let item = copy.map(item => {
            if(item.id === familyMember.id){
                item = familyMember;
                item.firstName = familyMember.firstName;
                item.lastName = familyMember.lastName;
                item.dob = familyMember.dob;
                item.insuranceStatus = familyMember.insuranceStatus;
                item.insuranceDocument = familyMember.insuranceDocument;
                item.insuranceCompany = familyMember.insuranceCompany;
                item.insuranceNumber = familyMember.insuranceNumber;
                item.isAttested = familyMember.isAttested;
            }
            return item;
        })
        setAddMoreVisible(isValid);
        setFamilyMemebers(item);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add Family Details</Text>
            <View style={styles.formContainer}>
                {
                    familyMemebers && familyMemebers.map((member, index) => {
                        return (
                            <FamilyMemberForm
                                key={index}
                                data={member}
                                saveFamilyMember={saveFamilyMember}
                                isInsured={isInsured}
                            />
                        )
                    })
                }
                { addMoreVisible &&  
                    <IconButton 
                        icon="plus"
                        text="Add Member"
                        variant="outlined"
                        onPress={addFamilyMember}
                    />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        width: '100%',
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
