import { useNavigate } from "react-router-dom";
import Button from "../elements/Button";

const Topbar = () => {
  // For Redirect
  const navigate = useNavigate();

  // Function to send request to api logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  // Get username from local
  const username = localStorage.getItem("username");

  return (
    <nav className="w-full max-w-screen-xl justify-end p-5 flex items-center gap-3">
      <p>Selamat Datang, {username}</p>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </nav>
  );
};

export default Topbar;
