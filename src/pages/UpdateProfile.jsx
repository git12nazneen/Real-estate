import React, { useContext, useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import { AuthContext } from '../provider/AuthProvider';
import { useForm } from 'react-hook-form';

const UpdateProfile = () => {
    const { user , updateUserProfile } = useContext(AuthContext);
    const [imageSrc, setImageSrc] = useState(user?.photoURL);

    const {
        register,
        formState: { errors },
        handleSubmit, 
        setValue
    } = useForm({
        defaultValues: {
            email: user?.email || '', 
            name: user?.displayName || '', 
            image: user?.photoURL || '', 
        }
    });

    useEffect(() => {
        setValue('email', user?.email || '');
        setValue('name', user?.displayName || '');
        setValue('image', user?.photoURL || '');
    }, [user, setValue]);


    const onSubmit = (data) => {
        console.log("Updated data:", data);
   
        updateUserProfile(data.name, data.image)
        
        .then( ()=>{
                window.location.reload()
                swal("Success update");
        })
        if (data.image !== imageSrc) {
            setImageSrc(data.image);
        }
    };

    return (
        <div>
             <PageTitle title='Update profile'></PageTitle>
             <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900 mx-auto shadow-md shadow-gray-400 my-10" >
                <div className="mb-8 text-center">
                    <div className='rounded-full items-center'>
                         <img className='rounded-full  mx-auto shadow-xl shadow-slate-200' src={imageSrc} alt="" />
                    </div>
                    <p className="text-xl mt-6 text-gray-800">{user?.displayName || ''}</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-12"> 
                    <div className="space-y-4">
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered "
                                {...register("email", { required: true })}
                                readOnly
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
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-rose-950 text-white">Update</button> 
                        </div> 
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
