import React from "react";
import { ScrollView } from "react-native";

import PatientFormTemplate from '../../components/template/PatientFormTemplate';

export default SignUpScreen = (props) => {
    return (
        <ScrollView >
            <PatientFormTemplate {...props} />
        </ScrollView>
    );
}
