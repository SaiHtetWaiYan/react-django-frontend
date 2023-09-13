import React, { useContext } from "react";
import AuthContext from "../utils/AuthContext";
import { Link } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";
const LoginPage = () => {
  let { loginUser, errorMessage, clearErrorMessage } = useContext(AuthContext);
  const clearMsg = () => {
    clearErrorMessage();
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col">
          <div className="absolute top-2 right-3 m-2">
            <DarkModeToggle />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold">Login now!</h1>
          </div>

          <div className="card w-96 shadow-2xl bg-base-100">
            <div className="card-body">
              {errorMessage && errorMessage.detail && (
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {errorMessage.detail}
                  </span>
                </label>
              )}
              <form onSubmit={loginUser}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    className="input input-bordered"
                  />
                  {errorMessage && errorMessage.email && (
                    <label className="label">
                      <span className="label-text-alt text-red-600">
                        {errorMessage.email}
                      </span>
                    </label>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errorMessage && errorMessage.password && (
                    <label className="label">
                      <span className="label-text-alt text-red-600">
                        {errorMessage.password}
                      </span>
                    </label>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                    <Link
                      onClick={clearMsg}
                      to="/register"
                      className="label-text-alt link link-hover text-blue-400"
                    >
                      Register
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
