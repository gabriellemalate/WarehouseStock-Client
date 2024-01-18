import { Link } from 'react-router-dom';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import './WarehouseAddPage.scss';

function WarehouseAddPage() {

    /* 
    vaildate all fields nonempty
    validate phonenumber and email are valid
    example phone number: +1 (919) 797-2875
    */

    return (
        <main className="main">
            <div className="main__page-header">
                <Link to='/' className="main__back-link">
                    <img src={backArrow} alt="back arrow" className="main__back-button" />
                </Link>
                <h1 className="main__title">
                    Add New Warehouse
                </h1>
            </div>

            <form className="form">
                <div className="form__middle">
                    <fieldset className="form__fieldset">
                        <h2 className="form__legend">
                            Warehouse Details
                        </h2>
                        <label htmlFor="warehouseName" className="form__label">Warehouse Name</label>
                        <input 
                            type="text"
                            name="warehouseName"
                            id="warehouseName" 
                            className="form__input"
                            placeholder="Warehouse Name"
                        />
                        <label htmlFor="address" className="form__label">Street Address</label>
                        <input 
                            type="text"
                            name="address"
                            id="address" 
                            className="form__input" 
                            placeholder="Street Address"
                        />
                        <label htmlFor="city" className="form__label">City</label>
                        <input 
                            type="text"
                            name="city"
                            id="city" 
                            className="form__input" 
                            placeholder="City"
                        />
                        <label htmlFor="country" className="form__label">Country</label>
                        <input 
                            type="text"
                            name="country"
                            id="country" 
                            className="form__input" 
                            placeholder="Country"
                        />
                    </fieldset>
                    <fieldset className="form__fieldset">
                        <h2 className="form__legend">
                            Contact Details
                        </h2>
                        <label htmlFor="contactName" className="form__label">Contact Name</label>
                        <input 
                            type="text"
                            name="contactName"
                            id="contactName" 
                            className="form__input" 
                            placeholder="Contact Name"
                        />
                        <label htmlFor="position" className="form__label">Position</label>
                        <input 
                            type="text"
                            name="position"
                            id="position" 
                            className="form__input" 
                            placeholder="Position"
                        />
                        <label htmlFor="phoneNumber" className="form__label">Phone Number</label>
                        <input 
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber" 
                            className="form__input" 
                            placeholder="Phone Number"
                        />
                        <label htmlFor="email" className="form__label">Email</label>
                        <input 
                            type="email"
                            name="email "
                            id="email" 
                            className="form__input" 
                            placeholder="Email"
                        />
                    </fieldset>
                </div>
                <div className="form__bottom">
                    <button type="button" className="form__button form__button--secondary">Cancel</button>
                    <button type="submit" className="form__button">+ Add Warehouse</button>
                </div>
            </form>

        </main>
    )
}

export default WarehouseAddPage;