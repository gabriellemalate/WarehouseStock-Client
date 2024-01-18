import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MagnifyingGlass from "../../assets/icons/search-24px.svg";
import Trash from "../../assets/icons/delete_outline-24px.svg";
import Pencil from "../../assets/icons/edit-24px.svg";
import Sort from "../../assets/icons/sort-24px.svg";
import Right from "../../assets/icons/chevron_right-24px.svg"
import "./WarehouseListPage.scss"

function WarehouseListPage() {

    return (
        <>
            <main className="warehouses">
                <div className="warehouses-eq">
                    <section className="warehouses-top">
                        <div className="warehouses-top-eq">
                            <h1 className="warehouses-top__head">Warehouses</h1>

                            <div className='warehouses-top__action'>

                                <article className='warehouses-top__action-search'>
                                    <form className="warehouses-top__action-search-eq">
                                        <img className="warehouses-top__action-search-icon" src={MagnifyingGlass} alt="Search" />
                                        <textarea className="warehouses-top__action-search-box" type="search" placeholder="Search..." />
                                    </form>
                                </article>

                                <button className="warehouses-top__action-button">
                                    + Add New Warehouse
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="warehouses-list">
                        <div className="warehouses-list-eq">
                            <article className="warehouses-list__tablet">
                                <div className="warehouses-list__tablet-label">
                                    WAREHOUSE
                                    <img className="warehouses-list__tablet-sort" alt="sort warehouses" src={Sort} />
                                </div>
                                <div className="warehouses-list__tablet-label">
                                    ADDRESS
                                    <img className="warehouses-list__tablet-sort" alt="sort addresses" src={Sort} />
                                </div>
                                <div className="warehouses-list__tablet-label">
                                    CONTACT NAME
                                    <img className="warehouses-list__tablet-sort" alt="sort contacts" src={Sort} />
                                </div>
                                <div className="warehouses-list__tablet-label">
                                    CONTACT INFORMATION
                                    <img className="warehouses-list__tablet-sort" alt="sort contact information" src={Sort} />
                                </div>
                                <h3 className="warehouses-list__tablet-label">
                                    ACTIONS
                                </h3>
                            </article>

                            <article className="warehouses-list__item">
                                <div className="warehouses-list__item-eq">
                                    <div className="warehouses-list__item-container">
                                        <div className="warehouses-list__item-core">
                                            <div className="warehouses-list__items warehouses-list__items-left">
                                                <div className="warehouses-list__item-detail">
                                                    <h4 className="warehouses-list__item-detail-label">WAREHOUSE</h4>
                                                    <p className="warehouses-list__item-detail-value warehouses-list__item-detail-warehouse"> Value
                                                        <img className="warehouses-list__item-detail-arrow" src={Right} alt="See More" />
                                                    </p>
                                                </div>
                                                <div className="warehouses-list__item-detail">
                                                    <h4 className="warehouses-list__item-detail-label">ADDRESS</h4>
                                                    <p className="warehouses-list__item-detail-value warehouses-list__item-detail-address">503 Broadway, New York, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="warehouses-list__items warehouses-list__items-right">
                                                <div className="warehouses-list__item-detail">
                                                    <h4 className="warehouses-list__item-detail-label">CONTACT NAME</h4>
                                                    <p className="warehouses-list__item-detail-value warehouses-list__item-detail-contact">Value Value
                                                    </p>
                                                </div>
                                                <div className="warehouses-list__item-detail">
                                                    <h4 className="warehouses-list__item-detail-label">CONTACT INFORMATION</h4>
                                                    <p className="warehouses-list__item-detail-value warehouses-list__item-detail-value-info">
                                                        <span className="warehouses-list__item-detail-phone"> +1 (629) 555-0129</span>
                                                        <span className="warehouses-list__item-detail-email">paujla@instock.com </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="warehouses-list__actions">
                                            <img src={Trash} alt="Delete" />
                                            <img src={Pencil} alt="Edit" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default WarehouseListPage;