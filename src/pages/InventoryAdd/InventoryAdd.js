import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Back from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from '../../assets/icons/error-24px.svg';
import { getInputError, formIsValid } from "../../utils/validationUtils";
import "./InventoryAdd.scss";

function InventoryAdd() {
    const BASE_URL = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();
    const [warehouseList, setWarehouseList] = useState([]);

    async function getWarehouses() {
        try {
            let response = await axios.get(`${BASE_URL}/warehouses`);

            setWarehouseList(response.data);

        } catch (error) {
            console.log('Error fetching warehouses', error);
        }
    }

    useEffect(()=>{
        getWarehouses();
    },[])

    let [ inputs, setInputs ] = useState({
        itemName: '',
        description: '',
        category: '',
        status: 'In Stock',
        quantity: '1',
        warehouse: '',
    })
    let { itemName, description, category, status, quantity, warehouse } = inputs;

    let [errors, setErrors] = useState({
        itemName: null,
        description: null,
        category: null,
        status: null,
        quantity: null,
        warehouse: null,
    });

    let { 
        itemName: itemNameError, 
        description: descriptionError, 
        category: categoryError, 
        status: statusError, 
        quantity: quantityError, 
        warehouse: warehouseError, 
    } = errors;

    function handleInputChange(event){
        const { name, value } = event.target;
        setInputs({...inputs, [name]: value});
        setErrors({...errors, [name]: getInputError(value, name)})
    }

    function handleInputBlur(event) {
        const { name, value } = event.target;
        setErrors({...errors, [name]: getInputError(value, name)})
    }

    async function postInventoryItem(inventoryItem) {
        try {
            let response = await axios.post(`${BASE_URL}/inventory`, inventoryItem);
            return response;

        } catch (error) {
            console.log('Error creating inventory item', error);
        }
    }
    
    async function handleFormSubmition(event) {
        event.preventDefault();

        let item = {
            warehouse_id: warehouse,
            item_name: itemName,
            description: description,
            category: category,
            status: status,
            quantity: status === 'Out of Stock' ? "0" : quantity,
        }

        if (formIsValid(inputs)) {
            await postInventoryItem(item);
            navigate('/inventory');
        }
    }

    function handleCancelClick() {
        navigate('/inventory');
    }

    return (
        <main className="inv-add">
            <div className="inv-add__page-header">
                <Link to='/inventory' className="inv-add__back-link">
                    <img src={Back} alt="back arrow" className="inv-add__back-button" />
                </Link>
                <h1 className="inv-add__title">
                    Add New Inventory Item
                </h1>
            </div>

            <form className="inv-add-form" onSubmit={handleFormSubmition}>
                <div className="inv-add-form__middle">
                    <fieldset className="inv-add-form__fieldset">
                        <h2 className="inv-add-form__legend">
                            Item Details
                        </h2>
                        <label htmlFor="itemName" className="inv-add-form__label">Item Name</label>
                        <input 
                            type="text"
                            name="itemName"
                            id="itemName" 
                            className={`inv-add-form__input ${itemNameError && 'inv-add-form__input--invalid'}`}
                            placeholder="Item Name"
                            value={itemName}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                        />
                        <p className="inv-add-form__error">
                            {itemNameError && <img src={errorIcon} alt="" className="inv-add-form__error-icon" />}
                            {itemNameError}
                        </p>
                        <label htmlFor="description" className="inv-add-form__label">Description</label>
                        <textarea 
                            name="description"
                            id="description" 
                            className={`inv-add-form__input inv-add-form__input--large ${descriptionError && 'inv-add-form__input--invalid'}`} 
                            placeholder="Please enter a brief item description..."
                            value={description}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                        />
                        <p className="inv-add-form__error">
                            {descriptionError && <img src={errorIcon} alt="" className="inv-add-form__error-icon" />}
                            {descriptionError}
                        </p>
                        <label htmlFor="category" className="inv-add-form__label">Category</label>
                        <div className="inv-add-form__select-container">
                            <select
                                name="category"
                                id="category"
                                className={`inv-add-form__input inv-add-form__input--select ${categoryError && 'inv-add-form__input--invalid'}`} 
                                placeholder="Please Select"
                                value={category}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                            >
                                <option value='' disabled hidden>Please Select</option>
                                <option value='Accessories'>Accessories</option>
                                <option value='Apparel'>Apparel</option>
                                <option value='Electronics'>Electronics</option>
                                <option value='Gear'>Gear</option>
                                <option value='Health'>Health</option>
                            </select>
                        </div>
                        <p className="inv-add-form__error">
                            {categoryError && <img src={errorIcon} alt="" className="inv-add-form__error-icon" />}
                            {categoryError}
                        </p>
                    </fieldset>
                    <fieldset className="inv-add-form__fieldset">
                        <h2 className="inv-add-form__legend">
                            Item Availability
                        </h2>
                        <p className="inv-add-form__label">Status</p>
                        <div className="inv-add-form__input inv-add-form__input--radio">
                            <label htmlFor="inStock" className="inv-add-form__option">
                                <input 
                                    type="radio" 
                                    id='inStock' 
                                    name='status' 
                                    className="inv-add-form__radio"
                                    value='In Stock'
                                    checked={status === 'In Stock'}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                />
                                In Stock
                            </label>
                            <label htmlFor="outOfStock" className="inv-add-form__option">
                                <input 
                                    type="radio" 
                                    id='outOfStock' 
                                    name='status' 
                                    className="inv-add-form__radio"
                                    value='Out of Stock'
                                    checked={status === 'Out of Stock'}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                />
                                Out of Stock
                            </label>
                        </div>
                        <p className="inv-add-form__error">
                            {statusError && <img src={errorIcon} alt="" className="inv-add-form__error-icon" />}
                            {statusError}
                        </p>
                        {status === 'In Stock' && (
                        <>
                        <label htmlFor="quantity" className="inv-add-form__label">Quantity</label>
                        <input 
                            type="number"
                            min='1'
                            name="quantity"
                            id="quantity" 
                            className={`inv-add-form__input inv-add-form__input--number ${quantityError && 'inv-add-form__input--invalid'}`}
                            value={quantity}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                        />
                        <p className="inv-add-form__error">
                            {quantityError && <img src={errorIcon} alt="" className="inv-add-form__error-icon" />}
                            {quantityError}
                        </p>
                        </>
                        )}
                        <label htmlFor="warehouse" className="inv-add-form__label">Warehouse</label>
                        <div className="inv-add-form__select-container">
                            <select
                                name="warehouse"
                                id="warehouse"
                                className={`inv-add-form__input inv-add-form__input--select ${warehouseError && 'inv-add-form__input--invalid'}`} 
                                placeholder="Please Select"
                                value={warehouse}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                            >
                                <option value='' disabled hidden>Please Select</option>
                                {warehouseList.map((warehouse)=>{
                                    return <option key={warehouse.id} value={warehouse.id}>{warehouse.warehouse_name}</option>
                                })}
                            </select>
                        </div>
                        <p className="inv-add-form__error">
                            {warehouseError && <img src={errorIcon} alt="" className="inv-add-form__error-icon" />}
                            {warehouseError}
                        </p>
                    </fieldset>
                </div>
                <div className="inv-add-form__bottom">
                    <button type="button" className="inv-add-form__button inv-add-form__button--secondary" onClick={handleCancelClick}>Cancel</button>
                    <button type="submit" className="inv-add-form__button">+ Add Item</button>
                </div>
            </form>
        </main>
    );
}

export default InventoryAdd;