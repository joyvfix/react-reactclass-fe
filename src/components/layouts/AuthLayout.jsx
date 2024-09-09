import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="max-w-xl w-full p-5 flex flex-col gap-3">
        <h2 className="text-teal-500 font-bold">
          {pathname == "/auth/login" ? "Welcome Back" : "Create Account"}
        </h2>
        <small>
          {pathname == "/auth/login"
            ? "We are exited to have you back,can't wait to see what you've been up to since last logged in"
            : "Sign up now and start exploring all that out app has to offer.We're exited to welcome you to our community !"}
        </small>
        <Outlet />

        {pathname == "/auth/login" ? (
          <small className="text-center">
            Dont have an account ?{" "}
            <Link className="underline" to={"/auth/register"}>
              Register{" "}
            </Link>
          </small>
        ) : (
          <small className="text-center">
            Have an account ?{" "}
            <Link className="underline" to={"/auth/login"}>
              Login
            </Link>
          </small>
        )}
      </div>
    </main>
  );
};

export default AuthLayout;
