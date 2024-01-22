import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Close from "../../assets/icons/close-24px.svg";
import "./WarehouseDelete.scss";


function WarehouseDelete() {
    const navigate = useNavigate();
    const { warehouseId } = useParams();
    const [warehouseName, setWarehouseName] = useState("");
    console.log('Extracted ID:', warehouseId);


    const fetchWarehouseDetails = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/warehouses/${warehouseId}`);
            setWarehouseName(response.data.warehouse_name);
        } catch (error) {
            console.error('Error fetching warehouse details:', error.response ? error.response.data : error);
        }
    };


    useEffect(() => {
        if (warehouseId) {
            fetchWarehouseDetails();
        }
    }, [warehouseId]);


    const handleDelete = async () => {

        if (!warehouseId) {
            console.error('No ID provided for deletion');
            return;
        }
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/api/warehouses/${warehouseId}`);
            navigate('/warehouse');
        } catch (error) {
            console.error('Error deleting warehouse:', error.response ? error.response.data : error);
        }
    };

    return (
        <div className="warehouse-delete">

            <div className="warehouse-delete__content-container">

                <div className="warehouse-delete__header">


                    <div className="warehouse-delete__title">
                        <h1 className="warehouse-delete__header__title">Delete {warehouseName} warehouse?</h1>
                    </div>
                    <img src={Close} alt="Close" className="warehouse-delete__header__close" onClick={() => navigate(-1)} />

                </div>
                <div className="warehouse-delete__content">
                    <p className="warehouse-delete__content__text">
                        Please confirm that you'd like to delete the {warehouseName} from the list of warehouses. You won't be ablle to undo this action.
                    </p>
                </div>

                <div className="warehouse-delete__content__buttons-tablet">
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

                <div className="warehouse-delete__content__buttons-mobile">
                    <button
                        className="warehouse-delete__content__buttons-mobile-cancel"
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </button>
                    <button
                        className="warehouse-delete__content__buttons-mobile-delete"
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
