import React, { useContext } from 'react';
import PageTitle from '../components/PageTitle';
import { AuthContext } from '../provider/AuthProvider';
import { useForm } from 'react-hook-form';

const Profile = () => {
    const{user} = useContext(AuthContext);
    console.log(user)
    const {
		register,
		formState: { errors },
        setValue
	  } = useForm()

      setValue('email', user?.email);
      setValue('name', user?.displayName);
      setValue('image', user?.photoURL);

    return (
        <div>
           <PageTitle title='Profile'></PageTitle>
           <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900 mx-auto shadow-xl shadow-gray-700 my-10" >
                <div className="mb-8 text-center">
                    <div className='rounded-full items-center'>
                         <img className='rounded-full  mx-auto shadow-xl shadow-slate-400' src={user?.photoURL} alt="" />
                    </div>
                    <p className="text-sm text-gray-400">{}</p>
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
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-rose-950 text-white">Update Profile</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;