import React from "react";
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Pencil from "../../assets/icons/edit-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import Back from "../../assets/icons/arrow_back-24px.svg";
import Sort from "../../assets/icons/sort-24px.svg";
import RightArrow from "../../assets/icons/chevron_right-24px.svg"
import "./WarehouseDetails.scss";
import "../../pages/InventoryPage/InventoryPage.scss";

function WarehouseDetails() {
    let { warehouseId } = useParams()

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/warehouse");
    };

    const handleEditClick = () => {
        navigate(`/warehouse/${warehouseId}/edit`);
    };




    const [inventoryItems, setInventoryItems] = useState(null);

    async function getItems() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/warehouses/${warehouseId}/inventories`);
            setInventoryItems(response.data);
        } catch (error) {
            console.log("Error getting all inventory items:", error);
        }
    }

    useEffect(() => { getItems() }, []);

    if (!inventoryItems) {
        return <p>Loading items...</p>;
    }




    return (
        <>
            <main className="warehouses-details inventory">
                <div className="warehouses-details__title">
                    <div className="warehouses-details__top">
                        <h1 className="warehouses-details-page-top__head">
                            <img
                                className="warehouses-details-page-list__item-detail-arrow"
                                src={Back}
                                alt="See More"
                                onClick={handleBackClick}
                            />
                            Insert Warehouse Location
                        </h1>
                        <img
                            className="warehouses-details-page-top__edit"
                            src={Pencil}
                            alt="Edit"
                            onClick={handleEditClick}
                        />
                    </div>
                </div>

                <div className="warehouses-details-container">
                    <div className="warehouses-details-container__warehouse">
                        <div className="warehouses-details-list__contact-addy">
                            <h4 className="warehouses-details-list__item-detail-label">
                                WAREHOUSE ADDRESS:
                            </h4>

                            <p className="warehouses-details-list__item-detail-value">
                                Insert Address
                            </p>
                        </div>
                        <div className="warehouses-details-list__contact">
                            <div className="warehouses-details-list__contact-name">
                                <h4 className="warehouses-details-list__item-detail-label">
                                    CONTACT NAME:
                                </h4>
                                <p className="warehouses-details-list__item-detail-value">
                                    Insert Name
                                </p>
                            </div>

                            <div className="warehouses-details-list__contact-phone">
                                <h4 className="warehouses-details-list__item-detail-label">
                                    CONTACT INFORMATION:
                                </h4>
                                <p className="warehouses-details-list__item-detail-phone">
                                    {" "}
                                    +1 (629) 555-0129
                                </p>
                                <p className="warehouses-details-list__item-detail-email">
                                    paujla@instock.com{" "}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>


                <article className="warehouse-inventory inventory__list">
                    <div className="inventory-container inventory__list-header">
                        <div className="inventory__item-info--left">
                            <h4 className="inventory__item-label spacing-1">
                                INVENTORY ITEM
                                <img className="inventory__item-label--sort" src={Sort} alt="Sort Column" />
                            </h4>
                            <h4 className="inventory__item-label spacing-2">
                                CATEGORY
                                <img className="inventory__item-label--sort" src={Sort} alt="Sort Column" />
                            </h4>
                        </div>
                        <div className="inventory__item-info--center">
                            <h4 className="inventory__item-label spacing-3--warehouse">
                                STATUS
                                <img className="inventory__item-label--sort" src={Sort} alt="Sort Column" />
                            </h4>
                            <h4 className="inventory__item-label spacing-4--warehouse">
                                QUANTITY
                                <img className="inventory__item-label--sort" src={Sort} alt="Sort Column" />
                            </h4>
                        </div>
                        <div className="inventory__item-info--right">
                            <h4 className="inventory__item-label">ACTIONS</h4>
                        </div>
                    </div>
                    {inventoryItems.map(item => (
                        <article className='inventory-container inventory__list-item' key={item.id}>
                            <div className="inventory__item-info">
                                <div className="inventory__item-info--left">
                                    <h4 className="inventory__item-label inventory__item-label--mobile">INVENTORY ITEM</h4>
                                    <Link to={`/inventory/${item.id}`} className='inventory__item-label--title spacing-1'>
                                        <h3 className="inventory__item-label--title">{item.item_name}</h3>
                                        <img className="inventory__item-label--arrow" src={RightArrow} alt="See More" />
                                    </Link>
                                    <h4 className="inventory__item-label inventory__item-label--mobile">CATEGORY</h4>
                                    <p className="inventory__item-label--text spacing-2">{item.category}</p>
                                </div>
                                <div className="inventory__item-info--center">
                                    <h4 className="inventory__item-label inventory__item-label--mobile">STATUS</h4>
                                    <div className="inventory__item-label--tag-holder spacing-3--warehouse">
                                        <p className={"inventory__item-label--text  tag--" + (item.quantity ? "in-stock" : "out-of-stock")}>{item.status.toUpperCase()}</p>

                                    </div>
                                    <h4 className="inventory__item-label inventory__item-label--mobile">QTY</h4>
                                    <p className="inventory__item-label--text spacing-4--warehouse">{item.quantity}</p>
                                </div>
                            </div>
                            <div className="inventory__item-actions">
                                <Link to={`/inventory/${item.id}/delete`} className=''>
                                    <img src={Delete} alt="Delete Icon" />
                                </Link>
                                <Link to={`/inventory/${item.id}/edit`} className=''>
                                    <img src={Edit} alt="Edit Icon" />
                                </Link>
                            </div>
                        </article>

                    ))}
                </article>


            </main>
        </>
    );
}

export default WarehouseDetails;
