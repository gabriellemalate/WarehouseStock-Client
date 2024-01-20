import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Back from "../../assets/icons/arrow_back-24px.svg";
import Close from "../../assets/icons/close-24px.svg";
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
            
            <div className="warehouse-delete__content-container">
            
            <div className="warehouse-delete__header">
            
           
            <div className="warehouse-delete__title">
                <img 
                    src={Back} 
                    alt="Back" 
                    className="warehouse-delete__header__back" 
                    onClick={() => navigate(-1)} 
                />
                <h1 className="warehouse-delete__header__title">Delete Warehouse</h1>
                </div>
                <img src={Close} alt="Close" className="warehouse-delete__header__close" onClick={() => navigate(-1)} />

            </div>
           <div className="warehouse-delete__content">
                <p className="warehouse-delete__content__text">
                   Please confirm that you'd like to delete the warehouse. You won't be ablle to undo this action. 
                    <span className="warehouse-delete__content__text__bold"> {warehouseName}?</span>
                </p>
                </div>

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