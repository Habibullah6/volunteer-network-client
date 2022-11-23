import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './RegisterForm.css';

const RegisterForm = () => {
    const { id } = useParams()
    const [event, setEvent] = useState({})
    const { user } = useAuth()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`https://volunteer-network.up.railway.app/eventRegister`, {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => {
        if(res.ok){
        alert("event register successfully")
        }
        })
        reset()
    };

    useEffect(() => {
        fetch(`https://volunteer-network.up.railway.app/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data)
            })
    }, [])

    


    return (
        <div className='register-form mt-5'>
            <h4>Register as a volunteer.</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder='Full Name' value={user.displayName || " "} />
                <input {...register("email", { required: true })} placeholder='Email' value={user.email || " "} />
                <input type="date" {...register("Date")} />
                <input type="text" {...register('Description')} placeholder='Description' />
                <input type="text" {...register("title")} placeholder='Title' value={event.title || " "} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="register" className='btn btn-primary border-0' />
            </form>
        </div>



    );
};

export default RegisterForm;