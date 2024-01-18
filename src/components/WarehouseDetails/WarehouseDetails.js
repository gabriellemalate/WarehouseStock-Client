import React from "react";
import { useNavigate } from "react-router-dom";
import Trash from "../../assets/icons/delete_outline-24px.svg";
import Pencil from "../../assets/icons/edit-24px.svg";
import Back from "../../assets/icons/arrow_back-24px.svg";
import Sort from "../../assets/icons/sort-24px.svg";
import Right from "../../assets/icons/chevron_right-24px.svg";
import "./WarehouseDetails.scss";

function WarehouseDetails() {
  return (
    <>
      <article className="warehouses-details-list__item">
        <div className="warehouses-details-list__item-eq">
          <div className="warehouses-details-list__item-container">
            <div className="warehouses-details-list__item-core">
              <div className="warehouses-details-list__items warehouses-list__items-left">
                <div className="warehouses-details-list__item-detail">
                  <h4 className="warehouses-details-list__item-detail-label">
                    WAREHOUSE ADDRESS:
                  </h4>

                  <p className="warehouses-details-list__item-detail-value">
                    Insert Address
                  </p>
                </div>
                <div className="warehouses-details-list__item-detail">
                  <h4 className="warehouses-details-list__item-detail-label">
                    CONTACT NAME
                  </h4>
                  <p className="warehouses-details-list__item-detail-value warehouses-details-list__item-detail-address">
                    Insert Name
                  </p>
                </div>
              </div>
              <div className="warehouses-details-list__items warehouses-details-list__items-right">
                <div className="warehouses-details-list__item-detail">
                  <h4 className="warehouses-details-list__item-detail-label">
                    CONTACT INFORMATION
                  </h4>
                  <p className="warehouses-details-list__item-detail-value warehouses-details-list__item-detail-value-info">
                    <span className="warehouses-details-list__item-detail-phone">
                      {" "}
                      +1 (629) 555-0129
                    </span>
                    <span className="warehouses-details-list__item-detail-email">
                      paujla@instock.com{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="warehouses-details-list__item-eq">
          <div className="warehouses-details-list__item-container">
            <div className="warehouses-details-list__item-core">
              <div className="warehouses-details-list__items warehouses-details-list__items-left">
                <div className="warehouses-details-list__item-detail">
                  <h4 className="warehouses-details-list__item-detail-label">
                    INVENTORY ITEM
                  </h4>
                  <p className="warehouses-details-list__item-detail-value warehouses-details-list__item-detail-warehouse">
                    {" "}
                    Insert Item
                    <img
                      className="warehouses-details-list__item-detail-arrow"
                      src={Right}
                      alt="See More"
                    />
                  </p>
                </div>

                <div className="warehouses-details-list__item-detail">
                  <h4 className="warehouses-details-list__item-detail-label">
                    CATEGORY
                  </h4>
                  <p className="warehouses-details-list__item-detail-value warehouses-details-list__item-detail-address">
                    Insert Category
                  </p>
                </div>
              </div>
              <div className="warehouses-details-list__items warehouses-details-list__items-right">
                <div className="warehouses-details-list__item-detail">
                  <h4 className="warehouses-details-list__item-detail-label">STATUS</h4>
                  <p className="warehouses-details-list__item-detail-value warehouses-details-list__item-detail-value-info">
                    Insert Status
                  </p>
                  <div className="warehouses-details-list__item-detail">
                    <h4 className="warehouses-details-list__item-detail-label">QTY</h4>
                    <p className="warehouses-details-list__item-detail-value warehouses-details-list__item-detail-address">
                      Insert Quantity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="warehouses-details-list__actions">
            <img src={Trash} alt="Delete" />
            <img src={Pencil} alt="Edit" />
          </div>
        </div>
      </article>
    </>
  );
}

export default WarehouseDetails;
