import './WarehouseAddPage.scss';

function WarehouseAddPage() {
    return (
        <main className="main">
            <h1 className="main__title">
                Add New Warehouse
            </h1>

            <form className="form">
                <fieldset className="form__fieldset">
                    <legend className="form__legend">
                        Warehouse Details
                    </legend>
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
                    <legend className="form__legend">
                        Contact Details
                    </legend>
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
                <div className="form__bottom">
                    <button type="button" className="form__button form__button--secondary">Cancel</button>
                    <button type="submit" className="form__button">+ Add Warehosue</button>
                </div>
            </form>

        </main>
    )
}

export default WarehouseAddPage;