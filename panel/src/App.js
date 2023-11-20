import {Suspense, useState} from "react";
import Home from "./Pages/Home/Index"
import User from "./Pages/User/Index"
import Navbar from "./components/navbar"
import Log from "./Pages/login/index.jsx";
import Sign from "./Pages/signin/index.jsx";
import EditPage from "./components/editpage";
import NotFound from "./components/NotFound"
import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Feature.css"
import "./assets/css/nav.css";
import "./assets/css/chart.css";
import "./assets/css/user.css";
import "./assets/css/form.css";
import "./assets/css/notfound.css";

import './App.css';

function App() {

  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <>
      <Suspense>
        <Navbar />
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<EditPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
