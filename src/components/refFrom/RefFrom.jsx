import { useEffect, useRef } from "react";

const RefFrom = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handelSubmit = e =>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)

    }

    useEffect(()=>{
        nameRef.current.focus()
    },[])
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input ref={nameRef} type="text" name='name'  />
                <br />
                <input ref={emailRef} defaultValue={'example@gmail.com'} type="email" name = 'email' />
                <br />
                <input ref={passwordRef} type="password" name = 'password' required />
                <br />
                <input type="submit" value='submit'  />
            </form>
       
        </div>
    );
};

export default RefFrom;