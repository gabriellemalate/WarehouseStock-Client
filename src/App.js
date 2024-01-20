import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage"
import WarehouseDelete from './components/WarehouseDelete/WarehouseDelete';
import WarehouseEditPage from './pages/WarehouseEditPage/WarehouseEditPage';

    function App() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<WarehouseListPage />} />
                        
                        {/* <Route path="/warehousesId" element={<WarehouseDetailsPage />} /> */}
                        <Route path="/:warehouseId/edit" element={<WarehouseEditPage />} />
                        <Route path="/warehouses/:warehouseId/delete" element={<WarehouseDelete />} />
                        {/* <Route path="/add" element={<WarehouseAddPage />} />
                        <Route path="/inventory" element={<InventoryPage />} />
                        <Route path="/inventory/:itemId" element={<ItemPage />} />
                        <Route path="/inventory/:itemId/edit" element={<ItemEditPage />} />
                        <Route path="/inventory/add" element={<ItemAddPage />} />
                        <Route path="*" element={<NotFoundPage />} />  */}
                    </Routes>
                    {/* <Footer /> */}
                </BrowserRouter>
            </>
        );
    }

export default App;
