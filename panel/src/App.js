import react, { Suspense } from "react";
import Navbar from "./layout/navbar";
import NotFound from "./components/notFound";
import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import Error from "./components/errorBoundary";
import { Toaster } from "react-hot-toast";

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

const Home = react.lazy(() => import("./Pages/home/index"));
const Userpage = react.lazy(() => import("./Pages/user/index"));
const EditPage = react.lazy(() => import("./Pages/user/editpage"));
const Log = react.lazy(() => import("./Pages/login/index.jsx"));
const Sign = react.lazy(() => import("./Pages/signin/index.jsx"));
const Profile = react.lazy(() => import("./layout/profile"));



function App() {
  const admin = useSelector((state) => state.auth.admin);


  return (
    <>
      <Toaster />
      <Error>
        <Suspense>
          {admin && (
            <>
              <Navbar Admin={admin} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<Userpage />} />
                <Route path="/user/:id" element={<EditPage />} />
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
