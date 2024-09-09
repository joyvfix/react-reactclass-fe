import { useState } from "react";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // Payload Login Form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // For redirecting
  const navigate = useNavigate();

  // Function to handle send request to login api
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "1234567890");
    localStorage.setItem("username", "mamang");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <Input
          label="Email"
          required={true}
          value={email}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          required={true}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button className="py-3 text-lg font-semibold">Login</Button>
    </form>
  );
};

export default LoginPage;
