import { useContext } from "react";
import { AssetsContext } from "../Grandpa/Grandpa";



const Special = ({assets}) => {
    const gift = useContext(AssetsContext)

    return (
        <div>
            <h2>Special</h2>
            <h4>i have a :{assets}</h4>
            <h4>also i have a : {gift}</h4>

        </div>
    );
};

export default Special;