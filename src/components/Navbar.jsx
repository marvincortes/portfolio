import { Menu, Bell, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

 
function Navbar({ openMenu }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [username, setUsername] = useState("");
      const navigate = useNavigate();
    
      const checkAuth = () => {
        const status = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(status === "true");
    
        const user = localStorage.getItem("username");
        setUsername(user || "");
      };
    
      useEffect(() => {
        checkAuth();
    
        window.addEventListener("storage", checkAuth);
    
        return () => {
          window.removeEventListener("storage", checkAuth);
        };
      }, []);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");

        setIsLoggedIn(false);
        setUsername("");

        toast.success("Logged out 🚀");

        console.log("logout");

        window.dispatchEvent(new Event("storage"));

        navigate("/login");
    };

  return (
    <header className="bg-white shadow-sm px-4 py-3 flex justify-between items-center ">
      
      {/* Mobile menu button */}
      <button
        onClick={openMenu}
        className="md:hidden"
      >
        <Menu />
      </button>

      <h2 className="text-lg font-semibold">
        Owner/Tenant
      </h2>

      <div className="flex items-center gap-4">
        {/* <Bell /> */}
        {/* <User /> */}

        <span className="text-green-600 font-semibold">
            👋 {username}
            </span>
         {/* <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Logout
            </button> */}

            <button 
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 btn btn-danger"
                aria-current="page" 
            >
            Logout

            </button>
      </div>
    </header>
  );
}

export default Navbar;