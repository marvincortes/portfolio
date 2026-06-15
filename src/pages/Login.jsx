
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import toast,{ Toaster } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // 🚫 prevent double click
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/farm/login/", {
        method: "POST",
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful 🚀");

        localStorage.setItem("token", "your_token_here");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", formData.username);

        window.dispatchEvent(new Event("storage"));

        navigate("/dashboard", { replace: true });
      } else {
        toast.error(data.error || "Invalid credentials");
      }
    } catch (error) {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">

        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h1>

          <form className="space-y-4" onSubmit={handleLogin}>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
            />

            {/* <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Login
            </button> */}

            <button
                type="submit"
                disabled={loading}
                className={`w-full text-white font-semibold py-3 rounded-lg transition duration-300 
                    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
                `}
                >
                {loading ? "Logging in..." : "Login"}
                </button>

          </form>

          {/* <p className="text-center text-gray-500 text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p> */}

        </div>
      </div>

      <Toaster
            position="top-center"
            toastOptions={{
              success: {
                style: {
                  background: "#22c55e",
                  color: "white",
                },
              },
              error: {
                style: {
                  background: "#ef4444",
                  color: "white",
                },
              },
            }}
          />

    </>
  );
}

export default Login;