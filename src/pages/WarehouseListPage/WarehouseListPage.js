import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MagnifyingGlass from "../../assets/icons/search-24px.svg";
import Sort from "../../assets/icons/sort-24px.svg";
import "./WarehouseListPage.scss"
import WarehouseOption from "../../components/WarehouseOption/WarehouseOption";

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
                            <WarehouseOption/>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default WarehouseListPage;