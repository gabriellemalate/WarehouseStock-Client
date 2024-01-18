
function formIsValid(inputs) {
    for(let key in inputs) {
        if (!inputIsValid(inputs[key], key)) {
            return false;
        }
    }

    return true;
}


function getInputError(input, inputType) {
    switch(inputType) {
        case 'email':
            return emailIsValid(input) ? null : 
                'Email must be in the format yourname@example.com';
        case 'phoneNumber':
            return phoneNumberIsValid(input) ? null :
                'Phone Number must be in the format +1 (234) 567-8910';
        default:
            return defaultInputIsValid(input) ? null :
                'This field is required';
    }
}


function inputIsValid(input, inputType) {
    switch(inputType) {
        case 'email':
            return emailIsValid(input);
        case 'phoneNumber':
            return phoneNumberIsValid(input);
        default:
            return defaultInputIsValid(input);
    }
}

function defaultInputIsValid(input) {
    return !(input === '');
}

function emailIsValid(email) {
    // matches on emails like:
    // something123!>@something123.something
    if(!(/^[^\s@\.]+@[^\s@\.]+\.[\w]+$/.test(email))) {
        return false;
    }

    return true;
}


function phoneNumberIsValid(number) {
    // matches on numbers like:
    // +# (###) ###-####
    if (!(/^\+\d+ \(\d{3}\) \d{3}-\d{4}$/.test(number))) {
        return false;
    }

    return true;
}