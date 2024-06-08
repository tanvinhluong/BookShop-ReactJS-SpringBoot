import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState({});
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
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="profile-container">
      <h1>Thông tin cá nhân</h1>
      <div className="profile-header">
        <div className="profile-row">
          <p className="profile-label">First Name:</p>
          <p className="profile-value">{user.firstName}</p>
        </div>
        <div className="profile-row">
          <p className="profile-label">Last Name:</p>
          <p className="profile-value">{user.lastName}</p>
        </div>
        <div className="profile-row">
          <p className="profile-label">Email:</p>
          <p className="profile-value">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
