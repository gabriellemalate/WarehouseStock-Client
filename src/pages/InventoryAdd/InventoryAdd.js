import React, { useState } from "react";
import "./InventoryAdd.scss";
import Back from "../../assets/icons/arrow_back-24px.svg";
import Down from "../../assets/icons/arrow_drop_down-24px.svg";
import { Link } from "react-router-dom";

function InventoryAdd() {
    const [itemName, setItemName] = useState("");
    const [warehouse, setWarehouse] = useState("");
    const [inputErrors, setInputErrors] = useState({
        item: "",
        warehouse: "",
    });

    const handleSubmit = () => {

        if (itemName.trim() === "") {
            setInputErrors((prev) => ({ ...prev, item: "This field is required" }));
            return;
        } else {
            setInputErrors((prev) => ({ ...prev, item: "This field is required" }));
        }

        if (warehouse === "") {
            setInputErrors((prev) => ({ ...prev, warehouse: true }));
            return;
        }
    };

    return (
        <main className="main">
            <div className="main__page-header">
                <Link to='/inventory' className="main__back-link">
                    <img src={Back} alt="back arrow" className="main__back-button" />
                </Link>
                <h1 className="main__title">
                    Add New Inventory Item
                </h1>
            </div>

            <form className="inv-add-form" >
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
                            className='inv-add-form__input'
                            // className={`inv-add-form__input ${itemNameError && 'inv-add-form__input--invalid'}`}
                            placeholder="Item Name"
                            // value={itemeName}
                            // onChange={handleInputChange}
                        />
                        <p className="inv-add-form__error">
                            {/* {itemNameError && <img src={errorIcon} alt="" className="inv-add-form__error-icon" />}
                            {itemNameError} */}
                        </p>
                        <label htmlFor="description" className="inv-add-form__label">Description</label>
                        <textarea 
                            name="description"
                            id="description" 
                            className='inv-add-form__input inv-add-form__input--large'
                            // className={`inv-add-form__input ${descriptionError && 'inv-add-form__input--invalid'}`} 
                            placeholder="Please enter a brief item description..."
                            // value={description}
                            // onChange={handleInputChange}
                        />
                        <p className="inv-add-form__error">
                            {/* {descriptionError && <img src={errorIcon} alt="" className="inv-add-form__error-icon" />}
                            {descriptionError} */}
                        </p>
                        <label htmlFor="category" className="inv-add-form__label">Category</label>
                        <select
                            name="category"
                            id="category"
                            className='inv-add-form__input'
                            // className={`inv-add-form__input ${categoryError && 'inv-add-form__input--invalid'}`} 
                            placeholder="Please Select"
                            // value={category}
                            value=''
                            // onChange={handleInputChange}
                        >
                            <option value='' disabled>Please Select</option>
                            <option value='category1'>Category 1</option>
                        </select>
                        <p className="inv-add-form__error">
                            {/* {categoryError && <img src={errorIcon} alt="" className="inv-add-form__error-icon" />}
                            {categoryError} */}
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
                                    value={true}
                                    checked
                                />
                                In Stock
                            </label>
                            <label htmlFor="outOfStock" className="inv-add-form__option">
                                <input 
                                    type="radio" 
                                    id='outOfStock' 
                                    name='status' 
                                    className="inv-add-form__radio"
                                    value={false} 
                                />
                                Out of Stock
                            </label>
                        </div>
                        <p className="inv-add-form__error">
                            {/* {statusError && <img src={errorIcon} alt="" className="inv-add-form__error-icon" />}
                            {statusError} */}
                        </p>

                        <label htmlFor="quantity" className="inv-add-form__label">Quantity</label>
                        <input 
                            type="number"
                            name="status"
                            id="quantity" 
                            className='inv-add-form__input'
                            // className={`inv-add-form__input ${quantityError && 'inv-add-form__input--invalid'}`}
                            placeholder="0"
                            // value={quantity}
                            // onChange={handleInputChange}
                        />
                        <p className="inv-add-form__error">
                            {/* {quantityError && <img src={errorIcon} alt="" className="inv-add-form__error-icon" />}
                            {quantityError} */}
                        </p>
                        <label htmlFor="warehouse" className="inv-add-form__label">Warehouse</label>
                        <select
                            name="warehouse"
                            id="warehouse"
                            className='inv-add-form__input'
                            // className={`inv-add-form__input ${warehouseError && 'inv-add-form__input--invalid'}`} 
                            placeholder="Please Select"
                            // value={warehouse}
                            value=''
                            // onChange={handleInputChange}
                        >
                            <option value='' disabled>Please Select</option>
                            <option value='warehouse1'>Warehouse 1</option>
                        </select>
                        <p className="inv-add-form__error">
                            {/* {warehouseError && <img src={errorIcon} alt="" className="inv-add-form__error-icon" />}
                            {warehouseError} */}
                        </p>
                    </fieldset>
                </div>
                <div className="inv-add-form__bottom">
                    <button type="button" className="inv-add-form__button inv-add-form__button--secondary" onClick={''}>Cancel</button>
                    <button type="submit" className="inv-add-form__button">+ Add Item</button>
                </div>
            </form>
        </main>
    );
}

export default InventoryAdd;