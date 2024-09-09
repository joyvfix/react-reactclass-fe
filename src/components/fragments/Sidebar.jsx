import { Link, useLocation } from "react-router-dom";
import { menuItem } from "../../constants/menu-sidebar";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <nav
      className={`flex flex-col gap-3 h-screen sticky top-0 bg-teal-500 w-full p-5`}
    >
      {menuItem.map((menu, idx) => {
        const activeTab =
          pathname == menu.path ? "bg-white text-teal-500" : "text-white";
        return (
          <Link
            className={`flex p-3 ${activeTab} rounded-md gap-3 items-center font-medium`}
            to={menu.path}
            key={idx}
          >
            <i className="text-2xl">{menu.icon}</i>
            {menu.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Sidebar;
