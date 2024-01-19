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
        <>
            <main className="inv-add">
                <div className="inv-add__page-header">
                    <Link to='/inventory' className="main__back-link">
                        <img src={Back} alt="back arrow" className="inv-add__back-button" />
                    </Link>
                    <h1 className="inv-add__title">
                        Add New Inventory Item
                    </h1>
                </div>

                <form className="form" >
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
                            className='form__input'
                            // className={`form__input ${itemNameError && 'form__input--invalid'}`}
                            placeholder="Item Name"
                            // value={itemeName}
                            // onChange={handleInputChange}
                        />
                        <p className="form__error">
                            {/* {itemNameError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {itemNameError} */}
                        </p>
                        <label htmlFor="description" className="form__label">Description</label>
                        <textarea 
                            name="description"
                            id="description" 
                            className='form__input'
                            // className={`form__input ${descriptionError && 'form__input--invalid'}`} 
                            placeholder="Please enter a brief item description..."
                            // value={description}
                            // onChange={handleInputChange}
                        />
                        <p className="form__error">
                            {/* {descriptionError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {descriptionError} */}
                        </p>
                        <label htmlFor="category" className="form__label">Category</label>
                        <input 
                            type="text"
                            name="category"
                            id="category"
                            className='form__input'
                            // className={`form__input ${categoryError && 'form__input--invalid'}`}
                            placeholder="Category"
                            // value={category}
                            // onChange={handleInputChange}
                        />
                        <p className="form__error">
                            {/* {categoryError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {categoryError} */}
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
                            className='form__input'
                            // className={`form__input ${statusError && 'form__input--invalid'}`}
                            // placeholder="Contact Name"
                            // value={status}
                            // onChange={handleInputChange}
                        />
                        <p className="form__error">
                            {/* {statusError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {statusError} */}
                        </p>
                        <label htmlFor="quantity" className="form__label">Quantity</label>
                        <input 
                            type="number"
                            name="quantity"
                            id="quantity" 
                            className='form__input'
                            // className={`form__input ${quantityError && 'form__input--invalid'}`}
                            // placeholder="Position"
                            // value={quantity}
                            // onChange={handleInputChange}
                        />
                        <p className="form__error">
                            {/* {quantityError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {quantityError} */}
                        </p>
                        <label htmlFor="warehouse" className="form__label">Warehouse</label>
                        <input 
                            type="text"
                            name="warehouse"
                            id="warehouse" 
                            className='form__input'
                            // className={`form__input ${warehouseError && 'form__input--invalid'}`} 
                            // placeholder="Phone Number"
                            // value={warehouse}
                            // onChange={handleInputChange}
                        />
                        <p className="form__error">
                            {/* {warehouseError && <img src={errorIcon} alt="" className="form__error-icon" />}
                            {warehouseError} */}
                        </p>
                    </fieldset>
                </div>
                <div className="form__bottom">
                    <button type="button" className="form__button form__button--secondary" onClick={''}>Cancel</button>
                    <button type="submit" className="form__button">+ Add Warehouse</button>
                </div>
            </form>


                <div className="inv-add-eq">
                    <form className="inv-add__form">
                        <div className="inv-add__sections">
                            <section className="inv-add-details">
                                <div className="inv-add-details-eq">
                                    <h2 className="inv-add__head">Item Details</h2>
                                    <div className="inv-add-details__name">
                                        <h3 className="inv-add-label">Item Name</h3>
                                        <textarea
                                            className={`inv-add-details__name-input ${inputErrors.item ? "error" : ""}`}
                                            placeholder="Item Name"
                                            value={itemName}
                                            onChange
                                        />
                                    </div>
                                    <div className="inv-add-details__descrip">
                                        <h3 className="inv-add-label">Description</h3>
                                        <textarea className="inv-add-details__descrip-input" placeholder="Please enter a brief item description..." />
                                    </div>
                                    <div className="inv-add-details__category">
                                        <h3 className="inv-add-label">Category</h3>
                                        <select className="inv-add-details__category-input">
                                            <option value="" disabled selected className="inv-add-details__category-input-disabled">Please select</option>
                                        </select>
                                        <img src={Down} className="inv-add-details__category-icon" />
                                    </div>
                                </div>
                            </section>
                            <section className="inv-add-avail">
                                <div className="inv-add-avail-eq">
                                    <h2 className="inv-add__head inv-add-avail__head">Item Availability</h2>
                                    <article className="inv-add-avail__stat">
                                        <h3 className="inv-add-label">Status</h3>
                                        <div className="inv-add-avail__stat-radios">
                                            <div className="inv-add-avail__stat-in">
                                                <input type="radio" id="instock" className="inv-add-avail__stat-in-radio" />
                                                <label className="inv-add-avail__stat-in-label" htmlFor="instock">In stock</label>
                                            </div>
                                            <div className="inv-add-avail__stat-out">
                                                <input type="radio" id="outstock" className="inv-add-avail__stat-out-radio" />
                                                <label className="inv-add-avail__stat-in-label" htmlFor="outstock">Out of stock</label>
                                            </div>
                                        </div>
                                    </article>
                                    <div className="inv-add-avail__quantity">
                                        <h3 className="inv-add-label">Quantity</h3>
                                        <input className="inv-add-avail__quantity-input" type="number" placeholder="0" />
                                    </div>
                                    <div className="inv-add-avail__ware">
                                        <h3 className="inv-add-label">Warehouse</h3>
                                        <select
                                            className={`inv-add-avail__ware-input ${inputErrors.warehouse ? "error" : ""}`}
                                            value={warehouse}
                                            onChange
                                        >
                                            <option>Please select</option>
                                        </select>
                                        <img src={Down} className="inv-add-avail__ware-icon" />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <article className="inv-add-buttons">
                            <div className="inv-add-buttons-eq">
                                <Link to="/inventory" className="inv-add-buttons-cancel" >Cancel</Link>
                                <button
                                    type="submit"
                                    className="inv-add-buttons-add"
                                    onClick={handleSubmit}
                                >
                                    + Add Item
                                </button>
                            </div>
                        </article>
                    </form>
                </div>
            </main>
        </>
    );
}

export default InventoryAdd;