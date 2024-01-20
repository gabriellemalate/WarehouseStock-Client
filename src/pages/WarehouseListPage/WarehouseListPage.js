import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MagnifyingGlass from "../../assets/icons/search-24px.svg";
import Sort from "../../assets/icons/sort-24px.svg";
import "./WarehouseListPage.scss"
import WarehouseOption from "../../components/WarehouseOption/WarehouseOption";

function WarehouseListPage() {
    const BASE_URL = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();
    const [warehouseList, setWarehouseList] = useState([]);

    async function getWarehouses() {
        try {
            let response = await axios.get(`${BASE_URL}/warehouses`);

            setWarehouseList(response.data);

        } catch (error) {
            console.log('Error fetching warehouses', error);
        }
    }

    useEffect(()=>{
        getWarehouses();
    },[])

    function navigateToAddWarehouse() {
        navigate('/warehouse/add');
    }

    return (
        <>
            <main className="warehouses">
                <div className="warehouses-eq">
                    <section className="warehouses-top">
                        <div className="warehouses-top-eq">
                            <h1 className="warehouses-top__head">Warehouses</h1>

                            <div className='warehouses-top__action'>

                                <article className='warehouses-top__action-search'>
                                    <form className="warehouses-top__action-search-eq">
                                        <img className="warehouses-top__action-search-icon" src={MagnifyingGlass} alt="Search" />
                                        <textarea className="warehouses-top__action-search-box" type="search" placeholder="Search..." />
                                    </form>
                                </article>
                                <button className="warehouses-top__action-button" type='button' onClick={navigateToAddWarehouse}>
                                    + Add New Warehouse
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="warehouses-list">
                        <div className="warehouses-list-eq">
                            <article className="warehouses-list__tablet">
                                <div className="warehouses-list__tablet-left">
                                    <div className="warehouses-list__tablet-label">
                                        WAREHOUSE
                                        <img className="warehouses-list__tablet-sort" alt="sort warehouses" src={Sort} />
                                    </div>
                                    <div className="warehouses-list__tablet-label">
                                        ADDRESS
                                        <img className="warehouses-list__tablet-sort" alt="sort addresses" src={Sort} />
                                    </div>
                                </div>
                                <div className="warehouses-list__tablet-end">
                                <div className="warehouses-list__tablet-right">
                                    <div className="warehouses-list__tablet-label">
                                        CONTACT NAME
                                        <img className="warehouses-list__tablet-sort" alt="sort contacts" src={Sort} />
                                    </div>
                                    <div className="warehouses-list__tablet-label">
                                        CONTACT INFORMATION
                                        <img className="warehouses-list__tablet-sort" alt="sort contact information" src={Sort} />
                                    </div>
                                </div>
                                <h3 className="warehouses-list__tablet-label warehouses-list__tablet-label-acts">
                                    ACTIONS
                                </h3>
                                </div>
                            </article>
                            <WarehouseOption id='1' />
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default WarehouseListPage;