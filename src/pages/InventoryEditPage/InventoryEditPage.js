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
        status: '',
        quantity: '',
        warehouse: '',
    });
    let { itemName, description, category, status, quantity, warehouse} = inputs;

    let [ categoryList, setCategoryList ] = useState([]);
    let [ warehouseList, setWarehouseList ] = useState([]);

    useEffect(() => {

        async function getItem(id) {
            try {
                let response = await axios.get(`${process.env.REACT_APP_API_URL}/inventory/${id}`);
                let response2 = await axios.get(`${process.env.REACT_APP_API_URL}/inventory/unique`);
                let response3 = await axios.get(`${process.env.REACT_APP_API_URL}/warehouses/unique`);

                setInputs({
                    itemName: response.data.item_name,
                    description: response.data.description,
                    category: response.data.category,
                    status: response.data.status,
                    quantity: response.data.quantity,
                    warehouse: response.data.warehouse_name,
                });

                setCategoryList(response2.data);
                setWarehouseList(response3.data);

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
        status: null,
        quantity: null,
        warehouse: null,
    });
    let { itemName: itemNameError, 
        description: descriptionError, 
        category: categoryError, 
        status: statusError, 
        quantity: quantityError, 
        warehouse: warehouseError, 
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
            status: status,
            quantity: quantity,
            warehouse_name: warehouse,
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

    function createDropdownOptions (options) {
        return options.map(option => <option value={option}>{option}</option>)
    }

    // console.log("121|\n\n",createDropdownOptions);
    // console.log("122|\n\n", categoryList);
    // console.log("123|\n\n", warehouseList);


    
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
                        <label htmlFor="pet-select" className="form__label">TESTING:</label>
                        <select name="pets" id="pet-select" className={`form__input ${warehouseError && 'form__input--invalid'}`}>
                            {categoryList.map(element => (<option value={`${element.category}`}>{element.category}</option>))}
                        </select>
                        <label htmlFor="pet-select" className="form__label">TESTING:</label>
                        <select name="pets" id="pet-select" className={`form__input ${warehouseError && 'form__input--invalid'}`}>
                            {warehouseList.map(element => (<option value={`${element.warehouse_name}`}>{element.warehouse_name}</option>))}
                        </select>
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