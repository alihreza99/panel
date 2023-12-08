import react, { Suspense } from "react";
import Navbar from "./layout/navbar";
import NotFound from "./components/notFound";
import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import Error from "./components/errorBoundary";

import "./assets/Fonts/fontawesome-free-6.4.0-web/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/feature.css";
import "./assets/css/nav.css";
import "./assets/css/chart.css";
import "./assets/css/user.css";
import "./assets/css/form.css";
import "./assets/css/notfound.css";
import "./assets/css/font.css";
import "./assets/css/errorpage.css"
import "./assets/Fonts/A-Iranian-Sans/iraniansans.ttf";
import "./assets/Fonts/Vazir-Bold.ttf";
import "./assets/Fonts/Vazir-Black-FD.ttf";
import "./App.css";

const Home = react.lazy(() => import("./pages/home/index"));
const Userpage = react.lazy(() => import("./pages/user/index"));
const Editpage = react.lazy(() => import("./pages/user/editpage"));
const Log = react.lazy(() => import("./pages/login/index.jsx"));
const Sign = react.lazy(() => import("./pages/signin/index.jsx"));
const Profile = react.lazy(() => import("./layout/profile"));



function App() {
  const admin = useSelector((state) => state.auth.admin);


  return (
    <>
      <Error>
        <Suspense>
          {admin && (
            <>
              <Navbar Admin={admin} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<Userpage />} />
                <Route path="/user/:id" element={<Editpage />} />
                <Route path="/profile/:id" element={<Profile />} />
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
      </Error>
    </>
  );
}

export default App;
