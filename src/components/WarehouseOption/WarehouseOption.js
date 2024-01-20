import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Trash from "../../assets/icons/delete_outline-24px.svg";
import Pencil from "../../assets/icons/edit-24px.svg";
import Right from "../../assets/icons/chevron_right-24px.svg"
import "./WarehouseOption.scss"

function WarehouseOption({ id }) {

    return (
        <>
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
                                    <p className="warehouses-list__item-detail-value warehouses-list__item-detail-address">890 Brannan Street, San Francisco, USA
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
                            <Link to={`/warehouse/${id}/edit`}><img src={Pencil} alt="Edit" /></Link>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default WarehouseOption;