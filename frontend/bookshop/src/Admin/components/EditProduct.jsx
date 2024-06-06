import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './CSS/EditProduct.css';

const EditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
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

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${jwt}` },
        };
        const response = await axios.get(`http://localhost:5454/api/products/${productId}`, config);
        setProductDetails(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId, jwt]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { Authorization: `Bearer ${jwt}`, 'Content-Type': 'application/json' },
      };
      await axios.put(`http://localhost:5454/api/admin/products/${productId}/update`, productDetails, config);
      navigate('/admin/products');
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className='edit-product'>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input type="text" name="imageUrl" value={productDetails.imageUrl} onChange={handleChange} />
        </label>
        <label>
          Brand:
          <input type="text" name="brand" value={productDetails.brand} onChange={handleChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={productDetails.title} onChange={handleChange} />
        </label>
        <label>
          Color:
          <input type="text" name="color" value={productDetails.color} onChange={handleChange} />
        </label>
        <label>
          Discounted Price:
          <input type="number" name="discountedPrice" value={productDetails.discountedPrice} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={productDetails.price} onChange={handleChange} />
        </label>
        <label>
          Discount Percent:
          <input type="number" name="discountPercent" value={productDetails.discountPercent} onChange={handleChange} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={productDetails.quantity} onChange={handleChange} />
        </label>
        <label>
          Top Level Category:
          <input type="text" name="topLevelCategory" value={productDetails.topLevelCategory} onChange={handleChange} />
        </label>
        <label>
          Second Level Category:
          <input type="text" name="secondLevelCategory" value={productDetails.secondLevelCategory} onChange={handleChange} />
        </label>
        <label>
          Third Level Category:
          <input type="text" name="thirdLevelCategory" value={productDetails.thirdLevelCategory} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={productDetails.description} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProduct;
