// src/components/AuthGuard.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const { jwt } = useSelector((state) => state.auth);

  if (!jwt) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuard;
