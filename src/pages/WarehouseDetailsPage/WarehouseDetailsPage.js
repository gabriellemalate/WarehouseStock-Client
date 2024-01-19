import React from "react";
import { useNavigate } from "react-router-dom";
import Sort from "../../assets/icons/sort-24px.svg";
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

          <section className="warehouses-details-list">
            <div className="warehouses-details-list-eq">
              <article className="warehouses-details-list__tablet">
                <div className="warehouses-details-list__tablet-left">
                  <div className="warehouses-details-list__tablet-label">
                    WAREHOUSE
                    <img
                      className="warehouses-details-list__tablet-sort"
                      alt="sort warehouses"
                      src={Sort}
                    />
                  </div>
                  <div className="warehouses-details-list__tablet-label">
                    ADDRESS
                    <img
                      className="warehouses-details-list__tablet-sort"
                      alt="sort addresses"
                      src={Sort}
                    />
                  </div>
                </div>
                <div className="warehouses-details-list__tablet-end">
                  <div className="warehouses-details-list__tablet-right">
                    <div className="warehouses-details-list__tablet-label">
                      CONTACT NAME
                      <img
                        className="warehouses-details-list__tablet-sort"
                        alt="sort contacts"
                        src={Sort}
                      />
                    </div>
                    <div className="warehouses-details-list__tablet-label">
                      CONTACT INFORMATION
                      <img
                        className="warehouses-details-list__tablet-sort"
                        alt="sort contact information"
                        src={Sort}
                      />
                    </div>
                  </div>
                  <h3 className="warehouses-details-list__tablet-label warehouse-details-list__tablet-label-acts">
                    ACTIONS
                  </h3>
                </div>
              </article>
              <WarehouseDetails />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default WarehouseDetailsPage;
