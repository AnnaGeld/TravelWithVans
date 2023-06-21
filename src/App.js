import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans";
import Host from "./pages/Host/Host";
import VansDetail from "./pages/VansDetail";
import "./server";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} loader={vansLoader} />
        <Route path="/vans/:id" element={<VansDetail />} />
        <Route path="/host" element={<Host />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
