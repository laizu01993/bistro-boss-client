const SectionTitle = ({heading, subHeading}) =>{
    return (
        <div className="text-center md:w-4/12 mx-auto my-8">
            <p className="text-yellow-500 mb-3">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-3 py-2 border-gray-300 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;