import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-900 text-white z-50 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar closeMenu={() => setOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar openMenu={() => setOpen(true)} />
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;