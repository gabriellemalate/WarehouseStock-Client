import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehouseListPage />} />
          <Route path="/:warehouseId" element={<WarehouseDetailsPage />} />
          {/*<Route path="/:warehouseId/edit" element={<WarehouseEditPage />} />
                        <Route path="/add" element={<WarehouseAddPage />} />
                        <Route path="/inventory" element={<InventoryPage />} />
                        <Route path="/inventory/:itemId" element={<ItemPage />} />
                        <Route path="/inventory/:itemId/edit" element={<ItemEditPage />} />
                        <Route path="/inventory/add" element={<ItemAddPage />} />
                        <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        {/* <Footer /> */}
        {/* <WarehouseDetails /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
