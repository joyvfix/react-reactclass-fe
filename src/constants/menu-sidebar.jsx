import { LuLayoutDashboard } from "react-icons/lu";
import { MdAddCircleOutline } from "react-icons/md";

export const menuItem = [
  {
    path: "/",
    name: "Dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    path: "/create",
    name: "Add Food",
    icon: <MdAddCircleOutline />,
  },
];
