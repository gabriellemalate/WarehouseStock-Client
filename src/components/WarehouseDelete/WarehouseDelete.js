import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Back from "../../assets/icons/arrow_back-24px.svg";
import "./WarehouseDelete.scss";


function WarehouseDelete() {
    const navigate = useNavigate();
    const { warehouseId } = useParams(); 

    const warehouseName = "Warehouse Name"; 

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/warehouses/${warehouseId}`);
            navigate('/'); 
        } catch (error) {
            console.error('Error deleting warehouse:', error);
       }
    };

    return (
        <div className="warehouse-delete">
            <div className="warehouse-delete__header">
                <img 
                    src={Back} 
                    alt="Back" 
                    className="warehouse-delete__header__back" 
                    onClick={() => navigate(-1)} 
                />
                <h1 className="warehouse-delete__header__title">Delete Warehouse</h1>
            </div>
            <div className="warehouse-delete__content">
                <p className="warehouse-delete__content__text">
                    Are you sure you want to delete 
                    <span className="warehouse-delete__content__text__bold"> {warehouseName}?</span>
                </p>
                <div className="warehouse-delete__content__buttons">
                    <button 
                        className="warehouse-delete__content__buttons__cancel"
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </button>
                    <button 
                        className="warehouse-delete__content__buttons__delete"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WarehouseDelete;