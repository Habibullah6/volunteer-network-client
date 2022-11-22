import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";


export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    
    const navigate = useNavigate();
    const location = useLocation();
    const redirectUri = location.state?.from || '/';

    const {handleGoogleSignIn, setUser} = useAuth();
    const signInUsingGoogle = () => {
        handleGoogleSignIn()
        .then(result => {
        
        setUser(result?.user)
        navigate(redirectUri)
        })
        .catch(error => {
        alert(error.message)
        })
    }

    return (

        <div className="registerLogin-form mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input  {...register("email")} placeholder='email' />
                <input {...register("password", { required: true })} placeholder='password' />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Login" className="bg-primary text-white border-0"/>
                <p>Are you new here ? please register <NavLink to='/register'>Register</NavLink> </p>
                <p className="mt-3">Or Google Login</p>
                <input onClick={signInUsingGoogle} value="Google Sign In" type='button' className="bg-primary text-white border-0"/>
                
                
            </form>
        </div>
    );
}