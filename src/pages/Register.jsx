import React from 'react';
import registerImg from '../assets/a.jpg'


const Register = () => {
    return (
        <div>
             <div className="hero h-full" style={{backgroundImage: `url(${registerImg})`}}>
             <div className=" hero-overlay hero-content flex-col lg:flex-row-reverse">
                 
                <div className="card  w-3/6 shrink-0  max-w-sm shadow-2xl bg-base-100">
                <form  className="card-body">
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
                </div>
                <div className="text-center lg:text-left w-3/6">
                  
                 </div>
            </div>
         
        </div>
        </div>
    );
};

export default Register;

{/* <div className='w-3/6'>
<img  src={registerImg} alt="" />
</div>
<div className='w-3/6'>
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form  className="card-body">
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
<p className="text-center my-4">Already have an account  <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
</div>
</div>  */}