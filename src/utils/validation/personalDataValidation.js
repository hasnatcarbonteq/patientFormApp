
export default validatePersonalData = (personalData) => {
    const errors = {};
    let isValid = false;
    
    if (!personalData.firstName) {
        errors.firstName = 'First name is required';
    }
    
    if (!personalData.lastName) {
        errors.lastName = 'Last name is required';
    }
    
    if (!personalData.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(personalData.email)) {
        errors.email = 'Invalid email address';
    }
    
    if (!personalData.phone) {
        errors.phone = 'Phone is required';
    } else if (!/^[0-9]{11}$/.test(personalData.phone)) {
        errors.phone = 'Invalid phone number';
    }

    if (!personalData.dob) {    
        errors.dob = 'Date of birth is required';
    } else if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(personalData.dob)) {
        errors.dob = 'Invalid date of birth';
    }

    if (!personalData.gender) {
        errors.gender = 'Gender is required';
    }

    if (!personalData.address) {
        errors.address = 'Address is required';
    }

    if (!personalData.city) {
        errors.city = 'City is required';
    }

    if (!personalData.state) {
        errors.state = 'State is required';
    }
    
    if (!personalData.zip) {
        errors.zip = 'Zip code is required';
    } else if (!/^[0-9]{5}$/.test(personalData.zip)) {
        errors.zip = 'Invalid zip code';
    }

    if (!personalData.idSnapShots) {
        errors.idSnapShots = 'ID Snapshots is required';
    } else if (personalData.idSnapShots.length < 2 ) {
        errors.idSnapShots = '2 snapshots required';
    }

    if (Object.keys(errors).length === 0) {
        isValid = true;
    }

    return {
        errors,
        isValid
    };
}