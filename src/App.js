import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import InventoryPage from "./pages/InventoryPage/InventoryPage"
import Header from './components/Header/Header';
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import WarehouseEditPage from './pages/WarehouseEditPage/WarehouseEditPage';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
import WarehouseAddPage from './pages/WarehouseAddPage/WarehouseAddPage';
import WarehouseDelete from './components/WarehouseDelete/WarehouseDelete';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';
import Footer from "./components/Footer/Footer";
import './App.scss';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/inventory" element={<InventoryPage />} />
                    <Route path="/warehouse" element={<WarehouseListPage />} />
                    <Route path="/warehouse/add" element={<WarehouseAddPage />} />
                    <Route path="/warehouse/:warehouseId" element={<WarehouseDetailsPage />} />
                    <Route path="/warehouse/:warehouseId/edit" element={<WarehouseEditPage />} />
                    <Route path="/warehouse/:warehouseId/delete" element={<WarehouseDelete />} />
                    <Route path="/inventory/:itemId" element={<InventoryDetails />} />
                    {/* <Route path="/inventory/:itemId/edit" element={<ItemEditPage />} /> */}
                    <Route path="/inventory/add" element={<InventoryAdd />} />
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
