// src/components/AuthGuard.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../../State/Auth/Action";

const AuthGuard = ({ children }) => {
  const { user, jwt } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt && (!user || user.role !== "admin")) {
      dispatch(logout());
    }
  }, [user, jwt, dispatch]);

  if (!jwt || (user && user.role !== "admin")) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuard;
