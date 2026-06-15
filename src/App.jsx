import Hero from "./components/HeroSection";
import Message from "./components/PortfolioMessages";
import Experience from "./components/ExperienceSection";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./layouts/AdminLayout";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";


import Login from "./pages/Login";
// import login from "./pages/Login";

import toast, { Toaster } from "react-hot-toast";
// import NavbarLogin from "./components/NavbarLogin";
import Crops from "./pages/Crops";
import FarmDetail from "./pages/FarmDetail";



function Home() {
  return (
    <>
    <div className="bg-green-100">
      <Hero />
      <Message />
      <Experience />
      <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Page */}
        <Route path="/" element={<Home />} />

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Admin Dashboard */}
        <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/crops" element={<Crops />} />


          <Route path="/farm/:id" element={<FarmDetail />} />
          
          
          {/* <Route path="/FarmDetail" element={<FarmDetail />} /> */}
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>

    
     
          
  );
}

export default App;