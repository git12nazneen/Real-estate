import React, { useContext, useState } from 'react';
import registerImg from '../assets/a.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

const Register = () => {

    const{createUser} = useContext(AuthContext);
    const [error, setError] = useState('')
    const [ success , setSuccess ] = useState('')
    const [showPassword, setShowpassword] = useState(false);
    const location = useLocation();
	const navigate = useNavigate();
	console.log('location in login', location)
    // const [loading, setLoading] = useState(false);


    const {
		register,
		formState: { errors },
		handleSubmit,
	  } = useForm()

	  const onSubmit = (data) => {
   
        const {email, password} = data
        if(password.length < 6){
            swal('Length must be at least 6 character');
            return;
        }
        if(!/[A-Z]/.test(password)){
            swal('Your password should have one uppercase character')
            return;
        }
        if(!/[a-z]/.test(password)){
            swal('Your password should have one lowercase character')
            return;
        }

        createUser(email, password)
        .then(result =>{
			if(result.user){
                swal("Success fully login");
				navigate(location?.state ? location.state : '/');
			}
		})
        .catch(error => {
            swal('Sign in failed!');
            console.error('Sign in error:', error);
          })
          
            // reset error and success
            setSuccess('');
            setError('');
    }


    return (
        <div>
             <div className="hero h-full" style={{backgroundImage: `url(${registerImg})`}}>
             <div className=" hero-overlay hero-content flex-col lg:flex-row-reverse">
                 
                <div className="card  w-3/6 shrink-0  max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered"
                     {...register("email", { required: true })}
                    />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered" 
                      {...register("name", { required: true })}
                    />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image url</span>
                    </label>
                    <input type="text" placeholder="image url" name="image" className=" input input-bordered"
                      {...register("image")}
                    />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative mb-3 ">
                    <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="w-full py-3 px-4 input input-bordered" 
                      {...register("password", { required: true })}
                    />
                    <span className="absolute top-3 right-2"  onClick={()=> setShowpassword (!showPassword)}>
                        {
                            showPassword ? <IoEyeOutline /> :
                            <FaRegEyeSlash />
                        }
                    </span>
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                {
                     error && <p className="text-red-700">{error}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
                <p className="text-center my-4">Already have an account  <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>

                </div>
                <div className="text-center lg:text-left w-3/6">
               
                 </div>
            </div>
         
        </div>
        <ToastContainer />
        </div>
    );
};

export default Register;
