"use client";

import React, { useEffect, useRef, useState } from "react";
import { POST } from "../services/api";
import { ROUTE_AUTH, ROUTE_USERS } from "../services/routes";

type user = {
  username: string | undefined;
  password: string | undefined;
};

const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<user>();
  const [token, setToken] = useState<string>();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await POST(ROUTE_AUTH, {
        method: "POST",
        body: JSON.stringify({
          username: user?.username,
          password: user?.password,
        }),
      });
      console.log(response);

      // setToken(response);
    };
    fetchUser();
  });

  const submitHandler = () => {
    event?.preventDefault();
    setUser({
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    });
  };

  return (
    <form
      className="flex flex-col justify-start items-start m-10"
      onSubmit={submitHandler}
    >
      <label htmlFor="name">Username</label>
      <input
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs mb-5"
        type="text"
        name="name"
        ref={usernameRef}
      />
      <label htmlFor="password">Password</label>
      <input
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs mb-5"
        type="password"
        name="password"
        ref={passwordRef}
      />
      <button type="submit" className="btn btn-success">
        Login
      </button>
    </form>
  );
};

export default Login;
