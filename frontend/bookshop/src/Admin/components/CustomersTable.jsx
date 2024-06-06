import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/CustomersTable.css'; // Import CSS file for styling

const CustomersTable = () => {
  const [users, setUsers] = useState([]);
  const jwt = localStorage.getItem("jwt");

  const fetchData = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      const response = await axios.get(
        `http://localhost:5454/api/users/profile`,
        config
      );
      setUsers([response.data]);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='customers-table'>
      <h1>All Customers List</h1>
      <div className="table-header">
        <p>ID</p>
        <p>First Name</p>
        <p>Last Name</p>
        <p>Email</p>
      </div>
      <div className="table-body">
        <hr />
        {!!users && users.map((user, index) => (
          <React.Fragment key={index}>
            <div className="table-row">
              <p>{user.id}</p>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CustomersTable;
