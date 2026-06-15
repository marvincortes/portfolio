function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-500">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
        </div>

        <div className="text-green-600">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;