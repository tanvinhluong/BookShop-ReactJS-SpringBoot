import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../Data/mens_kurta";
import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [category, setCategory] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const jwt = localStorage.getItem("jwt");

  const handleComboBoxChange = (event) => {
    const newValue = event.target.value;
    const newIndex = event.target.selectedIndex;

    setSelectedValue(newValue);
    setSelectedIndex(newIndex);

    fecthFilterProduct(newValue);
  };

  const fecthFilterProduct = async (categoryName) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      const results = await axios.get(
        `http://localhost:5454/api/products?color=&minPrice=0&maxPrice=1000000&minDiscount=0&category=&stock=null&sort=null&pageNumber=0&pageSize=100`,
        config
      );

      setProductsFilter(
        results.data.content.filter(
          (product) => product.category.parentCategory.name === categoryName
        )
      );
      setCategoryName(categoryName);
      console.log(
        results.data.content.filter(
          (product) => product.category.parentCategory.name === categoryName
        )
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fecthCategory = async (category) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      const results = await axios.get(
        `http://localhost:5454/api/category/`,
        config
      );
      results.data.filter((category) => category.level === 2);
      setCategory(
        results.data
          .filter((category) => category.level === 2)
          .map((item) => item.name)
      );
      // console.log(
      //   results.data
      //     .filter((category) => category.level === 2)
      //     .map((item) => item.name)
      // );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fecthAllProduct = async (category) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      const results = await axios.get(
        `http://localhost:5454/api/products?color=&minPrice=0&maxPrice=10000000&minDiscount=0&category=all_products&stock=&sort=&pageNumber=0&pageSize=100`,
        config
      );

      setProducts(results.data.content);
      // console.log(results.data.content);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fecthCategory();
    fecthAllProduct();
  }, []);

  return (
    <div>
      <MainCarousel />
      <div
        className="category-select"
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: "1.5rem",
          backgroundColor: "pink",
        }}
      >
        <div>Chọn Danh Mục: </div>
        <select value={category[selectedIndex]} onChange={handleComboBoxChange}>
          {/* Đổ dữ liệu từ mảng vào combo box */}
          {category.map((option, index) => (
            <option key={"combo#" + index}>{option}</option>
          ))}
        </select>
      </div>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        {!!productsFilter.length && (
          <HomeSectionCarousel
            data={productsFilter}
            categoryName={categoryName}
          />
        )}
        <HomeSectionCarousel data={products} categoryName={"Tất cả sản phẩm"} />
      </div>
    </div>
  );
};

export default HomePage;
