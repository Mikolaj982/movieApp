import {useState} from "react";


export const SignIn = () => {

    const [signData, setSignData] = useState({
        email:'',
        password:'',
    })
    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(signData)
    }
    return <>
        <h1>Sign In</h1>
        {/*        */}
        <form onSubmit={onSubmit}>
            <label htmlFor='email'>Email</label>
            <input
                name='email'
                type='email'
                onChange={(e) => setSignData({
                    ...signData,
                    [e.target.name]: e.target.value,
                })}
            />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' onChange={(e) => setSignData({
                ...signData,
                [e.target.name]: e.target.value,
            })}/>
            <button>Sign In</button>
        </form>
        {/*        */}
        <img/>
    </>
}