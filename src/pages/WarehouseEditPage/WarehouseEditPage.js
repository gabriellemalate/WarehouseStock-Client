import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getInputError, formIsValid } from '../../utils/validationUtils';
import errorIcon from '../../assets/icons/error-24px.svg'
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import './WarehouseEditPage.scss';

function WarehouseEditPage() {
    let { warehouseId } = useParams();

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


    useEffect(() => {

        async function getWarehouse(id) {
            try {
                let response = await axios.get(`${process.env.REACT_APP_API_URL}/warehouses/${id}`);
    
                return response.data;
    
            } catch (error) {
                console.log('Error creating warehouse', error);

                let data = {
                    id: 1,
                    warehouse_name: "Brooklyn",
                    address: "918 Morris Lane",
                    city: "Brooklyn",
                    country: "USA",
                    contact_name: "Parmin Aujla",
                    contact_position: "Warehouse Manager",
                    contact_phone: "+1 (646) 123-1234",
                    contact_email: "paujla@instock.com"
                }

                setInputs({
                    warehouseName: data.warehouse_name,
                    address: data.address,
                    city: data.city,
                    country: data.country,
                    contactName: data.contact_name,
                    position: data.contact_position,
                    phoneNumber: data.contact_phone,
                    email: data.contact_email,
                });
            }
        }

        getWarehouse(warehouseId);

    }, []);


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

    async function updateWarehouse(id, warehouse) {
        try {
            let response = await axios.post(`${process.env.REACT_APP_API_URL}/warehouses/${id}`, warehouse);

            return response;

        } catch (error) {
            console.log('Error creating warehouse', error);
        }
    }

    async function handleFormSubmition(event) {
        event.preventDefault();

        const warehouse = {
            warehouse_name: warehouseName,
            address: address,
            city: city,
            country: country,
            contact_name: contactName,
            contact_position: position,
            contact_phone: phoneNumber,
            contact_email: email
        }

        if(formIsValid(inputs)) {
            await updateWarehouse(warehouseId, warehouse);
            navigate('/');
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
                    Edit Warehouse
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
                        <p className="form__error">
                            {warehouseNameError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {warehouseNameError}
                        </p>
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
                        <p className="form__error">
                            {addressError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {addressError}
                        </p>
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
                        <p className="form__error">
                            {cityError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {cityError}
                        </p>
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
                        <p className="form__error">
                            {countryError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {countryError}
                        </p>
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
                        <p className="form__error">
                            {contactNameError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {contactNameError}
                        </p>
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
                        <p className="form__error">
                            {positionError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {positionError}
                        </p>
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
                        <p className="form__error">
                            {phoneNumberError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {phoneNumberError}
                        </p>
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
                        <p className="form__error">
                            {emailError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {emailError}
                        </p>
                    </fieldset>
                </div>
                <div className="form__bottom">
                    <button type="button" className="form__button form__button--secondary" onClick={handleCancelClick}>Cancel</button>
                    <button type="submit" className="form__button">Save</button>
                </div>
            </form>

        </main>
    )
}

export default WarehouseEditPage;