import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {

    const {_id, name, recipe, category, price} = useLoaderData();
    
    const { register, handleSubmit, reset } = useForm();

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const updatedItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, updatedItem);
            console.log(menuRes.data)

            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data)
    }

    return (
        <div className="p-6">
            <SectionTitle heading={"Update Item"}></SectionTitle>

            {/* Form */}
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Name field */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span>Recipe Name*</span>
                        </label>
                        <input type="text"
                        defaultValue={name} 
                            placeholder="Recipe Name" {...register("name", { required: true })} className="input input-bordered w-full" />
                    </div>

                    <div className="flex gap-6">
                        {/* Category field */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span>Category*</span>
                            </label>
                            <select {...register('category', { required: true })} 
                            defaultValue={category} className="select select-bordered w-full">
                                <option disabled={true}>Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soups">Soups</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price field */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span>Price*</span>
                            </label>
                            <input type="text"
                            defaultValue={price}
                                placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* Recipe Details */}
                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend">Recipe Details</legend>
                        <textarea {...register("recipe")} className="textarea h-24" placeholder="Recipe Details"
                        defaultValue={recipe}></textarea>
                    </fieldset>

                    <div className="mt-4">
                        <input {...register("image", { required: true })} type="file"
                        className="file-input" />
                    </div>

                    <button className="mt-4 btn btn-lg bg-amber-500 hover:bg-amber-400">Update Item <FaUtensils></FaUtensils></button>
                </form>

            </div>
        </div>
    );
};

export default UpdateItem;