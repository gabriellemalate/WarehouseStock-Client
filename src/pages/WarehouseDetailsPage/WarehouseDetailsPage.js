import React from "react";
import { useNavigate } from "react-router-dom";
import Back from "../../assets/icons/arrow_back-24px.svg";
import Pencil from "../../assets/icons/edit-24px.svg";
import "./WarehouseDetailsPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

function WarehouseDetailsPage() {
  return (
    <>
      <main className="warehouses-details">
        <div className="warehouses-details-eq">
          <div className="warehouses-details-top">
            <img
              className="warehouses-details-list__item-detail-arrow"
              src={Back}
              alt="See More"
            />
            <h1 className="warehouses-details-top__head">
              Insert Warehouse Location
            </h1>
            <img
              className="warehouses-details-top__edit"
              src={Pencil}
              alt="Edit"
            />
          </div>
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
           <WarehouseDetails />
        </div>
      </main>
    </>
  );
}

export default WarehouseDetailsPage;
