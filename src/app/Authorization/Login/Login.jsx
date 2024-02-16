"use client";

import React, { useState } from "react";
import Image from "next/image";

import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const mobile_number = form?.mobile.value;
    const password = form?.password.value;
    const data = { mobile_number, password };
    fetch("https://softmaxshop.com/user/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile_number, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        const access_token = data.token.access;
        const refresh_token = data.token.refresh;
        const user = data?.user;

        toast.success(data.msg);
        router.push("/");

        typeof window !== "undefined"
          ? window.localStorage.setItem("access-token", access_token)
          : null;
        typeof window !== "undefined"
          ? window.localStorage.setItem("refresh-token", refresh_token)
          : null;
        typeof window !== "undefined"
          ? window.localStorage.setItem("user", JSON.stringify(user))
          : null;
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
        return;
      });
  };

  return (
    <div>
      <div>
        <Toaster />
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              width={800}
              height={800}
              src="/Assests/login.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">
                        Mobile Number
                      </span>
                    </label>

                    <input
                      type="number"
                      placeholder="Your Number"
                      className="w-96 input input-bordered font-bold"
                      required
                      name="mobile"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Password</span>
                    </label>

                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered font-bold"
                      name="password"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                  <Link
                    href={"/Authorization/Registration"}
                    className="link link-primary font-bold"
                  >
                    New To SoftMax,Please{" "}
                    <span className="text-xl text-red-700">Register</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
