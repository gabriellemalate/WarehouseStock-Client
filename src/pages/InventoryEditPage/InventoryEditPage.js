import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getInputError, formIsValid } from '../../utils/validationUtils';
import errorIcon from '../../assets/icons/error-24px.svg'
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import './InventoryEditPage.scss';

const BASE_URL = process.env.REACT_APP_API_URL;

function InventoryEditPage() {
    let { itemId } = useParams();

    let [ inputs, setInputs ] = useState({
        itemName: '',
        description: '',
        category: '',
        // country: '',
        status: '',
        quantity: '',
        warehouse: '',
        // email: '',
    });
    let { itemName, description, category, country, status, quantity, warehouse, email} = inputs;


    useEffect(() => {

        async function getItem(id) {
            try {
                let response = await axios.get(`${process.env.REACT_APP_API_URL}/inventory/${id}`);

                setInputs({
                    itemName: response.data.item_name,
                    description: response.data.description,
                    category: response.data.category,
                    country: response.data.country,
                    status: response.data.contact_name,
                    quantity: response.data.contact_quantity,
                    warehouse: response.data.contact_phone,
                    email: response.data.contact_email,
                });

                return response.data;
    
            } catch (error) {
                console.log('Error getting item details', error);
            }
        }

        getItem(itemId);

    }, []);


    let [ errors, setErrors ] = useState({
        itemName: null,
        description: null,
        category: null,
        country: null,
        status: null,
        quantity: null,
        warehouse: null,
        email: null,
    });
    let { itemName: itemNameError, 
        description: descriptionError, 
        category: categoryError, 
        country: countryError, 
        status: statusError, 
        quantity: quantityError, 
        warehouse: warehouseError, 
        email: emailError
    } = errors;

    let navigate = useNavigate();

    function handleCancelClick() {
        navigate(-1);
    }

    async function updateItem(id, item) {
        try {
            let response = await axios.put(`${process.env.REACT_APP_API_URL}/inventory/${id}`, item);

            return response;

        } catch (error) {
            console.log('Error updating item item', error);
        }
    }

    async function handleFormSubmition(event) {
        event.preventDefault();

        const item = {
            item_name: itemName,
            description: description,
            category: category,
            country: country,
            contact_name: status,
            contact_quantity: quantity,
            contact_phone: warehouse,
            contact_email: email
        }

        if(formIsValid(inputs)) {
            await updateItem(itemId, item);
            navigate(`/item/${itemId}`);
        }
    }

    function handleInputChange(event){
        const { name, value } = event.target;
        setInputs({...inputs, [name]: value});
        setErrors({...errors, [name]: getInputError(value, name)})
    }




    
    return (
        <main className='inventory-edit'>
            
            <div className="inventory-edit__page-header">
                <img src={backArrow} alt="back arrow" className="inventory-edit__back-button" onClick={handleCancelClick}/>
                <h1 className="inventory-edit__title">
                    Edit Inventory Item
                </h1>
            </div>

            <form className="form" onSubmit={handleFormSubmition}>
                <div className="form__middle">
                    <fieldset className="form__fieldset">
                        <h2 className="form__legend">
                            Item Details
                        </h2>
                        <label htmlFor="itemName" className="form__label">Item Name</label>
                        <input 
                            type="text"
                            name="itemName"
                            id="itemName" 
                            className={`form__input ${itemNameError && 'form__input--invalid'}`}
                            placeholder="Item Name"
                            value={itemName}
                            onChange={handleInputChange}
                        />
                        <p className="form__error">
                            {itemNameError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {itemNameError}
                        </p>
                        <label htmlFor="description" className="form__label">Description</label>
                        <input 
                            type="text"
                            name="description"
                            id="description" 
                            className={`form__input ${descriptionError && 'form__input--invalid'}`} 
                            placeholder="Description"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <p className="form__error">
                            {descriptionError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {descriptionError}
                        </p>
                        <label htmlFor="category" className="form__label">Category</label>
                        <input 
                            type="text"
                            name="category"
                            id="category" 
                            className={`form__input ${categoryError && 'form__input--invalid'}`}
                            placeholder="Category"
                            value={category}
                            onChange={handleInputChange}
                        />
                        <p className="form__error">
                            {categoryError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {categoryError}
                        </p>
                    </fieldset>
                    <fieldset className="form__fieldset">
                        <h2 className="form__legend">
                            Item Availability
                        </h2>
                        <label htmlFor="status" className="form__label">Status</label>
                        <input 
                            type="text"
                            name="status"
                            id="status" 
                            className={`form__input ${statusError && 'form__input--invalid'}`}
                            placeholder="Status"
                            value={status}
                            onChange={handleInputChange}
                        />
                        <p className="form__error">
                            {statusError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {statusError}
                        </p>
                        <label htmlFor="quantity" className="form__label">Quantity</label>
                        <input 
                            type="text"
                            name="quantity"
                            id="quantity" 
                            className={`form__input ${quantityError && 'form__input--invalid'}`}
                            placeholder="Quantity"
                            value={quantity}
                            onChange={handleInputChange}
                        />
                        <p className="form__error">
                            {quantityError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {quantityError}
                        </p>
                        <label htmlFor="warehouse" className="form__label">Warehouse</label>
                        <input 
                            type="text"
                            name="warehouse"
                            id="warehouse" 
                            className={`form__input ${warehouseError && 'form__input--invalid'}`} 
                            placeholder="Warehouse"
                            value={warehouse}
                            onChange={handleInputChange}
                        />
                        <p className="form__error">
                            {warehouseError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {warehouseError}
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



export default InventoryEditPage;