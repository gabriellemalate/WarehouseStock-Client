import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Trash from "../../assets/icons/delete_outline-24px.svg";
import Pencil from "../../assets/icons/edit-24px.svg";
import Back from "../../assets/icons/arrow_back-24px.svg";
import Sort from "../../assets/icons/sort-24px.svg";
import Right from "../../assets/icons/chevron_right-24px.svg";
import "./InventoryDetails.scss";

function InventoryDetails() {

    const navigate = useNavigate();
    const {itemId} = useParams();


    const [item, setItem] = useState(null);

    async function getItem() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventories/${itemId}`);
            console.log(response.data)
            setItem(response.data);
        } catch (error) {
            console.log(`Error getting item with ID ${itemId}:`, error);
        }
    }

    useEffect(() => { getItem() }, []);

    if (!item) {
        return <p>Loading item info...</p>;
    }

    // useEffect(() => {
    //     const fetchItem = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:8080/inventory/${id}`);
    //             setItem(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchItem();
    // }, [id]);


    const handleBackClick = () => {
        navigate("/inventory");
    }

    const handleEditClick = () => {
        navigate("/inventory/:itemId/edit");
    }

    return (

        <main className="item-details">
            <div className="item-details-title">
                <div className="item-details-top">
                    <h1 className="item-details-head__title">
                        <img
                            className="item-details-head__title-arrow"
                            src={Back}
                            alt="See More"
                            onClick={handleBackClick}
                        />
                        Item
                    </h1>
                    <img
                        className="item-details-head__title-edit"
                        src={Pencil}
                        alt="Edit"
                        onClick={handleEditClick}
                    />
                </div>
            </div>
            <div className="item-details-container">
                <div className="item-details__info-mobile">
                    <p className="item-details-list__-title">

                        ITEM DESCRIPTION:
                    </p>
                    <p className="item-details-list__description-text">
                        {item.description}
                    </p>
                </div>
                <div className="item-details-container__tablet">
                    <div className="item-details__info-column-left">
                        <div className="item-details__info">
                            <p className="item-details-list__-title">

                                ITEM DESCRIPTION:
                            </p>
                            <p className="item-details-list__description-text">
                                {item.description}
                            </p>
                        </div>
                        <div className="item-details__info">
                            <p className="item-details-list__-title">
                                CATEGORY
                            </p>
                            <p className="item-details-list__category-text">
                                {item.category}
                            </p>
                        </div>
                    </div>

                    <div className="item-details__info-tablet">
                        <div className="item-details__info-column-right">
                            <div className="item-details__info">
                                <p className="item-details-list__-title">
                                    STATUS
                                </p>
                                <p className="item-details-list__status-text">
                                    {item.status}
                                </p>
                            </div>
                            <div className="item-details__info">
                                <p className="item-details-list__-title">
                                    WAREHOUSE
                                </p>
                                <p className="item-details-list__qty-text">
                                    {item.warehouse_name}
                                </p>
                            </div>
                        </div>
                        <div className="item-details__info">
                            <p className="item-details-list__-title">
                                QUANTITY
                            </p>
                            <p className="item-details-list__qty-text">
                                {item.quantity}
                            </p>
                        </div>

                    </div>
                </div>
                <div className="item-details__info-mobile">

                    <p className="item-details-list__-title">
                        CATEGORY
                    </p>
                    <p className="item-details-list__category-text">
                        {item.category}
                    </p>
                </div>


                <div className="item-details__info-statusqty-container-mobile">
                    <div className="item-details__info">
                        <p className="item-details-list__-title">
                            STATUS
                        </p>
                        <p className="item-details-list__status-text">
                            {item.status}
                        </p>
                    </div>
                    <div className="item-details__info">
                        <p className="item-details-list__-title">
                            QUANTITY
                        </p>
                        <p className="item-details-list__qty-text">
                            {item.quantity}
                        </p>
                    </div>
                </div>

                <div className="item-details__info-mobile">
                    <p className="item-details-list__-title">
                        WAREHOUSE
                    </p>
                    <p className="item-details-list__location-text">
                        {item.warehouse_name}
                    </p>
                </div>
            </div>

        </main>

    );

}

export default InventoryDetails;