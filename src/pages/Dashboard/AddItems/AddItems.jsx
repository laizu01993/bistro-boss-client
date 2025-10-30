import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItems = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <SectionTitle subHeading={"What's new"}
                heading={"Add an item"}></SectionTitle>

            {/* Form */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />
                    {/* Category field */}
                        <select {...register('category')} defaultValue="Category" className="select">
                        <option disabled={true}>Category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soups">Soups</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    <input type="submit" />
                </form>

            </div>

        </div>
    );
};

export default AddItems;