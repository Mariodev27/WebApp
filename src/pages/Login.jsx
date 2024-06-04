import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config.js";
import { toast } from "react-toastify";
import { authContext } from "../context/authContext.jsx";
import HashLoader from "react-spinners/HashLoader.js";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async event => {
  event.preventDefault();
  setLoading(true);
  try {
    // Comprueba si el usuario es "admin" y la contraseña es "admin"
    if (formData.email === "admin@gmail.com" && formData.password === "admin") {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: { name: "Admin" },
          token: "admin_token",
          role: "admin",
        },
      });
      setLoading(false);
      toast.success("Inicio de sesión exitoso");
      navigate("/dashboard/admin-account"); // Cambia esto a la ruta del dashboard del administrador
    } else {
      throw new Error("Credenciales incorrectas");
    }
  } catch (err) {
    toast.error(err.message);
    setLoading(false);
  }
};

  // submit handler no error

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome </span>Back 
        </h3>
        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter you Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-text"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter you Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-text"
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[16px] leading-[30px] rounded-lg px-4 py-3"
            >
              {loading ? <HashLoader size={25} color="#fff" /> : "Login"}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don't have an account?
            <Link to="/register" className="text-primaryColor font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
