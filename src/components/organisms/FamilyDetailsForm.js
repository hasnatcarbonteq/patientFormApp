import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


import IconButton from '../atoms/IconButton';

import FamilyMemberForm from './FamilyMemberForm';

export default FamilyDetailsForm = (props) => {

    const [familyMemebers, setFamilyMemebers] = useState([]);
    const [addMoreVisible, setAddMoreVisible] = useState(true);

    const addFamilyMember = () => {
        setFamilyMemebers([...familyMemebers, {
            id: uuidv4(),
        }])
        setAddMoreVisible(false);
    };

    const saveFamilyMember = (familyMember, isValid) => {
        // console.log(familyMember, isValid);
        // setFamilyMemebers([...familyMemebers, familyMember]);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add Family Details</Text>
            <View style={styles.formContainer}>
                {
                    familyMemebers && familyMemebers.map((member, index) => {
                        return (
                            <FamilyMemberForm
                                key={member.id}
                                saveFamilyMember={saveFamilyMember}
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
