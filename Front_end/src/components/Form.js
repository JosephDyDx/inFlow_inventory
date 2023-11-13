import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

export const form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              validate: {
                  checkLength: (value) => value.length >= 6,
                  matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                      value
                  )
      
              }
            })}
          />
          {errors.password?.type === "required" && (
    <p className="errorMsg">Password is required.</p>
)}
{errors.password?.type === "checkLength" && (
    <p className="errorMsg">
    	Password should be at-least 6 characters.
    </p>
)}
{errors.password?.type === "matchPattern" && (
    <p className="errorMsg">
    	Password should contain at least one uppercase letter, lowercase
letter, digit, and special symbol.</p>
 )}

        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>

    </div>
    
    
  );
}
