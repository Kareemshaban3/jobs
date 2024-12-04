/** @format */

import Header from "./ui/Layout/Header";
import Footer from "./ui/Layout/Footer";
import { Route, Routes } from "react-router-dom";
import { router } from "./router";
import { useState } from "react";
import Notifications from "./ui/Layout/Notifications";
import SidBarLogin from "./components/SidBarLogin";

function App() {
  const [showNotifications, setShowNotifications] = useState(false);

  const [showSidBarLogin, setShowSidBarLogin] = useState(false);
  return (
    <>
      {showSidBarLogin ? (
        <SidBarLogin setShowSidBarLogin={setShowSidBarLogin} />
      ) : (
        <></>
      )}
      {showNotifications ? <Notifications /> : <></>}
      <Header
        setShowSidBarLogin={setShowSidBarLogin}
        setShowNotifications={setShowNotifications}
      />
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
