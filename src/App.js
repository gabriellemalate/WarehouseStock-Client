import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import InventoryPage from "./pages/InventoryPage/InventoryPage"
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd";
import InventoryEditPage from "./pages/InventoryEditPage/InventoryEditPage";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import WarehouseEditPage from './pages/WarehouseEditPage/WarehouseEditPage';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
import WarehouseAddPage from './pages/WarehouseAddPage/WarehouseAddPage';
import WarehouseDelete from './components/WarehouseDelete/WarehouseDelete';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';
import InventoryDelete from './components/InventoryDelete/InventoryDelete';
import Footer from "./components/Footer/Footer";
import './App.scss';

    function App() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/warehouse" element={<WarehouseListPage />} />
                        <Route path="/warehouse/add" element={<WarehouseAddPage />} />
                        <Route path="/warehouse/:warehouseId" element={<WarehouseDetailsPage />} />
                        <Route path="/warehouse/:warehouseId/edit" element={<WarehouseEditPage />} />
                        <Route path="/warehouse/:warehouseId/delete" element={<WarehouseDelete />} />
                        <Route path="/inventory" element={<InventoryPage />} />
                        <Route path="/inventory/add" element={<InventoryAdd />} />
                        <Route path="/inventory/:itemId" element={<InventoryDetails />} />
                        <Route path="/inventory/:itemId/edit" element={<InventoryEditPage />} />
                        <Route path="/inventory/:itemId/delete" element={<InventoryDelete />} />
                        {/* <Route path="*" element={<NotFoundPage />} /> */}
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </>
        );
    }

export default App;
