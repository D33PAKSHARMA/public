import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { userLogin } from "../../../store/authAction";

const authAxios = axios.create({
  baseURL: "http://localhost:3004",
});

const Index = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState("");

  // const auth = useSelector((state) => state.auth);
  // console.log(auth);

  // useEffect(() => {
  //   if (auth._id) {
  //     navigate("/client/overview");
  //   }
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(
    //   userLogin({
    //     email,
    //     password,
    //   })
    // );

    // navigate("/client/overview")

    // console.log(email, password, checked);

    try {
      const res = await authAxios.post("/api/login", {
        usernameEmail: email,
        password: password,
      });
      console.log(res.data.data);
      if (res.data.status_code === 200) {
        localStorage.setItem("data", res.data.data.auth_token);
        toast.success("User Login Sucessful");
        navigate("/client/overview");
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="account-pages mt-5 mb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card bg-pattern">
              <div className="card-body p-4">
                <div className="text-center w-75 m-auto">
                  <div className="auth-logo">
                    <Link to="/client" className="logo logo-dark text-center">
                      <span className="logo-lg">
                        <img
                          src="assets/images/dark-logo.png"
                          alt="img"
                          height={80}
                        />
                      </span>
                    </Link>
                    <a
                      href="index.html"
                      className="logo logo-light text-center"
                    >
                      <span className="logo-lg">
                        <img
                          src="assets/images/dark-logo.png"
                          alt="img"
                          height={80}
                        />
                      </span>
                    </a>
                  </div>
                  <p className="text-muted mb-4 mt-3">
                    Enter your email address and password to access Client
                    Panel.
                  </p>
                </div>
                <form action="#" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="emailaddress" className="form-label">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="emailaddress"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="input-group-text" data-password="false">
                        <span className="password-eye" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="checkbox-signin"
                        defaultChecked
                        value={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-signin"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="text-center d-grid">
                    <button class="btn btn-primary" type="submit">
                      Log In
                    </button>
                    {/* <Link
                      className="btn btn-primary waves-effect waves-light"
                      to="/client/overview"
                    >
                      Log In
                    </Link> */}
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12 text-center">
                <p>
                  {" "}
                  <a href="forget-password-php" className="text-white-50 ms-1">
                    Forgot your password?
                  </a>
                </p>
                <p className="text-white-50">
                  Don't have an account?{" "}
                  <Link to="/register-client" className="text-white ms-1">
                    <b>Sign Up</b>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
