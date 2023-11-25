import { Suspense, useState } from "react";
import Home from "./Pages/Home/Index";
import User from "./Pages/User/Index";
import Navbar from "./components/navbar";
import Log from "./Pages/login/index.jsx";
import Sign from "./Pages/signin/index.jsx";
import EditPage from "./components/editpage";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import "./assets/Fonts/fontawesome-free-6.4.0-web/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Feature.css";
import "./assets/css/nav.css";
import "./assets/css/chart.css";
import "./assets/css/user.css";
import "./assets/css/form.css";
import "./assets/css/notfound.css";
import { Toaster } from "react-hot-toast";

import "./App.css";

function App() {
  const admin = useSelector((state) => state.log_control.admin);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Toaster />
      <Suspense>
        {admin && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/user/:id" element={<EditPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        )}
        {!admin && (
          <>
            <Routes>
              <Route path="/" element={<Log />} />
              <Route path="/sign" element={<Sign />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        )}
      </Suspense>
    </>
  );
}

export default App;
