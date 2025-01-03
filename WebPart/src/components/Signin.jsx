import React from 'react';
import NavBar from './NavBar'; // Adjust the import path as necessary

const Signin = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col items-center">
        <input
          className="input input-bordered mb-2 w-96"
          type="text"
          placeholder="Name"
        />
        <input
          className="input input-bordered mb-2 w-96"
          type="text"
          placeholder="Surname"
        />
        <input
          className="input input-bordered mb-2 w-96"
          type="email"
          placeholder="Email"
        />
        <input
          className="input input-bordered mb-2 w-96"
          type="password"
          placeholder="Password"
        />
        <button
          className="btn btn-primary w-96"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </>
  );
}

export default Signin;
