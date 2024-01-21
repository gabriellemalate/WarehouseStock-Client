import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Back from "../../assets/icons/arrow_back-24px.svg";
import Close from "../../assets/icons/close-24px.svg";
import "./InventoryDelete.scss";


function InventoryDelete() {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log('Extracted ID:', id);

    const itemName = "ITEM NAME";

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/inventory/${id}`);
            navigate('/');
        } catch (error) {
            console.error('Error deleting inventory item:', error);
        }
    };

    return (
        <div className="inventory-delete">

            <div className="inventory-delete__content-container">

                <div className="inventory-delete__header">


                    <div className="inventory-delete__title">
                        <img
                            src={Back}
                            alt="Back"
                            className="inventory-delete__header__back"
                            onClick={() => navigate(-1)}
                        />
                        <h1 className="inventory-delete__header__title">Delete Item</h1>
                    </div>
                    <img src={Close} alt="Close" className="inventory-delete__header__close" onClick={() => navigate(-1)} />

                </div>
                <div className="inventory-delete__content">
                    <p className="inventory-delete__content__text">
                        Please confirm that you'd like to delete the {itemName} item. You won't be able to undo this action.
                        <span className="inventory-delete__content__text__bold"> </span>
                    </p>
                </div>

                <div className="inventory-delete__content__buttons-tablet">
                    <button
                        className="inventory-delete__content__buttons__cancel"
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </button>
                    <button
                        className="inventory-delete__content__buttons__delete"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>

                <div className="inventory-delete__content__buttons-mobile">
                    <button
                        className="inventory-delete__content__buttons-mobile-cancel"
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </button>
                    <button
                        className="inventory-delete__content__buttons-mobile-delete"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>

            </div>
        </div>


    );
}

export default InventoryDelete;