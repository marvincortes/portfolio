import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Wheat,
  Warehouse,
  Users,
  BarChart3,
} from "lucide-react";

function Sidebar({ closeMenu }) {
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Crops", icon: Wheat, path: "/crops" },
    // { name: "Inventory", icon: Warehouse, path: "/inventory" },
    // { name: "Farmers", icon: Users, path: "/farmers" },
    // { name: "Reports", icon: BarChart3, path: "/reports" },
  ];

  return (
    <aside className="w-64 h-full bg-green-900 text-white p-4">
      <p className="text-2xl font-bold mb-6">🌱 Farm Admin</p>

      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={closeMenu}
            className="flex text-white items-center gap-3 p-3 rounded-lg hover:bg-violet-800"
          >
            <item.icon size={20} />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;