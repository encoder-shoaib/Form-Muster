import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';



const Grandpa = () => {

    
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <section className="flex">
                        <Dad></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
            </section>


        </div>
    );
};

export default Grandpa;


/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value. value could be anything
 * 3. useContext to access value in the context API
*/