import "./Shop.css"
import { Nav } from "../nav/Nav";
import { Product } from "./product/product";
import { useState } from "react";

export const Shop = ({isAuthenticated, onLogOut, infoProducts, userAuth, adminLog}) => {
  const [addState, setAddState] = useState(false);
  const [modifyState, setModifyState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);

  const addProduct = () => {
    setAddState(!addState);
  };

  const modifyProduct = () => {
    setModifyState(!modifyState);
  };

  const deleteProduct = () => {
    setDeleteState(!deleteState);
  };

  return (
    <>
        <Nav isAuthenticated={isAuthenticated} onLogOut={onLogOut} userAuth={userAuth} adminLog={adminLog} />
        <section className="shop-title d-flex justify-content-center pt-4 pb-3">
            <h3 className="text-white">🔥 PRODUCTS ON FIRE 🔥</h3>
        </section>
        <section className="d-flex justify-content-center align-items-center gap-5 flex-wrap my-5">
          <Product 
          infoProducts = { infoProducts } 
          addProduct = { addState }
          modifyProduct = { modifyState }
          deleteProduct = { deleteState }
          functionAddProduct = { addProduct }
          functionModifyProduct = { modifyProduct }
          functionDeleteProduct = { deleteProduct }
          />
        </section>
        {adminLog? 
          <div className="admin-options d-flex justify-content-center w-100 mt-2 py-3">
            <button onClick={addProduct} className="admin-buttons mx-4 px-3 py-2 rounded-5">ADD PRODUCT</button>
            <button onClick={modifyProduct} className="admin-buttons mx-4 px-3 py-2 rounded-5">EDIT PRODUCT</button>
            <button onClick={deleteProduct} className="admin-buttons mx-4 px-3 py-2 rounded-5">DELETE PRODUCT</button>
          </div>
        : ""}
    </>
  )
}
