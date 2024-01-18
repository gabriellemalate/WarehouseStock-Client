import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { inputIsValid, getInputError, formIsValid } from '../../utils/validationUtils';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import './WarehouseAddPage.scss';

function WarehouseAddPage() {
    let [ inputs, setInputs ] = useState({
        warehouseName: '',
        address: '',
        city: '',
        country: '',
        contactName: '',
        position: '',
        phoneNumber: '',
        email: '',
    });
    let { warehouseName, address, city, country, contactName, position, phoneNumber, email} = inputs;

    let [ errors, setErrors ] = useState({
        warehouseName: null,
        address: null,
        city: null,
        country: null,
        contactName: null,
        position: null,
        phoneNumber: null,
        email: null,
    });
    let { warehouseName: warehouseNameError, 
        address: addressError, 
        city: cityError, 
        country: countryError, 
        contactName: contactNameError, 
        position: positionError, 
        phoneNumber: phoneNumberError, 
        email: emailError
    } = errors;

    let navigate = useNavigate();

    function handleCancelClick() {
        navigate('/');
    }

    function handleFormSubmition(event) {
        event.preventDefault();

        if(formIsValid(inputs)) {
            // axios call here
            console.log(inputs);
            //navigate('/');
        }
    }

    function handleInputChange(event){
        const { name, value } = event.target;
        setInputs({...inputs, [name]: value});
        setErrors({...errors, [name]: getInputError(value, name)})
    }

    return (
        <main className="main">
            <div className="main__page-header">
                <Link to='/' className="main__back-link">
                    <img src={backArrow} alt="back arrow" className="main__back-button" />
                </Link>
                <h1 className="main__title">
                    Add New Warehouse
                </h1>
            </div>

            <form className="form" onSubmit={handleFormSubmition}>
                <div className="form__middle">
                    <fieldset className="form__fieldset">
                        <h2 className="form__legend">
                            Warehouse Details
                        </h2>
                        <label htmlFor="warehouseName" className="form__label">Warehouse Name</label>
                        <input 
                            type="text"
                            name="warehouseName"
                            id="warehouseName" 
                            className={`form__input ${warehouseNameError && 'form__input--invalid'}`}
                            placeholder="Warehouse Name"
                            value={warehouseName}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="address" className="form__label">Street Address</label>
                        <input 
                            type="text"
                            name="address"
                            id="address" 
                            className={`form__input ${addressError && 'form__input--invalid'}`} 
                            placeholder="Street Address"
                            value={address}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="city" className="form__label">City</label>
                        <input 
                            type="text"
                            name="city"
                            id="city" 
                            className={`form__input ${cityError && 'form__input--invalid'}`}
                            placeholder="City"
                            value={city}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="country" className="form__label">Country</label>
                        <input 
                            type="text"
                            name="country"
                            id="country" 
                            className={`form__input ${countryError && 'form__input--invalid'}`} 
                            placeholder="Country"
                            value={country}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                    <fieldset className="form__fieldset">
                        <h2 className="form__legend">
                            Contact Details
                        </h2>
                        <label htmlFor="contactName" className="form__label">Contact Name</label>
                        <input 
                            type="text"
                            name="contactName"
                            id="contactName" 
                            className={`form__input ${contactNameError && 'form__input--invalid'}`}
                            placeholder="Contact Name"
                            value={contactName}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="position" className="form__label">Position</label>
                        <input 
                            type="text"
                            name="position"
                            id="position" 
                            className={`form__input ${positionError && 'form__input--invalid'}`}
                            placeholder="Position"
                            value={position}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="phoneNumber" className="form__label">Phone Number</label>
                        <input 
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber" 
                            className={`form__input ${phoneNumberError && 'form__input--invalid'}`} 
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="email" className="form__label">Email</label>
                        <input 
                            type="text"
                            name="email"
                            id="email" 
                            className={`form__input ${emailError && 'form__input--invalid'}`}
                            placeholder="Email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                </div>
                <div className="form__bottom">
                    <button type="button" className="form__button form__button--secondary" onClick={handleCancelClick}>Cancel</button>
                    <button type="submit" className="form__button">+ Add Warehouse</button>
                </div>
            </form>

        </main>
    )
}

export default WarehouseAddPage;