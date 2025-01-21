import { useState } from "react";

const StateFullForm = () => {
    const [name ,setName] = useState('Shoaib Ahmmed');
    const [email ,setEmail] = useState(null);
    const [password ,setPassword] = useState(null);
    const [error ,setError] = useState('')
    
    const handelSubmit = e =>{
        e.preventDefault();

        if(password.length<6){
            setError('password must be 6 character')
        }
        else{
            setError('')
            console.log(name ,email,password)
        }

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
                <input onChange={handleNameChange}  value={name}
                type="text" name='name'  />
                <br />

                <input onChange={handleEmailChange} 
                type="email" name = 'email' />

                <br />
                <input onChange={handlePhoneChange} type="password" name = 'phone' required />
                <br />
                <input type="submit" value='submit'  />
            </form>

            {
                error && <p>{error}</p>
            }

        </div>
    );
};

export default StateFullForm;