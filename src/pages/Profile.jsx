import React, { useContext, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import { AuthContext } from '../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Profile = () => {
    const{user} = useContext(AuthContext);
    console.log(user)
    const {
		register,
		formState: { errors },
        setValue
	  } = useForm()

      useEffect(() => {
        setValue('email', user?.email);
        setValue('name', user?.displayName);
        setValue('image', user?.photoURL);
    }, [user, setValue]);
    return (
        <div>
           <PageTitle title='Profile'></PageTitle>
           <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900 mx-auto shadow-md shadow-gray-400 my-10" >
                <div className="mb-8 text-center">
                    <div className='rounded-full items-center'>
                         <img className='rounded-full  mx-auto shadow-xl shadow-slate-200' src={user?.photoURL} alt="" />
                    </div>
                    <p className="text-xl mt-6  text-gray-800">{ user?.displayName}</p>
                </div>
                <form noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                    <div className="form-control">
                    <label className="label ">
                        <span className="label-text ">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered "
                     {...register("email", { required: true })}
                    />
                    </div>
                    <div className="form-control">
                    <label className="label ">
                        <span className="label-text ">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered " 
                      {...register("name", { required: true })}
                    />
                    </div>
                    <div className="form-control">
                    <label className="label ">
                        <span className="label-text ">Img url</span>
                    </label>
                    <input type="text" placeholder="image url" name="image" className=" input input-bordered "
                      {...register("image")}
                    />
                    </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                        <Link to='/updateProfile'>
                         <button  type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-rose-950 text-white">Click to Update Profile</button>
                         </Link>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Profile;