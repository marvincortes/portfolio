export const getDashboard = async () => {
  const res = await fetch("http://localhost:8000/api/farm/dashboard", {
    credentials: "include",
  });

  console.log("Status:", res.status);

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard");
  }

  return res.json();
};