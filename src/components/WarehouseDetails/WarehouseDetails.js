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
      <main className="warehouses-details">
        <div className="warehouses-details__title">
          <div className="warehouses-details__top">
            <h1 className="warehouses-details-page-top__head">
              <img
                className="warehouses-details-page-list__item-detail-arrow"
                src={Back}
                alt="See More"
              />
              Insert Warehouse Location
            </h1>
            <img
              className="warehouses-details-page-top__edit"
              src={Pencil}
              alt="Edit"
            />
          </div>
        </div>

        <div className="warehouses-details-container">
          <div className="warehouses-details-container__warehouse">
            <div className="warehouses-details-list__item-detail">
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
                  CONTACT NAME
                </h4>
                <p className="warehouses-details-list__item-detail-value">
                  Insert Name
                </p>
              </div>

              <div className="warehouses-details-list__contact-phone">
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

        <div className="warehouses-details-container">
          <div className="warehouses-details-container__inventory-tablet">
            <div className="warehouses-details-list__tablet">
              <div className="warehouses-details-list__tablet-label">
                INVENTORY ITEM
                <img
                  className="warehouses-details-list__tablet-sort"
                  alt="sort contact information"
                  src={Sort}
                />
                <p className="warehouses-details-list__inventory-tablet-value">
                {" "}
                Insert Item
                <img
                  className="warehouses-details-list__inventory-tablet-arrow"
                  src={Right}
                  alt="See More"
                />
              </p>
              </div>
              <div className="warehouses-details-list__tablet-label">
                CATEGORY
                <img
                  className="warehouses-details-list__tablet-sort"
                  alt="sort contact information"
                  src={Sort}
                />
                 <p className="warehouses-details-list__inventory-tablet-value">
                Insert Category
              </p>
              </div>

              <div className="warehouses-details-list__tablet-label">
                STATUS
                <img
                  className="warehouses-details-list__tablet-sort"
                  alt="sort contact information"
                  src={Sort}
                />
                 <p className="warehouses-details-list__inventory-tablet-value">
                Insert Status
              </p>
              </div>
              <div className="warehouses-details-list__tablet-label">
                QUANTITY
                <img
                  className="warehouses-details-list__tablet-sort"
                  alt="sort contact information"
                  src={Sort}
                />
                <p className="warehouses-details-list__inventory-tablet-value">
                Insert Quantity
              </p>
              </div>

              <div className="warehouses-details-list__tablet-label">
                ACTIONS
                <img
                  className="warehouses-details-list__tablet-sort"
                  alt="sort contact information"
                  src={Sort}
                />
                <div className="warehouses-details-list__actions-tablet">
          <img src={Trash} alt="Delete" />
          <img src={Pencil} alt="Edit" />
        </div>
              </div>
            </div>

           
          </div>
        </div>

        <div className="warehouses-details-list__inventory">
          <div className="warehouses-details-list__inventory-left">
            <div className="warehouses-details-list__inventory-left-item">
              <h4 className="warehouses-details-list__item-detail-label">
                INVENTORY ITEM
              </h4>
              <p className="warehouses-details-list__item-detail-value ">
                {" "}
                Insert Item
                <img
                  className="warehouses-details-list__item-detail-arrow"
                  src={Right}
                  alt="See More"
                />
              </p>
            </div>
            <div className="warehouses-details-list__inventory-left-category">
              <h4 className="warehouses-details-list__item-detail-label">
                CATEGORY
              </h4>
              <p className="warehouses-details-list__item-detail-value">
                Insert Category
              </p>
            </div>
          </div>

          <div className="warehouses-details-list__inventory-right">
            <div className="warehouses-details-list__inventory-right-status">
              <h4 className="warehouses-details-list__item-detail-label-comp">
                STATUS
              </h4>
              <p className="warehouses-details-list__item-detail-value">
                Insert Status
              </p>
            </div>
            <div className="warehouses-details-list__inventory-right-qty">
              <h4 className="warehouses-details-list__item-detail-label-comp">
                QTY
              </h4>
              <p className="warehouses-details-list__item-detail-value warehouses-details-list__item-detail-address">
                Insert Quantity
              </p>
            </div>
          </div>
        </div>

        <div className="warehouses-details-list__actions">
          <img src={Trash} alt="Delete" />
          <img src={Pencil} alt="Edit" />
        </div>
      </main>
    </>
  );
}

export default WarehouseDetails;
