
export default validateFamilyMember = (insuranceData) => {
    const errors = {};
    let isValid = false;

    if (!insuranceData.insuranceStatus){
        errors.insuranceStatus = "Insurance Status is required";
    }

    if (!insuranceData.firstName) {
        errors.firstName = 'First Name is required';
    }

    if (!insuranceData.lastName) {
        errors.lastName = 'Last Name is required';
    }

    if (!insuranceData.dob) {
        errors.dob = 'Date of Birth is required';
    }

    if (insuranceData.insuranceStatus === 'Other' && !insuranceData.insuranceCompany) {
        errors.insuranceCompany = 'Insurance Company is required';
    }

    if (insuranceData.insuranceStatus === 'Other' && !insuranceData.insuranceNumber) {
        errors.insuranceNumber = 'Insurance Number is required';
    } 

    if (insuranceData.insuranceStatus === 'Other' && !insuranceData.insuranceDocument) {
        errors.insuranceDocument = 'Insurance Document is required';
    } else if (insuranceData?.insuranceDocument?.length < 2) {
        errors.insuranceDocument = '2 Snaps are required';
    }

    if (insuranceData.insuranceStatus === 'None' && !insuranceData.isAttested) {
        errors.isAttested = 'Please check the attesation!';
    }

    if (Object.keys(errors).length === 0) {
        isValid = true;
    }

    return {
        errors,
        isValid
    };
}