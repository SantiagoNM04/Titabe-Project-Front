import './Product.css';
import { useState } from 'react';
import axios from 'axios';

export const Product = ({ infoProducts, addProduct, modifyProduct, deleteProduct, functionAddProduct, functionModifyProduct, functionDeleteProduct, adminLog }) => {

    const [productData, setProductData] = useState({
        id: '',
        product: '',
        price: '',
        stock: '',
        availableStock: '',
        image: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleImageChange = (e) => {
        setProductData({ ...productData, image: e.target.files[0] });
    };

    const addProductForm = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('product', productData.product);
        formData.append('price', productData.price);
        formData.append('stock', productData.stock);
        formData.append('availableStock', productData.availableStock);
        formData.append('image', productData.image);

        try {
            const response = await axios.post(`http://localhost:4300/shop/new`, formData);
            setTimeout(() => {window.location.reload();}, 200);

        } catch (error) {
            console.error('>> Error inserting the product: ', error.message)
        }
        
    };

    const modifyProductForm = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('id', productData.id); 
        formData.append('product', productData.product);
        formData.append('price', productData.price);
        formData.append('stock', productData.stock);
        formData.append('availableStock', productData.availableStock);
        formData.append('image', productData.image);
    
        try {
            const response = await axios.put(`http://localhost:4300/shop/edit`, formData);
            setTimeout(() => { window.location.reload(); }, 200);

        } catch (error) {
            console.error('>> Error updating the product: ', error.message);
        }
    };


    const deleteProductForm = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(`http://localhost:4300/shop/delete/${productData.id}`);
            setTimeout(() => { window.location.reload(); }, 200);

        } catch (error) {
            console.error('>> Error deleting the product: ', error.message);
        }
    };

  return (
    <>
        {Array.isArray(infoProducts) && infoProducts.map((product) => (
              <div key={product.id} className="container-product d-flex flex-column justify-content-center align-items-center rounded-5 mt-5">
                  <div className='d-flex justify-content-center align-items-start h-100 w-100 text-center'>
                      <img className="img-product rounded-5 text-white " src={product.ruta_imagen} alt={product.product} />
                  </div>
                  <div className="title-product d-flex w-100 justify-content-center align-items-center">
                      <h3 className="mt-1 mb-1 text-white text-uppercase text-center">{product.product}</h3>
                  </div>
                  <div className="text-white d-flex flex-column justify-content-center align-items-center mt-2">
                      <p className="text-price fs-4">${product.price}</p>
                  </div>
                  
                  {product.availableStock || product.stock !== 0 ? 
                  <div className="text-white d-flex flex-column justify-content-center align-items-center">
                      <p className="text-price fs-4">Stock: {product.stock}</p>
                  </div>
                  : 
                  <div className='text-noStock text-white bg-danger text-center mb-4'>
                      <p className='mb-0 fs-4'>OUT OF STOCK</p>
                  </div>}
                  <button className="button-product mb-4 border-0 rounded-5 px-4 py-2">ADD TO CART</button>
                  <div className='text-danger d-flex w-100 justify-content-center align-items-end'>
                    {adminLog? <p>ID: {product.id}</p> : ""} 
                  </div>
              </div>
        ))}
        {/*FORM ADD PRODUCT*/} 
        {addProduct? 
        <form className="container-product d-flex flex-column justify-content-center align-items-center rounded-5">
            <p className='text-white text-center'>CREATE A NEW PRODUCT CARD</p>
            <div className='d-flex w-100 justify-content-center align-items-center'>
                <label className="me-2"></label>
                <input className="text-white" name='image' type="file" accept="/image" required onChange={handleImageChange}/>
            </div>
            <div className="title-product d-flex w-100 justify-content-center align-items-center mt-3 py-2">
                <label className="me-2"></label>
                <input id="title-input" className="input-newProduct bg-transparent rounded-4 text-white text-center" name='product' placeholder="INSERT PRODUCT NAME" type="text" required onChange={handleInputChange} value={productData.product}/>
            </div>
            <div className="d-flex justify-content-center justify-content-center align-items-center mt-3 w-75">
                <label className="me-2"></label>
                <input className="input-newProduct bg-transparent rounded-4 w-100 text-center" name='price' placeholder="Insert the price" type="text" required onChange={handleInputChange} value={productData.price}/>
            </div>    
            <div className="d-flex justify-content-center justify-content-center align-items-center mt-4 mb-4 w-75">
                <label className="me-2"></label>
                <input className="input-newProduct bg-transparent rounded-4 w-100 text-center" name='stock' placeholder="Insert stock" type="text" required onChange={handleInputChange} value={productData.stock}/>
            </div>
            <div className="d-flex justify-content-center justify-content-center align-items-center mb-4 w-75">
                <label className="me-2"></label>
                <input className="input-newProduct bg-transparent rounded-4 w-100 text-center" name='availableStock' placeholder="Stock? 1 (Yes) - 0 (No)" type="text" required onChange={handleInputChange} value={productData.availableStock}/>
            </div>
            <div className='d-flex gap-3'>
                <button onClick={(event) => {addProductForm(event)}} className="button-product mb-4 border-0 rounded-5 px-4 py-2">CREATE</button>
                <button onClick={functionAddProduct} className="button-product mb-4 border-0 rounded-5 px-4 py-2">CANCEL</button>
            </div>   
        </form>
        : ""}

        {/*FORM EDIT PRODUCT*/}
        {modifyProduct? 
        <form className="container-product d-flex flex-column justify-content-center align-items-center rounded-5">
            <p className='text-white text-center'>EDIT THE DATA FROM A PRODUCT CARD</p>
            <div className='d-flex w-100 justify-content-center align-items-center'>
                <label className="me-2"></label>
                <input className="text-white" name='image' type="file" accept="/image" required onChange={handleImageChange}/>
            </div>
            <div className="d-flex justify-content-center justify-content-center align-items-center mt-4 mb-4 w-75">
                <label className="me-2"></label>
                <input className="input-newProduct bg-transparent rounded-4 w-100 text-center py-1" name='id' placeholder="Insert ID" type="text" required onChange={handleInputChange} value={productData.id}/>
            </div>
            <div className="title-product d-flex w-100 justify-content-center align-items-center py-2">
                <label className="me-2"></label>
                <input id="title-input"className="input-newProduct bg-transparent rounded-4 text-white text-center" name='product' placeholder="INSERT PRODUCT NAME" type="text" required onChange={handleInputChange} value={productData.product}/>
            </div>
            <div className="d-flex justify-content-center justify-content-center align-items-center mt-3 w-75">
                <label className="me-2"></label>
                <input className="input-newProduct bg-transparent rounded-4 w-100 text-center py-1" name='price' placeholder="Insert PRICE" type="text" required onChange={handleInputChange} value={productData.price}/>
            </div>    
            <div className="d-flex justify-content-center justify-content-center align-items-center mt-4 mb-4 w-75">
                <label className="me-2"></label>
                <input className="input-newProduct bg-transparent rounded-4 w-100 text-center py-1" name='stock' placeholder="Insert STOCK" type="text" required onChange={handleInputChange} value={productData.stock}/>
            </div>
            <div className="d-flex justify-content-center justify-content-center align-items-center mb-4 w-75">
                <label className="me-2"></label>
                <input className="input-newProduct bg-transparent rounded-4 w-100 text-center py-1" name='availableStock' placeholder="AVAILABLE? 1 (Yes) - 0 (No)" type="text" required onChange={handleInputChange} value={productData.availableStock}/>
            </div>
            <div className='d-flex gap-3'>
                <button onClick={(event) => {modifyProductForm(event)}} className="button-product mb-4 border-0 rounded-5 px-4 py-2">UPDATE</button>
                <button onClick={functionModifyProduct} className="button-product mb-4 border-0 rounded-5 px-4 py-2">CANCEL</button>
            </div>   
        </form>
        : ""}
        {/*FORM DELETE PRODUCT*/}
        {deleteProduct? 
        <form className="container-product d-flex flex-column justify-content-center align-items-center rounded-5">
            <p className='text-danger text-center'>DELETE A PRODUCT FROM THE DATABASE</p>
            
            <div className="d-flex justify-content-center justify-content-center align-items-center mt-4 mb-4 w-75">
                <label className="me-2"></label>
                <input className="input-newProduct bg-transparent rounded-4 w-100 text-center py-1" name='id' placeholder="Insert ID" type="text" required onChange={handleInputChange} value={productData.id}/>
            </div>
            <div className='d-flex gap-3'>
                <button onClick={(event) => {deleteProductForm(event)}} className="button-product mb-4 border-0 rounded-5 px-4 py-2">DELETE</button>
                <button onClick={functionDeleteProduct} className="button-product mb-4 border-0 rounded-5 px-4 py-2">CANCEL</button>
            </div>   
        </form>
        : ""}
    </>
  )
}
