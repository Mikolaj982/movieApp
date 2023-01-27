import React, {useState} from "react";
import './SignIn.scss'
import cinema from '../../img/cinema1.jpg';
export const SignIn:React.FC = () => {

    const [signInData, setSignInData] = useState({
        email:'',
        password:'',
    })
    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(signInData)
    }
    const handleSignInData = (e: any) => {
        setSignInData({
            ...signInData,
            [e.target.name]: e.target.value,
        })
    }
    return <>
        <div className='container'>
            <div className='formContainer'>
            <h1>Sign In</h1>
        {/*        */}
            <form onSubmit={onSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    name='email'
                    onChange={handleSignInData}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleSignInData}/>
                <button>Sign In</button>
            </form>
            </div>
        {/*        */}
            <img src={cinema}/>
        </div>
    </>
}