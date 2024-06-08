import { CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Routes, useNavigate, Route } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from './components/CreateProductForm';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';
import AdminDashboard from './components/Dashboard';
import EditProduct from './components/EditProduct';
import OrderDetails from './components/OrderDetails';
import './components/CSS/Admin.css';

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <DashboardIcon /> },
  { name: "", path: "" }
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between"
    }} className='box'>
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className='flex h-[100vh]'>
      <CssBaseline />
      <div className='box'>
        {drawer}
      </div>
      <div className='content'>
        <Routes>
          <Route path='/' element={<AdminDashboard />} />
          <Route path='/product/create' element={<CreateProductForm />} />
          <Route path='/products' element={<ProductsTable />} />
          <Route path='/orders' element={<OrdersTable />} />
          <Route path='/customers' element={<CustomersTable />} />
          <Route path='/products/edit/:productId' element={<EditProduct />} />
          <Route path='/orders/:orderId' element={<OrderDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
