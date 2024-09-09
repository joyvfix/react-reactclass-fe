import { useState } from "react";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  // Payload Register Form
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // For redirecting
  const navigate = useNavigate();

  // Function to handle send request to register api
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/auth/login");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <Input
          label="Name"
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          value={password}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button className="py-3 text-lg font-semibold">Register</Button>
    </form>
  );
};

export default RegisterPage;
