import { useState } from "react";
import Layout from "../components/layout";
import { onLogin } from "../api/auth";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/authSlice"
import "./Login.css";
import { useHistory } from 'react-router-dom';



const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await onLogin(values);
      dispatch(authenticateUser());

      localStorage.setItem("isAuth", "true");
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <Layout>
      <div className="container mt-5 dark-mode">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=1480&t=st=1702058028~exp=1702058628~hmac=b8515222438f2ae4217a50dbedc934d47e54d0363f08543e5d056e0cf6051280"// Replace with the actual path to your image
              alt="Login Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 col-sm-12 mt-3">
            <form onSubmit={(e) => onSubmit(e)}>
              <h1>Login</h1>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={values.email}
                  placeholder="test@gmail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="password"
                  value={values.password}
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Please enter your password"
                  required
                />
              </div>

              <div style={{ color: "red", margin: "10px 0" }}>{error}</div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
