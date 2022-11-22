import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className="registerLogin-form mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>

            <input  {...register("email")} placeholder='email' />
            <input {...register("password", { required: true })} placeholder='password' />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" value="Register" className="bg-primary text-white border-0"/>
            
        </form>
    </div>
    );
};

export default Register;