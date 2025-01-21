
const SimpleFrom = () => {
    const handelSubmit = e =>{
        e.preventDefault()
        console.log('from submited')
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" name='name'  />
                <input type="text" name = 'email' />
                <input type="text" name = 'phone' />
                <br />
                <input type="submit" value='submit'  />
            </form>
        </div>
    );
};

export default SimpleFrom;