import { useRoutes, BrowserRouter } from "react-router-dom";
import { ContextProvider } from "../../Components/utils/global.context";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Detail from "../Detail/Detail";
import Favs from "../Favs/Favs";
import NotFound from "../NotFound/NotFound";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import "./App.css";

const AppRoutes = () => {
  let router = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    { path: "/detail/:id", element: <Detail /> },
    { path: "/favs", element: <Favs /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return router;
};

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
