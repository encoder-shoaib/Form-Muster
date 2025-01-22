import Special from "../Special/Special";



const MySelf = ({assets}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section className="flex">
                <Special assets ={assets}></Special>
            </section>
        </div>
    );
};

export default MySelf;