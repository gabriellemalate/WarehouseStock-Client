// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useRef } from "react"
import MagnifyingGlass from "../../assets/icons/search-24px.svg";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import Sort from "../../assets/icons/sort-24px.svg";
import RightArrow from "../../assets/icons/chevron_right-24px.svg"
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
                <div className="inventory-container inventory__list-header">
                    <div className="inventory__item-info--left">
                        <h4 className="inventory__item-label spacing-1">
                            INVENTORY ITEM
                            <img className="inventory__item-label--sort" src={Sort} alt="Sort Column" />
                        </h4>
                        <h4 className="inventory__item-label spacing-2">
                            CATEGORY
                            <img className="inventory__item-label--sort" src={Sort} alt="Sort Column" />
                        </h4>
                    </div>
                    <div className="inventory__item-info--center">
                        <h4 className="inventory__item-label spacing-3">
                            STATUS
                            <img className="inventory__item-label--sort" src={Sort} alt="Sort Column" />
                        </h4>
                        <h4 className="inventory__item-label spacing-4">
                            QTY
                            <img className="inventory__item-label--sort" src={Sort} alt="Sort Column" />
                        </h4>
                        <h4 className="inventory__item-label spacing-5">
                            WAREHOUSE
                            <img className="inventory__item-label--sort" src={Sort} alt="Sort Column" />
                        </h4>
                    </div>
                    <div className="inventory__item-info--right">
                        <h4 className="inventory__item-label">ACTIONS</h4>
                    </div>
                </div>
                {inventoryItems.map(item => (
                    <article className='inventory-container inventory__list-item' key={item.id}>
                        {/* <div className=""> */}
                        <div className="inventory__item-info">
                            <div className="inventory__item-info--left">
                                <h4 className="inventory__item-label inventory__item-label--mobile">INVENTORY ITEM</h4>
                                <Link to={`/inventory/${item.id}`} className='inventory__item-label--title spacing-1'>
                                    <h3 className="inventory__item-label--title">{item.item_name}</h3>
                                    <img className="inventory__item-label--arrow" src={RightArrow} alt="See More" />
                                    {/* <span><img className="inventory__item-label--arrow" src={RightArrow} alt="See More" /></span> */}
                                </Link>
                                <h4 className="inventory__item-label inventory__item-label--mobile">CATEGORY</h4>
                                <p className="inventory__item-label--text spacing-2">{item.category}</p>
                            </div>
                            <div className="inventory__item-info--center">
                                <h4 className="inventory__item-label inventory__item-label--mobile">STATUS</h4>
                                <div className="inventory__item-label--tag-holder spacing-3">
                                    <p className={"inventory__item-label--text  tag--" + (item.quantity ? "in-stock" : "out-of-stock")}>{item.status.toUpperCase()}</p>
                                    
                                </div>
                                <h4 className="inventory__item-label inventory__item-label--mobile">QTY</h4>
                                <p className="inventory__item-label--text spacing-4">{item.quantity}</p>
                                <h4 className="inventory__item-label inventory__item-label--mobile">WAREHOUSE</h4>
                                <p className="inventory__item-label--text spacing-5">{item.warehouse_name}</p>
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