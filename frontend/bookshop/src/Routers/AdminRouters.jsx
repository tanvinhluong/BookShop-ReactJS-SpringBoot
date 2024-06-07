import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../Admin/Admin";
import AuthGuard from "../common/guard/AuthGuard";

const AdminRouters = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            <AuthGuard>
              <Admin />
            </AuthGuard>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AdminRouters;
