import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useFetch from "../data/useFetch";
import { baseURL } from "../data/baseURL";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      // setUser("");
      setIsLoading(false);
      return;
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(baseURL + "/user/loginWithToken")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        // localStorage.removeItem("token");
        setUser(null);
        setIsLoading(false);
        // navigate("/login");
      });
  }, [navigate]);

  const login = (username, password) => {
    setIsLoading(true);
    axios
      .post(baseURL + "/user/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.jwt);
        console.log(res.data);
        setUser(res.data);
        navigate("/");
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        navigate("/login");
        console.error(error);
        // toast.error(err.response?.data?.message || err.message);
      });
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
