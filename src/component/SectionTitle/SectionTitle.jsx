
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-xl text-green-700 capitalize">{subHeading}</p>
            <h3 className="text-3xl my-4 capitalize font-bold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;