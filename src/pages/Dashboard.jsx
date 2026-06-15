import StatCard from "../components/StatCard";
import toast, { Toaster } from "react-hot-toast";
import {
  Wheat,
  Flower2,
  TrendingUp,
  CannabisOff,
  Eye 
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { getDashboard } from "../services/dashboardService";

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);
  const didFetch = useRef(false);

  useEffect(() => {

    if (didFetch.current) return;
        didFetch.current = true;

  const load = async () => {
    try {
      const data = await getDashboard();
      setDashboard(data);
    } catch (err) {
      console.error(err);
    }
  };

  load();
}, []);

if (!dashboard || !dashboard.farms) {
    return <div>Loading...</div>;
}

  return (
    <>
                    <div className="overflow-x-auto hidden md:block bg-white rounded-xl shadow-sm p-6">
    <table className="min-w-full text-sm text-left">

        <thead className="bg-gray-100 border-b text-gray-700">
            <tr>
                <th className="px-4 py-3">Farm</th>
                <th className="px-4 py-3">Quantity (pcs)</th>
                <th className="px-4 py-3">Has Fruit</th>
                <th className="px-4 py-3">No Fruit</th>
                <th className="px-4 py-3">Action</th>
            </tr>
        </thead>

        <tbody>
            {dashboard.farms.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 font-semibold mb-4">
                    <td className="px-4 py-3">{item.name.toUpperCase()}</td>
                    <td className="px-4 py-3">{item.quantity}</td>
                    <td className="px-4 py-3">{item.has_fruit }</td>
                    <td className="px-4 py-3">{item.no_fruit }</td>
                    <td className="px-4 py-3 text-blue-600">
                          <Link to={`/farm/${item.id}`}>
                            <Eye />
                          </Link>
                    </td>
                </tr>
            ))}
        </tbody>

    </table>
</div>

<div className="md:hidden space-y-3 p-4">
    {dashboard?.farms?.map((item) => (
        <div
            key={item.id}
            className="relative bg-white rounded-xl shadow-sm p-4 border"
        >
            {/* TOP RIGHT ICON */}
            <div className="absolute top-2 right-2 mr-10 mt-3">
                <Eye />
            </div>
            <div className="relative">
              <p className="flex items-center gap-2 font-semibold text-gray-700">
                <Wheat className="text-green-600" />
                <span>{item.name?.toUpperCase()}</span>
              </p>
            </div>

            <div className="mt-2 text-sm space-y-1">
                <p>
                    <span className="font-medium text-1xl">Quantity:</span>{" "}
                    <span className=" font-medium text-3xl ml-5">{item.quantity}</span>
                </p>

                <p>
                    <span className="font-medium text-1xl">Has Fruit:</span>{" "}
                    <span className=" font-medium text-2xl ml-5">{item.has_fruit }</span>
                </p>

                <p>
                    <span className="font-medium text-1xl">No Fruit:</span>{" "}
                    <span className=" font-medium text-2xl ml-5">{item.no_fruit }</span>
                </p>
            </div>
        </div>
    ))}
</div>


        {/* <StatCard
          title="Latest Pieces"
          value="3,000"
          icon={<TrendingUp  size={40} />}
        /> */}

      <div className="grid lg:grid-cols-2 gap-6 mt-5">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4">
            Recent Activities
          </h2>

          <ul className="space-y-3">
            <li>🌾 Harvested Crops </li>
          </ul>
        </div>

        {/* <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4">
            Inventory Alerts
          </h2>

          <ul className="space-y-3">
            <li className="text-red-500">
              Fertilizer running low
            </li>

            <li className="text-yellow-500">
              Animal feed below threshold
            </li>

            <li className="text-orange-500">
              Pesticide expiring soon
            </li>
          </ul>
        </div> */}
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

export default Dashboard;