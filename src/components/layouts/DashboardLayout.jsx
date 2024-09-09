import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../fragments/Sidebar";
import { useEffect } from "react";
import Topbar from "../fragments/Topbar";

const DashboardLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login");
    }
  }, []);
  return (
    <main className="flex gap-5">
      <aside className="w-[300px] max-w-[300px]">
        <Sidebar />
      </aside>
      <main className="flex-1 flex flex-col items-center ">
        <Topbar />
        <div className="w-full max-w-screen-xl py-5">
          <Outlet />
        </div>
      </main>
    </main>
  );
};

export default DashboardLayout;
