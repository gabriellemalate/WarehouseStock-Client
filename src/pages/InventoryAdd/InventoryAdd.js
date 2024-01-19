import React from "react";
import "./InventoryAdd.scss";
import Back from "../../assets/icons/arrow_back-24px.svg";
import Down from "../../assets/icons/arrow_drop_down-24px.svg";

function InventoryAdd() {

    return (
        <>
            <main className="inv-add">
                <div className="inv-add-eq">
                    <article className="inv-add-top">
                        <div className="inv-add-top-eq">
                            <img className="inv-add-top__return" src={Back} alt="Go Back" />
                            <h1 className="inv-add-top__title">Add New Inventory Item</h1>
                        </div>
                    </article>
                    <div className="inv-add__sections">
                        <section className="inv-add-details">
                            <div className="inv-add-details-eq">
                                <h2 className="inv-add__head">Item Details</h2>
                                <div className="inv-add-details__name">
                                    <h3 className="inv-add-label">Item Name</h3>
                                    <textarea className="inv-add-details__name-input" placeholder="Item Name" />
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
                                            <input type="radio" id="instock" className="inv-add-avail__stat-in-radio"/>
                                            <label className="inv-add-avail__stat-in-label" htmlFor="instock">In stock</label>
                                        </div>
                                        <div className="inv-add-avail__stat-out">
                                            <input type="radio" id="outstock" className="inv-add-avail__stat-out-radio"/>
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
                                    <select className="inv-add-avail__ware-input">
                                        <option>Please select</option>
                                    </select>
                                    <img src={Down} className="inv-add-avail__ware-icon" />
                                </div>
                            </div>
                        </section>
                    </div>
                    <article className="inv-add-buttons">
                        <div className="inv-add-buttons-eq">
                            <button className="inv-add-buttons-cancel">Cancel</button>
                            <button className="inv-add-buttons-add">+ Add Item</button>
                        </div>
                    </article>
                </div>
            </main>
        </>
    );
}

export default InventoryAdd;