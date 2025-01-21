import { useState } from "react";

const StateFullForm = () => {
    const [name ,setName] = useState(null);
    const [email ,setEmail] = useState(null);
    const [password ,setPassword] = useState(null);
    
    const handelSubmit = e =>{
        e.preventDefault();
        console.log(name ,email,password)

    }
    const handleNameChange = e =>{
        console.log(e.target.value)
        setName(e.target.value)

    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePhoneChange = e =>{
        setPassword(e.target.value)
    }

    return (
        <div>              
            <form onSubmit={handelSubmit}>
                <input onChange={handleNameChange} 
                type="text" name='name'  />
                <br />

                <input onChange={handleEmailChange} 
                type="email" name = 'email' />

                <br />
                <input onChange={handlePhoneChange} type="password" name = 'phone' />
                <br />
                <input type="submit" value='submit'  />
            </form>

        </div>
    );
};

export default StateFullForm;