import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import WarehouseAddPage from './pages/WarehouseAddPage/WarehouseAddPage';

    function App() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/warehouse" element={<WarehouseListPage />} />
                        {/* <Route path="/warehouse/:warehouseId" element={<WarehousePage />} />
                        <Route path="/warehouse/:warehouseId/edit" element={<WarehouseEditPage />} /> */}
                        <Route path="/warehouse/add" element={<WarehouseAddPage />} />
                        {/* <Route path="/inventory" element={<InventoryPage />} />
                        <Route path="/inventory/:itemId" element={<ItemPage />} />
                        <Route path="/inventory/:itemId/edit" element={<ItemEditPage />} />
                        <Route path="/inventory/add" element={<ItemAddPage />} />
                        <Route path="*" element={<NotFoundPage />} /> */}
                    </Routes>
                    {/* <Footer /> */}
                </BrowserRouter>
            </>
        );
    }

export default App;
