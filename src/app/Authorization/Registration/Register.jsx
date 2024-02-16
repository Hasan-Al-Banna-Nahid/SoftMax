"use client";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const form = e.target;
    const mobile_number = form.mobile.value;
    const name = form.name.value;
    const password = form.password.value;
    const password2 = form.password2.value;

    const datas = { mobile_number, name, password, password2 };

    fetch("https://softmaxshop.com/user/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile_number, name, password, password2 }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(data.message);
          router.push("/");
          localStorage.setItem("access-token", data.token.access);
          localStorage.setItem("refresh-token", data.token.refresh);
        }
      })

      .catch((err) => {
        const toastId = toast.loading("Loading...");
        toast.dismiss(toastId);
        toast.error(err);
        return;
      });
  };

  return (
    <div>
      <Toaster />

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            width={800}
            height={800}
            src="/Assests/register.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Name</span>
                  </label>
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered font-bold"
                    required
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Mobile Number</span>
                  </label>
                  {errors.mobile && (
                    <span className="text-red-600">
                      Mobile Number is required
                    </span>
                  )}
                  <input
                    type="number"
                    placeholder="Your Number"
                    className="input input-bordered font-bold"
                    required
                    {...register("mobile", { required: true })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  {errors.password && (
                    <span className="text-red-600">
                      1.Password Must Have 8 Characters long & Not exceed 20
                      Character
                      <br /> 2.One Uppercase & One Lowercase letter Required{" "}
                      <br /> 3.Must Have One Special Character <br /> 4.Must be
                      Includes Number{" "}
                    </span>
                  )}
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered font-bold"
                    name="password"
                    required
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      minLength: 8,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].)/i,
                    })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Confirm Password
                    </span>
                  </label>

                  <span className="text-red-600">{errorMessage}</span>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered font-bold"
                    name="confirmPassword"
                    required
                    {...register("password2", {
                      required: true,
                    })}
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </div>

              {errors.exampleRequired && <span>This field is required</span>}
            </form>
            <Link
              href={"/Authorization/Login"}
              className="link link-primary font-bold"
            >
              Already Have An Account,Please{" "}
              <span className="text-xl text-red-700">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
