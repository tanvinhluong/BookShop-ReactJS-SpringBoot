import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../State/Products/Action";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  console.log(products);

  useEffect(() => {
    const data = {
      colors: null,
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      category: "mens_kurta",
      stock: null,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
    };
    dispatch(findProducts(data));
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*{rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}*/}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
