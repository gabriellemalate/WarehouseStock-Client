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
           <WarehouseDetails />
        </div>
      </main>
    </>
  );
}

export default WarehouseDetailsPage;
