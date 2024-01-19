import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useRef } from "react"
import MagnifyingGlass from "../../assets/icons/search-24px.svg";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import Sort from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";
import "./InventoryPage.scss"

const BASE_URL = "http://localhost:1234"; // need to make this dynamic

function InventoryPage() {
    const [inventoryItems, setInventoryItems] = useState(null);

    async function getItems() {
        try {
            const response = await axios.get(`${BASE_URL}/inventory`);
            // console.log("successfully fetched /inventory");
            setInventoryItems(response.data);
        } catch (error) {
            console.log("Error getting all inventory items:", error);
        }
    }

    useEffect(() => { getItems() }, []);

    if (!inventoryItems) {
        return <p>Loading items...</p>;
    }

    return (
        <main className="inventory">

            <section className="inventory-container inventory__title-bar">
                    <h1>Inventory</h1>
                    <div className="inventory__actions">
                        <form className="inventory__search">
                            <img className="inventory__search-icon" src={MagnifyingGlass} alt="Search" />
                            <input className="inventory__search-field" type="search" placeholder="Search..." />
                        </form>
                        <button>+ Add New Item</button>
                </div>
            </section>

            <article className="inventory__list">
                <h2 className="inventory-container inventory__list-header">list header</h2>
                {inventoryItems.map(item => (
                    <article className='inventory-container inventory__list-item' key={item.id}>
                        {/* <div className=""> */}
                            <div className="inventory__item-info">
                                <div className="inventory__item-info--left">
                                    <Link to={`/`} className=''>
                                        <h3>{item.item_name}</h3>
                                    </Link>
                                    <p>{item.category}</p>
                                </div>
                                <div className="inventory__item-info--center">
                                    <p>{item.status}</p>
                                    <p>{item.quantity}</p>
                                    <p>{item.warehouse_name}</p>
                                </div>
                            </div>
                            <div className="inventory__item-actions">
                                <Link to={`/inventory/${item.id}/delete`} className=''>
                                    <img src={Delete} alt="Delete Icon" />
                                </Link>
                                <Link to={`/inventory/${item.id}/edit`} className=''>
                                    <img src={Edit} alt="Edit Icon" />
                                </Link>
                            </div>
                        {/* </div> */}
                    </article>

                ))}
            </article>

        </main>
    )
}

export default InventoryPage;