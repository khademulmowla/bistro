import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { name, category, recipe, price, _id } = useLoaderData();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        // console.log(res.data)
    }

    return (
        <div>
            <SectionTitle heading="Update Item" subHeading="Update now"></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-2">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>
                        </div>
                        <input type="text" defaultValue={name} {...register("name", { required: true })} required placeholder="Recipe Name" className="input input-bordered w-full" />
                    </label>
                    <div className='flex gap-6'>
                        {/* category  */}
                        <label className="form-control w-full my-2">
                            <div className="label">
                                <span className="label-text">Recipe Name</span>
                            </div>
                            <select defaultValue={category} {...register('category', { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        {/* price  */}
                        <label className="form-control w-full my-2">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input type="number" defaultValue={price} {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* recipe details  */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register("recipe", { required: true })} defaultValue={recipe} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                    {/* file input  */}
                    <div className='form-control w-full my-2'>
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className='btn'>Update</button>
                </form>
            </div>


        </div>
    );
};

export default UpdateItem;