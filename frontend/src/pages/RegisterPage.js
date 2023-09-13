import React, { useContext } from "react";
import AuthContext from "../utils/AuthContext";
import { Link } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";
const RegisterPage = () => {
  let { registerUser, errorMessage, clearErrorMessage } =
    useContext(AuthContext);
  const clearMsg = () => {
    clearErrorMessage();
  };
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="absolute top-2 right-3 m-2">
            <DarkModeToggle />
          </div>
          <div className="text-center ">
            <h1 className="text-4xl font-bold">Register now!</h1>
          </div>

          <div className="card w-96 shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={registerUser}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errorMessage && errorMessage.first_name && (
                    <label className="label">
                      <span className="label-text-alt text-red-600">
                        {errorMessage.first_name}
                      </span>
                    </label>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errorMessage && errorMessage.last_name && (
                    <label className="label">
                      <span className="label-text-alt text-red-600">
                        {errorMessage.last_name}
                      </span>
                    </label>
                  )}
                </div>
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
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    className="input input-bordered"
                  />
                  {errorMessage && errorMessage.confirm_password && (
                    <label className="label">
                      <span className="label-text-alt text-red-600">
                        {errorMessage.confirm_password}
                      </span>
                    </label>
                  )}
                  <label className="label">
                    <Link
                      onClick={clearMsg}
                      to="/login"
                      className="label-text-alt link link-hover text-blue-400"
                    >
                      Login
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

export default RegisterPage;
