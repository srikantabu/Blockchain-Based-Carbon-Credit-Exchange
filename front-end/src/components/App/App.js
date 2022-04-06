import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MyNav from "../MyNav/MyNav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../Pages/Profile";
import Buyer from "../Pages/Buyer";
import Seller from "../Pages/Seller";
import BankAccount from "../Pages/BankAccount";
import Transactions from "../Pages/Transactions";
import Settings from "../Pages/Settings";
import Logout from "../Pages/Logout";

const App = () => {
  useEffect(() => {
    document.title = "BBCCX";
  }, []);
  //return <MyNav />;

  return (
    <div className="grid-container">
      <Router>
        <div className="grid-navbar">navbar</div>
        <div className="grid-sidebar">
          <Sidebar />
        </div>
        <div className="grid-main">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/buyer" element={<Buyer />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/bankaccount" element={<BankAccount />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
