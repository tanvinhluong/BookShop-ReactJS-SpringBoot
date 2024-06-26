import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
import cross_icon from '../../customer/components/assets/cross_icon.png'
import './CSS/ListProduct.css'
import { API_BASE_URL } from '../../config/apiConfig'

const ProductsTable = () => {
  const [results, setResults] = useState([])
  const navigate = useNavigate()
  const jwt = localStorage.getItem('jwt')
  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${jwt}` },
        }
        const response = await axios.get(
          `${API_BASE_URL}/api/products?color=&minPrice=0&maxPrice=1000000&minDiscount=0&category=all_products&stock=null&sort=price_low&pageNumber=0&pageSize=10`,
          config
        )
        setResults(response.data.content)
        console.log(response.data.content)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [jwt])

  const handleDelete = async (productId) => {
    const conFirmDelete = window.confirm("Bạn có muốn xóa không?")
    if (conFirmDelete) {
      try {
        const config = {
          headers: { Authorization: `Bearer ${jwt}` },
        }
        await axios.delete(
          `${API_BASE_URL}/api/admin/products/${productId}/delete`,
          config
        )
        setResults(results.filter((product) => product.id !== productId))
      } catch (error) {
        console.error('Error deleting product:', error)
      }
    }
    
  }

  const handleEdit = (productId) => {
    navigate(`/admin/products/edit/${productId}`)
  }

  return (
    <div className="list-product">
      {location.search.includes('message=edit_success') && (
        <div className="success-message">Edit successful!</div>
      )}
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Brand</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
        <p>Update</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {!!results &&
          results.map((result, index) => (
            <React.Fragment key={index}>
              <div className="listproduct-format-main listproduct-format">
                <img
                  src={result.imageUrl}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{result.brand}</p>
                <p>{result.title}</p>
                <p>{result.price}</p>
                <p>{result.quantity}</p>
                <img
                  onClick={() => handleDelete(result.id)}
                  src={cross_icon}
                  alt=""
                  className="listproduct-remove-icon"
                  data-id = {result.id}
                />
                <button onClick={() => handleEdit(result.id)}>EDIT</button>
              </div>
              <hr />
            </React.Fragment>
          ))}
      </div>
    </div>
  )
}

export default ProductsTable
