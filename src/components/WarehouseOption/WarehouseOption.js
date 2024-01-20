import React from "react";
import { Link } from "react-router-dom";
import Trash from "../../assets/icons/delete_outline-24px.svg";
import Pencil from "../../assets/icons/edit-24px.svg";
import Right from "../../assets/icons/chevron_right-24px.svg"
import "./WarehouseOption.scss"

function WarehouseOption({ warehouse }) {
    let { id, warehouse_name, address, city, country, contact_name, contact_email, contact_phone } = warehouse;
    return (
        <>
            <article className="warehouses-list__item">
                <div className="warehouses-list__item-core">
                    <div className="warehouses-list__items warehouses-list__items-left">
                        <div className="warehouses-list__item-detail">
                            <h4 className="warehouses-list__item-detail-label">WAREHOUSE</h4>
                            <p className="warehouses-list__item-detail-value warehouses-list__item-detail-warehouse"> {warehouse_name}
                                <img className="warehouses-list__item-detail-arrow" src={Right} alt="See More" />
                            </p>
                        </div>
                        <div className="warehouses-list__item-detail">
                            <h4 className="warehouses-list__item-detail-label">ADDRESS</h4>
                            <p className="warehouses-list__item-detail-value warehouses-list__item-detail-address">{address}, {city}, {country}
                            </p>
                        </div>
                    </div>
                    <div className="warehouses-list__items warehouses-list__items-right">
                        <div className="warehouses-list__item-detail">
                            <h4 className="warehouses-list__item-detail-label">CONTACT NAME</h4>
                            <p className="warehouses-list__item-detail-value warehouses-list__item-detail-contact">{contact_name}
                            </p>
                        </div>
                        <div className="warehouses-list__item-detail">
                            <h4 className="warehouses-list__item-detail-label">CONTACT INFORMATION</h4>
                            <div className="warehouses-list__item-detail-value warehouses-list__item-detail-info">
                                <div className="warehouses-list__item-detail-phone">{contact_phone}</div>
                                <div className="warehouses-list__item-detail-email">{contact_email}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="warehouses-list__actions">
                    <img className="warehouses-list__actions-icon"src={Trash} alt="Delete" />
                    <Link to={`/warehouse/${id}/edit`}>
                        <img  className="warehouses-list__actions-icon" src={Pencil} alt="Edit" />
                    </Link>
                </div>
            </article>
        </>
    );
}

export default WarehouseOption;