import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getInputError, formIsValid } from '../../utils/validationUtils';
import errorIcon from '../../assets/icons/error-24px.svg'
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import './InventoryEditPage.scss';

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
                let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventories/${id}`);
                let response2 = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventories/unique`);
                let response3 = await axios.get(`${process.env.REACT_APP_API_URL}/api/warehouses/unique`);

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
            let response = await axios.put(`${process.env.REACT_APP_API_URL}/api/inventories/${id}`, item);

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
            quantity: status === 'Out of Stock' ? "0" : quantity,
            warehouse_id: warehouseList.find(element => element.warehouse_name === warehouse).id,
        }

        console.log("item being sent",item)

        if(formIsValid(inputs)) {
            await updateItem(itemId, item);
            navigate(`/inventory/${itemId}`);
        }
    }

    function handleInputChange(event){
        const { name, value } = event.target;
        setInputs({...inputs, [name]: value});
        setErrors({...errors, [name]: getInputError(value, name)})
    }

    function handleInputBlur(event) {
        const { name, value } = event.target;
        setErrors({...errors, [name]: getInputError(value, name)})
    }


    // console.log("121|\n\n",createDropdownOptions);
    // console.log("122|\n\n", categoryList);
    console.log("123|\n\n", warehouseList);


    
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
                            onBlur={handleInputBlur}
                        />
                        <p className="form__error">
                            {itemNameError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {itemNameError}
                        </p>
                        <label htmlFor="description" className="form__label">Description</label>
                        <textarea 
                            name="description"
                            id="description" 
                            className={`form__input form__input--large ${descriptionError && 'form__input--invalid'}`} 
                            placeholder="Please enter a brief item description..."
                            value={description}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                        />
                        <p className="form__error">
                            {descriptionError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {descriptionError}
                        </p>
                        <label htmlFor="category" className="form__label">Category</label>
                        <div className="form__select-container">
                            <select
                                name="category"
                                id="category"
                                className={`form__input form__input--select ${categoryError && 'form__input--invalid'}`} 
                                placeholder="Please Select"
                                value={category}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                            >
                                {categoryList.map(element => (<option key={uuidv4()} value={`${element.category}`}>{element.category}</option>))}
                            </select>
                        </div>
                        <p className="form__error">
                            {categoryError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {categoryError}
                        </p>
                    </fieldset>
                    <fieldset className="form__fieldset">
                        <h2 className="form__legend">
                            Item Availability
                        </h2>
                        <p className="form__label">Status</p>
                        <div className="form__input form__input--radio">
                            <label htmlFor="inStock" className="form__option">
                                <input 
                                    type="radio" 
                                    id='inStock' 
                                    name='status' 
                                    className="form__radio"
                                    value='In Stock'
                                    checked={status === 'In Stock'}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                />
                                In Stock
                            </label>
                            <label htmlFor="outOfStock" className="form__option">
                                <input 
                                    type="radio" 
                                    id='outOfStock' 
                                    name='status' 
                                    className="form__radio"
                                    value='Out of Stock'
                                    checked={status === 'Out of Stock'}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                />
                                Out of Stock
                            </label>
                        </div>
                        <p className="form__error">
                            {statusError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {statusError}
                        </p>
                        {status === 'In Stock' && (
                        <>
                        <label htmlFor="quantity" className="form__label">Quantity</label>
                        <input 
                            type="number"
                            min='1'
                            name="quantity"
                            id="quantity" 
                            className={`form__input form__input--number ${quantityError && 'form__input--invalid'}`}
                            value={quantity}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                        />
                        <p className="form__error">
                            {quantityError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {quantityError}
                        </p>
                        </>
                        )}
                        <label htmlFor="warehouse" className="form__label">Warehouse</label>
                        <div className="form__select-container">
                            <select
                                name="warehouse"
                                id="warehouse"
                                className={`form__input form__input--select ${warehouseError && 'form__input--invalid'}`} 
                                placeholder="Please Select"
                                value={warehouse}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                            >
                                {warehouseList.map(element => (<option key={element.id} value={element.id}>{element.warehouse_name}</option>))}
                            </select>
                        </div>
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