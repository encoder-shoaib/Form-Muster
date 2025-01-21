import useInputState from "../../hooks/useInputState";

const HookFrom = () => {
    const [name , handleNameChange] = useInputState('SHOAIB')
    const handelSubmit = e =>{
        console.log('form data ', name)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name='name'  />
                <br />
                <input type="email" name = 'email' />
                <br />
                <input type="password" name = 'password' />
                <br />
                <input type="submit" value='submit'  />
            </form>
        </div>
    );
};

export default HookFrom;