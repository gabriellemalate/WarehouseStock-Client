import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import InventoryPage from "./pages/InventoryPage/InventoryPage"
import Header from './components/Header/Header';
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import WarehouseEditPage from './pages/WarehouseEditPage/WarehouseEditPage';
import WarehouseAddPage from './pages/WarehouseAddPage/WarehouseAddPage';
import WarehouseDelete from './components/WarehouseDelete/WarehouseDelete';
import Footer from "./components/Footer/Footer";
import './App.scss';

function App() {

    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);

    const openDeleteModal = (warehouseId) => {
        setSelectedWarehouseId(warehouseId);
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
        setSelectedWarehouseId(null);
    };
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/inventory" element={<InventoryPage />} />
                    <Route path="/warehouse" element={<WarehouseListPage />} />
                    <Route path="/warehouse/add" element={<WarehouseAddPage />} />
                    <Route path="/warehouse/delete" element={<WarehouseListPage openDeleteModal={openDeleteModal} />} />
                    {/* <Route path="/warehouse/:warehouseId" element={<WarehousePage />} /> */}
                    <Route path="/warehouse/:warehouseId/edit" element={<WarehouseEditPage />} />
                    {/* <Route path="/inventory/:itemId" element={<ItemPage />} />
                    <Route path="/inventory/:itemId/edit" element={<ItemEditPage />} />
                    <Route path="/inventory/add" element={<ItemAddPage />} />
                    <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
                
                {isDeleteModalOpen && (
                    <WarehouseDelete 
                        warehouseId={selectedWarehouseId} 
                        onClose={closeDeleteModal}
                    />
                )}

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
