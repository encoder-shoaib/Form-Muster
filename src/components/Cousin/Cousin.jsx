import Special from "../Special/Special";



const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            {
                name ==='Rafsan' && <Special></Special> 
            }
            
        </div>
    );
};

export default Cousin;