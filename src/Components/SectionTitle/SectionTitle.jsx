
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-8">
            <p className="text-blue-600 mb-2"> --- {subHeading} ---</p>
            {/* <p className="text-3xl uppercase font-bold text-orange-500 border-y-4 py-4">{heading}</p> */}
            <p className="text-3xl font-extrabold bg-gradient-to-bl from-sky-300 to-blue-700 bg-clip-text text-transparent border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;
