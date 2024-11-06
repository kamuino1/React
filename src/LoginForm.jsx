import React from 'react';
import { useForm } from 'react-hook-form';



export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <p>Email is required and must be valid</p>}
        
        <label>Password</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <p>Password is required</p>}
        
        <button type="submit">Submit</button>
      </form>
    );
  }