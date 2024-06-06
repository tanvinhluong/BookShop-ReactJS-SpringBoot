import React, { useState } from 'react';
import upload_area from '../../customer/components/assets/upload_area.svg';
import './CSS/AddProduct.css';
import axios from 'axios';

const CreateProductForm = () => {
  const [imageUrl, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: 0,
    price: 0,
    discountPercent: 0,
    quantity: 0,
    topLevelCategory: "",
    secondLevelCategory: "Giấy",
    thirdLevelCategory: "all_products",
    description: ""
  });

  const [message, setMessage] = useState(null);

  const jwt = localStorage.getItem("jwt");

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setProductDetails({ ...productDetails, imageUrl: URL.createObjectURL(file) });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const addProduct = async () => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${jwt}`
        }
      };
      const response = await axios.post('http://localhost:5454/api/admin/products/', productDetails, config);
      console.log(response.data);
      setMessage("Product added successfully!");
    } catch (error) {
      console.error('Error adding product:', error);
      setMessage("Failed to add product.");
    }
  };

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product brand</p>
        <input value={productDetails.brand} onChange={changeHandler} type="text" name='brand' placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Title</p>
        <input value={productDetails.title} onChange={changeHandler} type="text" name='title' placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Color</p>
        <input value={productDetails.color} onChange={changeHandler} type="text" name='color' placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Discounted Price</p>
          <input value={productDetails.discountedPrice} onChange={changeHandler} type="text" name='discountedPrice' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.price} onChange={changeHandler} type="text" name='price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Discount Percent</p>
          <input value={productDetails.discountPercent} onChange={changeHandler} type="text" name='discountPercent' placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Quantity</p>
        <input value={productDetails.quantity} onChange={changeHandler} type="text" name='quantity' placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Top Level Category</p>
        <input value={productDetails.topLevelCategory} onChange={changeHandler} type="text" name='topLevelCategory' placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.secondLevelCategory} onChange={changeHandler} name="secondLevelCategory" className='add-product-selector'>
          <option value="Giấy">Giấy</option>
          <option value="Tập">Tập</option>
          <option value="Bút">Bút</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <p>Third Level Category</p>
        <input value={productDetails.thirdLevelCategory} onChange={changeHandler} type="text" name='thirdLevelCategory' placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={productDetails.imageUrl ? productDetails.imageUrl : upload_area} className='addproduct-thumbnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={addProduct} className='addproduct-btn'>ADD</button>
      {message && <div className={`message ${message.startsWith("Product added successfully") ? "success" : "error"}`}>{message}</div>}
    </div>
  );
}

export default CreateProductForm;
