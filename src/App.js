import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import WarehouseEditPage from './pages/WarehouseEditPage/WarehouseEditPage';
import WarehouseAddPage from './pages/WarehouseAddPage/WarehouseAddPage';
import Footer from "./components/Footer/Footer";
import './App.scss';

    function App() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Routes>
<<<<<<< HEAD
                        <Route path="/warehouse" element={<WarehouseListPage />} />
                        {/* <Route path="/warehouse/:warehouseId" element={<WarehousePage />} />
                        <Route path="/warehouse/:warehouseId/edit" element={<WarehouseEditPage />} /> */}
                        <Route path="/warehouse/add" element={<WarehouseAddPage />} />
=======
                        <Route path="/" element={<WarehouseListPage />} />
                        {/* <Route path="/:warehouseId" element={<WarehousePage />} /> */}
                        <Route path="/:warehouseId/edit" element={<WarehouseEditPage />} />
                        <Route path="/add" element={<WarehouseAddPage />} />
>>>>>>> develop
                        {/* <Route path="/inventory" element={<InventoryPage />} />
                        <Route path="/inventory/:itemId" element={<ItemPage />} />
                        <Route path="/inventory/:itemId/edit" element={<ItemEditPage />} />
                        <Route path="/inventory/add" element={<ItemAddPage />} />
                        <Route path="*" element={<NotFoundPage />} /> */}
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </>
        );
    }

export default App;
