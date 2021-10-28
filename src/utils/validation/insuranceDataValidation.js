
export default validateInsuranceData = (insuranceData) => {
    const errors = {};
    let isValid = false;

    if (insuranceData.isInsured && !insuranceData.insuranceCompany) {
        errors.insuranceCompany = 'Insurance Company is required';
    }

    if (insuranceData.isInsured && !insuranceData.insuranceNumber) {
        errors.insuranceNumber = 'Insurance Number is required';
    } 

    if (insuranceData.isInsured && !insuranceData.insuranceDocument) {
        errors.insuranceDocument = 'Insurance Document is required';
    } else if (insuranceData?.insuranceDocument?.length < 2) {
        errors.insuranceDocument = '2 Snaps are required';
    }

    if (!insuranceData.isInsured && !insuranceData.isAttested) {
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