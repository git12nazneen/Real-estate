import React, { useContext, useState } from 'react';
import registerImg from '../assets/a.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Register = () => {

    const{createUser} = useContext(AuthContext);
    const [error, setError] = useState('')
    const [ success , setSuccess ] = useState('')

    const handleRegister = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // const accepted = e.target.terms.checked;
        console.log(name, photo, email, password)


        if(password.length < 6){
            setError('Length must be at least 6 character');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setError('Your password should have one uppercase character')
            return;
        }
        else if(!/[a-z]/.test(password)){
            setError('Your password should have one lowercase character')
            return;
        }
        // else if(!accepted){
        //     setError('Please accept our terms and conditions')
        //     return;
        // }

        // reset error and success
        setSuccess('');
        setError('');

        // add validation




        // create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            if(result.user.emailVerified){
                setSuccess('user logged in success')
            }
            else{
                alert()
            }
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        })

    }

    return (
        <div>
             <div className="hero h-full" style={{backgroundImage: `url(${registerImg})`}}>
             <div className=" hero-overlay hero-content flex-col lg:flex-row-reverse">
                 
                <div className="card  w-3/6 shrink-0  max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <input type="text" placeholder="photo" name="photo" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
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
        </div>
    );
};

export default Register;
